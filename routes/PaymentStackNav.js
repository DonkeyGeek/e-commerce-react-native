import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import Payments from '../screens/Payments';
import globalStyles from '../styles/globalStyles';

const PaymentStackNavigator = createStackNavigator();

export const PaymentNavigator = () => {
    return (
        <PaymentStackNavigator.Navigator
            screenOptions={({ navigation }) => (
                {
                    headerStyle: { backgroundColor: globalStyles.green },
                    headerTitleStyle: { fontWeight: 'bold'},
                    headerTintColor: globalStyles.white,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                            <Item 
                                title="Panier"
                                iconName="shopping-cart"
                                onPress={() => navigation.navigate('Cart')}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                            <Item 
                                title="Menu"
                                iconName="menu"
                                onPress={() => navigation.openDrawer()}
                            />
                        </HeaderButtons>
                    )
                }
            )}
        >
            <PaymentStackNavigator.Screen
                name="Payment"
                component={Payments}
                options={{title: 'Mes achats'}}
            />
        </PaymentStackNavigator.Navigator>
    )
}