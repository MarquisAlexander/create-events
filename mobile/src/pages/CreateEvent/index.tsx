import React, { useRef, useCallback } from 'react'
import { Image, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert, StatusBar } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';



import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Title, GoListEvents, GoListEventsText } from './styles';

interface SignUpFormData {
    name: string;
    data: string;
    category: string;
    description: string;

}

const CreateEvent: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();


    const handleCreateEvent = useCallback(async (data: SignUpFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                data: Yup.string().required('E-mail obrigatório'),
                category: Yup.string().required(),
                description: Yup.string().required(),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await api.post('/event', data);

            navigation.navigate('ShowEvent');

            console.log(data);




            Alert.alert('Evento criado com sucesso!!');

            // navigation.goBack();


        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                // const errors = getValidationErrors(err);

                // formRef.current?.setErrors(errors);

                return;
            }

            Alert.alert('Esse evento já existe, tente novamente.'
            );
        }
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#35605A" />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>

                        <View>
                            <Title>Criar evento</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleCreateEvent}>
                            <Input
                                autoCapitalize="words"
                                name="name"
                                icon="user"
                                placeholder="Nome do evento"
                            />

                            <Input
                                keyboardType="numeric"
                                autoCorrect={false}
                                autoCapitalize="none"
                                name="data"
                                icon="calendar"
                                placeholder="data do evento"
                            />

                            <Input
                                name="category"
                                icon="award"
                                placeholder="Categoria do evento"
                                returnKeyType="send"
                            />

                            <Input

                                name="description"
                                icon="clipboard"
                                placeholder="Descrição do evento"
                                returnKeyType="send"
                                onSubmitEditing={() => formRef.current?.submitForm()}
                            />


                        </Form>

                        <Button onPress={() => formRef.current?.submitForm()}>Criar</Button>

                    </Container>
                </ScrollView>

            </KeyboardAvoidingView>
            <GoListEvents onPress={() => navigation.navigate('ShowEvent')}>
                {/* <Icon name="arrow-left" size={20} color="#fff" /> */}
                <GoListEventsText>Ver Eventos</GoListEventsText>
            </GoListEvents>
        </>
    );
}

export default CreateEvent;