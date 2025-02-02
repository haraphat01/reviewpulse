import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import getDb from '../../lib/db';

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    // Input validation
    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    const db = await getDb();
    const users = db.collection('users');

    // Check if user exists (by email or phone)
    const user = await users.findOne({
      $or: [{ email: email }],
    });

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found. Kindly sign up.' }), { status: 401 });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: 'Invalid email or password.' }), { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return new Response(
      JSON.stringify({
        message: 'Login successful.',
        token,
       
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error.' }), { status: 500 });
  }
};
