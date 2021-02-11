import { Column, Entity, PrimaryGeneratedColumn, ManyToMany,JoinColumn, OneToMany } from "typeorm";
import Points from './01_pointModel';
import Collect from './03_collectModel';

@Entity('User')
export default class User {
    @PrimaryGeneratedColumn('increment') 
    id: number

    @Column('varchar', { length: 40 }) 
    userName: string

    @Column('varchar', { length: 13 }) 
    contact: string

    @Column('varchar', { length: 50 }) 
    email: string

    @ManyToMany(() => Points) 
    @JoinColumn({name: 'user_id'})
    points: Points[];

    @OneToMany(() => Collect, collect => collect.user)
    @JoinColumn({name: 'point_id'}) 
    collect: Collect[];
}