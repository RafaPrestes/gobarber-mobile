import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens/Login/Login'
import { Register } from '../screens/Register/Register'

const { Screen, Navigator } = createNativeStackNavigator()

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
        </Navigator>
    )
}