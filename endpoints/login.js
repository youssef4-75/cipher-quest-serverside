import { loginUser } from "../logic/authenticate.js";

/**
 * Login endpoint handler
 * @param {Object} app - Express application instance
 */
export function loginUserEndPoint(app) {
    app.post("/login", async (req, res) => {
        try {
            const { email, password } = req.body;
            
            // Validate request body
            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    error: {
                        code: 'MISSING_CREDENTIALS',
                        message: 'Email and password are required',
                        details: {
                            email: !email ? 'Email is missing' : null,
                            password: !password ? 'Password is missing' : null
                        }
                    }
                });
            }

            console.log(`[POST /login] Login attempt - Email: ${email}`);
            
            const result = await loginUser(email, password);
            console.log(`[POST /login] Login successful - User authenticated`);
             
            res.json({
                success: true,
                data: result
            }); 
        }
        catch (error) {
            console.error('[POST /login] Login failed:', error.message||error);
            res.status(401).json({ message: error.message||error});
        }
    });
}

