import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinColumn, ManyToOne } from "typeorm";
import Points from './01_pointModel';
import User from './02_userModel';

@Entity('Collect')
export default class Collect {
    @PrimaryGeneratedColumn('increment') id: number

    @Column('varchar', { length: 15 }) 
    trash: string

    @ManyToMany(() => Points) 
    @JoinColumn({name: 'user_id'})
    points: Points[];

    @ManyToOne(() => User, user => user.collect)
    @JoinColumn({name: 'point_id'})
    user: User
}
