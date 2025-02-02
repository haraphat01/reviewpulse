import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import getDb from '../../lib/db';

// Generate a random 6-digit OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const POST = async (req) => {
    try {
        const { firstName, lastName, email, password } = await req.json();
        console.log(firstName, lastName, email, password);
        
        // Input validation
        if (!firstName || !lastName || !email || !password) {
            return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ error: 'Invalid email address.' }), { status: 400 });
        }

        if (password.length < 8) {
            return new Response(JSON.stringify({ error: 'Password must be at least 8 characters.' }), { status: 400 });
        }

        const db = await getDb();
        const users = db.collection('users');

        // Check if the user already exists
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ error: 'User already exists.' }), { status: 409 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate OTP
        const otp = generateOTP();
        const otpExpiry = new Date();
        otpExpiry.setMinutes(otpExpiry.getMinutes() + 10); // OTP valid for 10 minutes

        // Save user to database with OTP
        const newUser = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            emailVerified: false,
            createdAt: new Date(),
            otp,
            otpExpiry,
        };
        const result = await users.insertOne(newUser);

        // Generate JWT token for immediate use
        const token = jwt.sign(
            { userId: result.insertedId, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // In production, you would send this OTP via email
        console.log('OTP for email verification:', otp);

        return new Response(
            JSON.stringify({
                message: 'User created successfully. Please verify your email with the OTP.',
                token,
            }),
            { status: 201 }
        );
    } catch (error) {
        console.error('Error during signup:', error);
        return new Response(JSON.stringify({ error: 'Internal server error.' }), { status: 500 });
    }
};