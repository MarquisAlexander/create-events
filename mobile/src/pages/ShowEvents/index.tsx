import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, Content, Event, EventList, GoCreateEvent, GoCreateEventText, Title, Header, Strong } from './styles';

interface Event {
    id: string;
    name: string;
    data: string;
    category: string;
    description: string;
}

const ShowEvent: React.FC = () => {

    const navigation = useNavigation();

    const [events, setEvents] = useState<Event[]>();

    useEffect(() => {
        api.get('eventslist').then(response => {
            // console.log(response.data.next);
            setEvents(response.data);
            // setUrl = (response.data.next);
        });
    }, []);

    return (
        <>
            <ScrollView>
                <Header>
                    <Title>Lista de eventos</Title>
                </Header>
                <Container>
                    {events?.map((event) => {
                        return (
                            <>
                                <Event>
                                    <EventList>

                                        <Content>
                                            <Strong>Evento: </Strong> {event.name}
                                        </Content>
                                        <Content>
                                            <Strong>Data: </Strong>
                                            {event.data}
                                        </Content>
                                        <Content>
                                            <Strong>Categoria: </Strong>
                                            {event.category}
                                        </Content>
                                        <Content>
                                            <Strong>Descrição: </Strong>
                                            {event.description}
                                        </Content>
                                    </EventList>
                                </Event>
                            </>
                        )
                    })}</Container>
            </ScrollView>

            <GoCreateEvent onPress={() => navigation.navigate('CreateEvent')}>
                {/* <Icon name="arrow-left" size={20} color="#fff" /> */}
                <GoCreateEventText>Criar Evento</GoCreateEventText>
            </GoCreateEvent>
        </>
    );
}

export default ShowEvent;