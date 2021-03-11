import { verify } from "jsonwebtoken";
import User from "../models/User";

export default async function (req, res, next) {

    console.log("middleswwares");

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'token is missing' })
    }

    const [type, token] = authHeader.split(' ');

    try {
        const decoded = await verify(token, jwt.secret);
        const id = decoded.sub;
        req.user = id;

        const user = await User.findById(id);

        if (user.deleted === true) {
            return res.status(401).json({ error: 'Disable user' });
        }

        return next();

    } catch (error) {
        return res.status(401).json({ error: 'invalid JWT token' })
    }

}