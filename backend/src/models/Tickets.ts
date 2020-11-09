import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import Event from './Event';


@Entity('tickets')
class Ticket {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name_id: string;

    @Column()
    name: string;

    @Column('float')
    valor: number;

    @Column()
    setor: string;

}

export default Ticket;