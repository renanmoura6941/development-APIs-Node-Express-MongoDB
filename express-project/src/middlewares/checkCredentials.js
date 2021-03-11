import { verify } from "jsonwebtoken";
import { next } from "sucrase/dist/parser/tokenizer";

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
        return next();

    } catch (error) {
        return res.status(401).json({error:'invalid JWT token'})
    }

}