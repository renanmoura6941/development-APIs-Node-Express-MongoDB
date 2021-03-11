import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/User";
import jwtConfig from "../config/jwt";


class AuthController {

    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return status(400).json({ error: 'Credentials do not match' })
        }

        const checkPassword = await bcryptjs.compare(password, user.password);

        if (!checkPassword) {
            return res.status(400).json({ erro: 'Credentials do not match' });
        }

        const { secret, expiresIn } = jwtConfig;

        const token = jwt.sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });

        return res.json({ user: user.show(), token })
    }
}

export default new AuthController();