import User from '../model/02_userModel';

export default {
    Render(user: User) {
        return {
            id: user.id,
            userName: user.userName,
            contact: user.contact,
            email: user.email,
            points: user.points,
            collect: user.collect
        }
    }
}