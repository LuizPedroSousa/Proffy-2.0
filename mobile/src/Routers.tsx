import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Pages/Landing';

const Router: React.FC = () => {
    const { Navigator, Screen } = createStackNavigator();
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={Landing} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Router;