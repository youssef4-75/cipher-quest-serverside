import { registerUser } from "../logic/authenticate.js";

export function registerUserEndPoint(app) {
    app.post("/register", async (req, res) => {
        try {
            const { email, password, name } = req.body;
            console.log(`[POST /register] Registration attempt - Email: ${email}, Name: ${name}`);
            const result = await registerUser(email, password, name);
            console.log(`[POST /register] Registration successful - Token generated ${result}`);
            
            res.json({
                success: true,
                data: { token: result }
            });
        }
        catch (error) {
            console.error('[POST /register] Registration failed:', error.message);
            res.status(401).json({ message: 'Unable to complete registration. Please try again later.' });
        }
    });
}
