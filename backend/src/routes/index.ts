import { Router } from 'express';

import eventRouter from './events.routes';
import eventsListRouter from './eventsList.routes';
import ticketRouter from './tickets.routes';

const routes = Router();

routes.use('/event', eventRouter);
routes.use('/eventslist', eventsListRouter);
routes.use('/ticketrouter', ticketRouter);

export default routes;
