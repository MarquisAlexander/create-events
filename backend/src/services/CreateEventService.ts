import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Event from '../models/Event';

interface Request {
    name: string;
    data: string;
    category: string;
    description: string;
}

class CreateEventService {
    public async execute({ name, data, category, description }: Request): Promise<Event> {
        const eventsRepository = getRepository(Event);

        const checkUserExists = await eventsRepository.findOne({
            where: { name },
        });

        if (checkUserExists) {
            throw new AppError('Esse evento já existe, tente criar um evento com outro nome.');
        }

        const event = eventsRepository.create({
            name,
            data,
            category,
            description,
        });

        await eventsRepository.save(event);

        return event;
    }
}

export default CreateEventService;