import { Router } from 'express';
import User from './app/controller/UserController';

const routes = Router();

routes.post('/createuser', User.create);
routes.get('/readusers', User.read);
routes.get('/readusers/:id', User.show);
routes.put('/updateuser/:id', User.update);
routes.delete('/deleteuser/:id', User.delete);

export default routes;