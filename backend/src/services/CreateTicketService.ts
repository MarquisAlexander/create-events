import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Tickets from '../models/Tickets';

interface Request {
    name_id: string;
    name: string;
    valor: number;
    setor: string;
}

class CreateTicketService {
    public async execute({ name_id, name, valor, setor }: Request): Promise<Tickets> {
        const ticketsRepository = getRepository(Tickets);

        const ticket = ticketsRepository.create({
            name_id,
            name,
            valor,
            setor,
        });

        await ticketsRepository.save(ticket);

        return ticket;
    }
}

export default CreateTicketService;