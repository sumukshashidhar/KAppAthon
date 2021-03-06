import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,Dimensions,
  Image,ScrollView
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
class ShopScreen extends Component {
  state = {
    count: 0
  }
  render(){
    const screenHeight = Dimensions.get('window').height
      return (
       
      <View style={{height: screenHeight, backgroundColor:"#ffffff",overflow:'scroll',
      flex: 1,}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, overflow:'scroll',  }}>
          <Text>{"\n"}</Text>
          <Text style={styles.heading}> Collect your Rewards!</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.content}>Choose from exciting rewards like extensions in Assignment Submission Date, or The Fantastic Dark Mode</Text>
      <Text>{'\n'}</Text>
  
    <TouchableOpacity style={styles.touchableopacity}>
    <LinearGradient
          colors={["#000000", "#434343"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
    <View style={styles.imgrow}>
       <Image source={{uri: 'https://img.icons8.com/color/48/000000/night-landscape.png'}} 
       style={{width: wp('20%'), height: hp('20%'),resizeMode:'center',flexDirection:'row',marginLeft:wp('5%')}} /> 
        <Text style={{alignSelf:'center', fontWeight:'100',fontFamily:'sans-serif',color:'white'}}>Dark Mode</Text>
        <Text style={{position:'absolute',right:wp('5%'),top:wp('5%'),fontWeight:'bold',color:'white'}}>1200</Text>
        </View>
        </LinearGradient>
    </TouchableOpacity> 
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>

     <TouchableOpacity style={styles.touchableopacity1}>
     <LinearGradient
          colors={["#FF8008", "#FFC837"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
    <View style={styles.imgrow}>
       <Image source={{uri: 'https://img.icons8.com/cute-clipart/64/000000/calendar-1.png'}} 
       style={{width: wp('20%'), height: hp('20%'),resizeMode:'center',flexDirection:'row',marginLeft:wp('5%')}} /> 
        <Text style={{alignSelf:'center', fontWeight:'100',fontFamily:'sans-serif',color:'white'}}>  1 Day Extension</Text>
        <Text style={{position:'absolute',right:wp('5%'),top:wp('5%'),fontWeight:'bold',color:'white'}}>200</Text>
        </View>
        </LinearGradient>
    </TouchableOpacity>  

    <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>

     <TouchableOpacity style={styles.touchableopacity2}>
     <LinearGradient
          colors={["#FFE000", "#799F0C"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
    <View style={styles.imgrow}>
       <Image source={{uri: 'https://img.icons8.com/cute-clipart/64/000000/calendar-2.png'}} 
       style={{width: wp('20%'), height: hp('20%'),resizeMode:'center',flexDirection:'row',marginLeft:wp('5%')}} /> 
        <Text style={{alignSelf:'center', fontWeight:'100',fontFamily:'sans-serif',color:'white'}}>  2 Day Extension</Text>
        <Text style={{position:'absolute',right:wp('5%'),top:wp('5%'),fontWeight:'bold',color:'white'}}>500</Text>
        </View>
        </LinearGradient>
    </TouchableOpacity>
 
    <Image source={{uri: 'https://img.icons8.com/nolan/48/prize.png'}} 
       style={{width: wp('20%'), height: hp('20%'),resizeMode:'center',marginBottom:wp('10%'),position:'absolute',marginTop:-wp('6%')}} /> 
       </ScrollView>
    </View>

      )
  }
}


const styles = StyleSheet.create({
    heading:{
        fontWeight:"bold",
        color:"#25252a",
        fontSize:wp("8%"),
        fontFamily:'sans-serif',
        alignSelf:'center'
    },
    content:{
        fontWeight:"100",
        color:"#bab9b6",
        fontSize:wp("4%"),
        fontFamily:'sans-serif',
        maxWidth:wp("80%"),
        flexShrink: 1,
        alignSelf:'center',
       
    },
    touchableopacity:{
        marginTop:hp('25%'),
        borderRadius:wp('5%'),
        width:wp('90%'),
        alignSelf:'center',
        position:'absolute',
    },
    touchableopacity1:{
        borderRadius:wp('5%'),
        width:wp('90%'),
        alignSelf:'center',
        position:'absolute',
        marginTop:hp('47%')
    },
    touchableopacity2:{
      borderRadius:wp('5%'),
      width:wp('90%'),
      alignSelf:'center',
      position:'absolute',
      marginTop:hp('69%')
  },
    imgrow:{
        flex:1,
        flexDirection:'row'
    },
    linearGradient:{
      borderRadius:wp('5%'),
    }
  })
export default ShopScreen