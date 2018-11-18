/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import RouteConfigs from './RouteConfigs.js'

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
  initialRouteName: 'home',
  initialRouteParams: {initPara: '初始页面参数'},
    cardStyle: {backgroundColor: "#ffffff"},
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
  row:{
    flexDirection:'row',
    
  },
  padding_20_top:{
    paddingTop:20
  },
  part_1_left:{
    flex:1,
    borderColor:'#DCD7CD',
    borderRightWidth:0.5,
    borderBottomWidth:1,
  },
  part_2_right:{
    flex:2,
    borderColor:'#DCD7CD',
    borderRightWidth:0.5,
    borderBottomWidth:1,
  },
  flex_1:{
    flex:1,
  },
  hanbao:{
    width:55,
    height:55
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
    marginTop:10,
    paddingBottom:20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pic:{
    width:100,
    height:100,
  }
});
