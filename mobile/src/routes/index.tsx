import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateEvent from '../pages/CreateEvent';
import ShowEvent from '../pages/ShowEvents';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#D8E4FF' },
        }}
    >
        <Auth.Screen name="CreateEvent" component={CreateEvent} />
        <Auth.Screen name="ShowEvent" component={ShowEvent} />
    </Auth.Navigator>
);

export default AuthRoutes;