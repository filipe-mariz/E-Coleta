import Points from '../model/01_pointModel'

export default {
    Render(points: Points) {
        return {
            id: points.id,
            state: points.state,
            city: points.city,
            street: points.street,
            lat: points.lat,
            long: points.long,
            //collect: points.collect,
            //user: points.user
        }
    }
}