import { verifyToken } from './authentication.js';

export function verifyTokenMiddleware(req, res, next) {
    try {
        const token = req.body.token || req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({
                success: false,
                error: {
                    code: 'MISSING_TOKEN',
                    message: 'Authentication token is required'
                }
            });
        }
                
        // const decoded = verifyToken(token);
        // req.user = decoded; // Attach the decoded user info to the request
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: {
                code: 'INVALID_TOKEN',
                message: 'Invalid or expired token'
            }
        });
    }
} 