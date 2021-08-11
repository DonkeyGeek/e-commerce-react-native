import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import globalStyles from '../styles/globalStyles';

const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
    return (
        <CoursesStackNavigator.Navigator
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
            <CoursesStackNavigator.Screen
                name="Landing"
                component={Landing}
                options={{title: 'Catalogue'}}
            />
            <CoursesStackNavigator.Screen
                name="Details"
                component={CourseInfos}
                options={({ route }) => (
                    {
                        title: route.params.title
                    }
                ) }
            />
        </CoursesStackNavigator.Navigator>
    )
}