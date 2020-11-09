import { EntityRepository, Repository } from 'typeorm';

import Event from '../models/Event';

@EntityRepository(Event)
class EventsRepository extends Repository<Event> {
    public async findByDate(name: string): Promise<Event | null> {
        // percorrendo o arrau de appointments com o .find e verificando se a data do parsedDate
        // já existe no array ou não 
        const findEvent = await this.findOne({
            where: { name },
        });

        return findEvent || null;
    }
}

export default EventsRepository;