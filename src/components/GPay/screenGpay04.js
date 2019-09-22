import React, { Component } from "react";
import {
  Text, Content,
} from "native-base";

import { 
  Image,
  Dimensions, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
} from "react-native";

import goback from '../../assets/images/BackOther.png';
import diamond from '../../assets/images/diamond.png';

const GempriceListVal = [200, 700, 1200, 2500, 8000, 15000];
const PaypriceListVal = [0.99, 2.49, 4.49, 8.49, 25.99, 42.99];

class screenGpay01 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remberCheck: false,
    };
  }

  static navigationOptions = {
    header: null
  };

  gotoScreen02(Num) {
    this.props.navigation.navigate("screenGpay02", Num);
  }

  createView = () =>{
    buttonListArr = [];
 
    for ( let i = 0 ; i < GempriceListVal.length ; i++ )
    {
      buttonListArr.push(
        <TouchableOpacity style={styles.list_item_normal} onPress={() =>this.gotoScreen02(i)}>
          <View style={{flexDirection: 'row', paddingTop: 18}}>
            <Image source={diamond} style={{ width: 17, height: 15}} />
            <Text style={{ color: '#000', fontSize: 12, marginLeft: 10 }}>{GempriceListVal[i]+" gems"}</Text>
            <View style={{flex:1, alignItems:"flex-end"}}>
              <Text style={{color: '#000', fontSize: 12, textAlign:'right', paddingRight:10}}>{"$"+PaypriceListVal[i]}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return buttonListArr;
  }  
 
  goBack() {
    this.props.navigation.navigate("screenGpay03");
  }

  render() {
    return (
      <View style={styles.contentContainer}>
       <StatusBar  backgroundColor="transparent" barStyle="dark-content" ></StatusBar>
        <View style = {styles.top_title}>
          <TouchableOpacity onPress={() => this.goBack()}>
            <Image source={goback} style={{ width: 20, height: 20, tintColor: '#000', marginLeft: 25}} />
          </TouchableOpacity>
          <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', marginLeft: 20, textAlign:'left', justifyContent:'center' }}>{"Gem shop"}</Text>
        </View>
        <Content>
          <View style={{justifyContent:'center', alignItems: 'center'}}>
            <View style={styles.list_item_spread} >
              <Text style={{ color: '#000', fontSize: 17, justifyContent: 'center', alignItems: 'center' }}>{"My gem"}</Text>
              <Text style={{ color: '#45b8d6', fontSize: 14, justifyContent:'center', alignItems: 'center' }}>{"230"}</Text>
            </View>
              
            {this.createView()}

          </View>
        </Content>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({

  contentContainer: {
    marginTop: 25,
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
  },

  top_title: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
  },

  list_item_spread:{
    justifyContent:'center',
    alignItems: 'center',
    width: DEVICE_WIDTH - 30,
    height: 60,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  list_item_normal: {
    flexDirection : 'row',
    width: DEVICE_WIDTH - 30,
    height: 50,
    alignItems: 'flex-start',
    marginTop: 2,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  }
});
export default screenGpay01;