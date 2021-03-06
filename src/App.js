/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import RouteConfigs from './pages/daichao/zcommon/RouteConfigs.js'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  NavigatorIOS
} from 'react-native';

import {StackNavigator} from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 设置入口文件

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: {initPara: '初始页面参数'},
    cardStyle: {backgroundColor: "#ffffff"},
  headerMode: 'none', // 禁用头部
  navigationOptions: {gesturesEnabled: false} //禁用页面的手势
}



const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig);
export default class App extends Component<{}> {

  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  // renderScene(route, navigator) {
  //   let Component = route.component
  //   return <Component{...route.params} navigator={navigator} />;
  // }

  /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  // configureScene(route) {
  //   if (route.type == 'Modal') {
  //     return Navigator.SceneConfigs.FloatFromBottom;
  //   }
  //   return Navigator.SceneConfigs.PushFromRight;
  // }

  render() {
    // if (Platform.OS === 'android') {
      return (
        <Navigator></Navigator>
      )
    // }else{
    //   return (
    //     <NavigatorIOS style={styles.flex_1} initialRoute={{title:'首页',component:list}}></NavigatorIOS>
    //   )
    // }
  }
}


const styles = StyleSheet.create({
  marginTop:{
    marginTop:10,
  }
});
