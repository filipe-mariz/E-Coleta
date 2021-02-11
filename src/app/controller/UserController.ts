import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import User from '../model/02_userModel';
import UserView from '../view/02_userView';

export default {
    async create(request: Request, response: Response) {
        const {
            userName,
            contact,
            email            
        } = request.body

        const userRepository = getRepository(User);

        const data = {
            userName,
            contact,
            email 
        };

        const schemma = Yup.object().shape({
            userName: Yup.string().required(),
            contact: Yup.string().required(),
            email: Yup.string().required()
        }) 

        await schemma.validate(data, {
            abortEarly: false
        })

        const user = userRepository.create(data);
        await userRepository.save(user);
        response.status(201).json({ user })

    },

    async read(request: Request, response: Response) {
        const userRepository = getRepository(User);

        //const user = await userRepository.find(user);

        //return response.json(UserView.Render(user));

    },

    async show(request: Request, response: Response) {

    },

    async update(request: Request, response: Response) {

    },

    async delete(request: Request, response: Response) {

    }
}