import { Router } from 'express';

import CreateTicketService from '../services/CreateTicketService';

const ticketRouter = Router();


ticketRouter.post('/', async (request, response) => {
    const { name_id, name, valor, setor } = request.body;

    const createTicket = new CreateTicketService();

    const ticket = await createTicket.execute({
        name_id,
        name,
        valor,
        setor,
    });

    // console.log(ticket);

    return response.json(ticket);
});




export default ticketRouter;