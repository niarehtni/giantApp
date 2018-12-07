import {StackNavigator} from "react-navigation";

import Home from '../home/home'

export default RouteConfigs = {
    Home: {
        screen: Home,
        navigationOptions: ({
            navigation
        }) => ({
            // title: '',
        })
    }
   
    
}