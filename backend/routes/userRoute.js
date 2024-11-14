import express from 'express';
import { signIn, registerUser, createAdmin } from '../models/userModel.js';

const router = express.Router();

router.post('/signin', async (req, res) => {
    try {
        const user = await signIn(req.body.email, req.body.password);
        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.is_admin,
        });
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

router.post('/register', async (req, res) => {
    try {
        const newUser = await registerUser(req.body);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

router.get('/createadmin', async (req, res) => {
    try {
        const admin = await createAdmin();
        res.status(201).send(admin);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

export default router;
