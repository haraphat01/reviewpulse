import getDb from '../../lib/db';

export const POST = async (req) => {
    try {
        const { email, otp } = await req.json();

        if (!email || !otp) {
            return new Response(JSON.stringify({ error: 'Email and OTP are required.' }), { status: 400 });
        }

        const db = await getDb();
        const users = db.collection('users');

        // Find user by email
        const user = await users.findOne({ email });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found.' }), { status: 404 });
        }

        // Check if OTP matches and hasn't expired
        if (user.otp !== otp) {
            return new Response(JSON.stringify({ error: 'Invalid OTP.' }), { status: 400 });
        }

        if (new Date() > new Date(user.otpExpiry)) {
            return new Response(JSON.stringify({ error: 'OTP has expired.' }), { status: 400 });
        }

        // Update user as verified and remove OTP
        await users.updateOne(
            { email },
            { 
                $set: { emailVerified: true },
                $unset: { otp: "", otpExpiry: "" }
            }
        );

        return new Response(
            JSON.stringify({
                message: 'Email verified successfully.',
                verified: true
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error during OTP verification:', error);
        return new Response(JSON.stringify({ error: 'Internal server error.' }), { status: 500 });
    }
};