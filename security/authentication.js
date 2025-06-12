import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// Secret key rotation mechanism
let JWT_SECRET = generateNewSecret();

function generateNewSecret() {
    return crypto.randomBytes(64).toString('hex');
}

// Rotate secret every 3 hours
setInterval(() => {
    JWT_SECRET = generateNewSecret();
    console.log('JWT secret rotated at:', new Date().toISOString());
}, 3 * 60 * 60 * 1000); // 3 hours in milliseconds

export function generateKey(name, email) {
    return "user_"+name+email;
    const payload = {
        name,
        email,
        iat: Math.floor(Date.now() / 1000), // Issued at time
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // Expires in 24 hours
    };
    
    return jwt.sign(payload, JWT_SECRET);
}

// Function to verify token with current secret
export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
}