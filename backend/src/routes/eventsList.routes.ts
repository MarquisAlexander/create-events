import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

const eventListRouter = Router();

import EventsRepository from '../events/EventsRepository';
import TicketsRepository from '../events/TicketsRepository';


eventListRouter.get('/', async (request, response) => {
    const eventsRepository = getCustomRepository(EventsRepository);
    const events = await eventsRepository.find();

    const ticketsRepository = getCustomRepository(TicketsRepository);
    const tickets = await ticketsRepository.find();

    return response.json(events);
});

export default eventListRouter;