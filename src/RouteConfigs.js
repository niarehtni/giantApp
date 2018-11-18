// import React, {
//     Component,
//     PropTypes
// } from 'react';
import {StackNavigator} from "react-navigation";

import detail from './pages/listDetail'
import list from './pages/list'
import index from './pages/Index'
import home from './pages/home/home'

export default RouteConfigs = {
    home: {
        screen: home,
        navigationOptions: ({
            navigation
        }) => ({
            title: '首页',
        }),
    },
    Home: {
        screen: list,
        navigationOptions: ({
            navigation
        }) => ({
            title: '首页',
        }),
    },
    detail: {
        screen: detail,
        navigationOptions: ({
            navigation
        }) => ({
            // title: '详情',

        }),
    },
    index: {
        screen: index,
        navigationOptions: ({
            navigation
        }) => ({
            title: '页面',

        }),
    }
    
}