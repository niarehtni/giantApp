import React, { Component,PropTypes } from 'react';
import Swiper from 'react-native-swiper';
import ScreenUtils from '../../../utils/ScreenUtils.js';
import { Button } from 'react-native-elements'
import Contacts from 'react-native-contacts'

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

  a() {
    console.log('====================================');
    console.log(123);
    console.log('====================================');
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        // error
      } else {
        console.log('====================================');
        console.log(contacts);
        console.log('====================================');
        // contacts returned in []
      }
    })
  }
    
  render() {
  const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>123</Text>
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
                  name: 'list'
                })
              }
            />
             <Button
             icon={{name: 'cached'}}
             title = 'BUTTON'
             onPress={()=>{this.a}}
             />
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