import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Login } from '../screens/Login/Login'
import { Register } from '../screens/Register/Register'
import { Dashboard } from '../screens/Dashboard/Dashboard'
import { Profile } from '../screens/Profile/Profile'

import Icon from 'react-native-vector-icons/MaterialIcons'

const { Screen, Navigator } = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name='login'
                component={Login}
            />

            <Screen
                name='register'
                component={Register}
            />

            <Screen
                name='dashboard'
                component={TabRoutes}
            />

            <Screen
                name='profile'
                component={TabRoutes}
            />
        </Navigator>
    )
}

export function TabRoutes() {
    return (
        <Tab.Navigator
        tabBarOptions={{ 
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            activeBackgroundColor: '#8d41a8',
            inactiveBackgroundColor: '#9544b3',               
         }}
         screenOptions={{
            headerShown: false
         }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Icon name='event' size={20} color="#fff" />,
                    tabBarLabel: 'Agendamentos',
                    tabBarLabelColor: '#fff'
                }}
                name='dashboard'
                component={Dashboard}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: () => <Icon name='person' size={20} color="#fff" />,
                    tabBarLabel: 'Meu Perfil',
                    tabBarLabelColor: '#fff'
                }}
                name='profile'
                component={Profile}
            />
        </Tab.Navigator>
    )
}