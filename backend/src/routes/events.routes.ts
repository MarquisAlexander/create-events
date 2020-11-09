import { Router } from 'express';

import CreateEventService from '../services/CreateEventService';

const eventRouter = Router();


eventRouter.post('/', async (request, response) => {
    const { name, data, category, description } = request.body;

    const createEvent = new CreateEventService();

    const event = await createEvent.execute({
        name,
        data,
        category,
        description,
    });

    return response.json(event);
});




export default eventRouter;