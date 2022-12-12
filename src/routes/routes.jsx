import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from 'react-native'

import { Login } from '../screens/Login/Login'
import { Register } from '../screens/Register/Register'
import { Dashboard } from '../screens/Dashboard/Dashboard'
import { Profile } from '../screens/Profile/Profile'
import { SelectProvider } from '../screens/New/SelectProvider/SelectProvider'
import { SelectDateTime } from '../screens/New/SelectDateTime/SelectDateTime'
import { Confirm } from '../screens/New/Confirm/Confirm'

import Icon from 'react-native-vector-icons/MaterialIcons'

const { Screen, Navigator } = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name='register'
                component={Register}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name='dashboard'
                component={TabRoutes}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name='profile'
                component={TabRoutes}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name='selectDateTime'
                component={SelectDateTime}
                options={{
                    headerShown: true,
                    headerTitle: 'Selecione o horário',
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTransparent: true,
                }}
            />

            <Screen
                name='confirm'
                component={Confirm}
                options={{
                    headerShown: true,
                    headerTitle: 'Confirmar agendamento',
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTransparent: true,
                }}
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
        >
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Icon name='event' size={20} color="#fff" />,
                    tabBarLabel: 'Agendamentos',
                    tabBarLabelColor: '#fff',
                    headerShown: false
                }}
                name='dashboard'
                component={Dashboard}
            />

            <Tab.Screen
                options={({ navigation }) => ({
                    tabBarIcon: () => <Icon name='add-circle-outline' size={20} color="rgba(255,255,255,0.6)" />,
                    tabBarLabel: 'Agendar',
                    tabBarLabelColor: '#fff',
                    tabBarStyle: { display: 'none', marginLeft: 20 },
                    headerTitle: 'Selecione o prestador',
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTransparent: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
                            <Icon style={{ marginLeft: 20 }} name='chevron-left' size={20} color="#fff" />
                        </TouchableOpacity>
                    )
                })}
                name='new'
                component={SelectProvider}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: () => <Icon name='person' size={20} color="#fff" />,
                    tabBarLabel: 'Meu Perfil',
                    tabBarLabelColor: '#fff',
                    headerShown: false
                }}
                name='profile'
                component={Profile}
            />
        </Tab.Navigator>
    )
}