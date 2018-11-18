import React, { Component,PropTypes } from 'react';
import Swiper from 'react-native-swiper';
import ScreenUtils from '../../../utils/ScreenUtils.js';
import { Button } from 'react-native-elements'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';



export default class home extends Component<{}> {
 
    
  render() {
  const { navigate } = this.props.navigation;
    return (
      <View>
        <Swiper
            style={styles.swiper}
            height={200}
            horizontal={true}
            paginationStyle={{bottom: 10}}
            showsButtons={false}>
            <Image source={require('./image/1.jpg')} style={styles.img}/>
            <Image source={require('./image/2.jpg')} style={styles.img}/>
        </Swiper>

        <ScrollView style={styles.container}>
          <Button
             icon={{name: 'cached'}}
              title="Go to Jane's profile"
              onPress={() =>
                navigate('index', {
                  name: 'index'
                })
              }
            />
             {/* <Button
             icon={{name: 'cached'}}
             title = 'BUTTON'
             onPress={()=>{ navigation.navigate('index') }
             ></Button> */}
      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  swiper: {},
  img: {
      width: ScreenUtils.screenW,
      height: 250,
  },
	container:{
      height: ScreenUtils.screenH - 250,
    	// backgroundColor:'#F2F2F2',
    	// flex:1
  },
  a:{
    color: 'red'
  }
});