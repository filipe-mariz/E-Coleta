import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Collect from './03_collectModel';
import User from './02_userModel';

@Entity('Points') 
export default class Points {
    @PrimaryGeneratedColumn('increment') 
    id: number
    @Column('varchar', { length: 20 })
    state: string

    @Column('varchar', { length: 20 }) 
    city: string

    @Column('varchar', { length: 30}) 
    street: string

    @Column('decimal') 
    lat: number

    @Column('decimal') 
    long: number

    @ManyToMany(() => Collect) 
    @JoinColumn({name: 'user_id'})
    collect: Collect[];

    @ManyToMany(() => User) 
    @JoinColumn({name: 'point_id'})
    user: User[];
}