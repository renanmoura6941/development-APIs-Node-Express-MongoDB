import User from '../models/User';

class UserController {

    async show(req, res) {
        console.log("show");
        const user = await User.findById(req.user);

        if (!user) {
            return res.status(401).json({ error: 'only authenticated user can execute this action' });
        }
        return res.json({ user: user.show() })


    }

    async store(req, res) {
        const { name, email, password } = req.body;


        const user = await User.create({
            name, email, password
        })

        return res.json({ user: user.show() });
    }

}

export default new UserController()