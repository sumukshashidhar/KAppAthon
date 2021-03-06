import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image,Dimensions,ScrollView,TextInput} from 'react-native';
import { login } from '../api/authentication';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const FirstScreen = ({ navigation }) => {
// const [state, setState] = useState({
//     Name:'',
//     Email:'',
//   })

const print= ()=>{
  // console.log(state.Email)
  // if(state.Email){
  navigation.navigate('Signup')
  // }
}

  return (
  //  <Untitled></Untitled>
   <View style={styles.container}>
     <Image source={{uri: 'https://i.imgur.com/420l6CL.jpg'}}
       style={{width: wp('80%'), height: wp('80%'),resizeMode:'cover',alignSelf:'center',borderRadius:wp('80%')/2,overflow: "hidden",marginTop:wp('10%')}} />
       <Text>{'\n'}</Text>
       <Text>{'\n'}</Text>
       <Text style={styles.text}>Welcome</Text>

      {/* <TextInput 
        label="Email"
        placeholder="Email"
        value={state.Email}
        blurOnSubmit={false}
        maxLength={100}
        onChangeText={(text) => setState({Email: text})}
        style={{fontSize:wp('5%'),size:wp('5%'),marginTop:wp('5%'),marginLeft:wp("10%")}}
      /> */}
  <TouchableOpacity style={styles.button} onPress={print}>
    <Text style={{color:'white',textAlign:'center'}}>Continue</Text>
  </TouchableOpacity>
   </View>
  //   <SignupForm
  //     buttonText="Log in"
  //     onSubmit={login}
  //     onAuthentication={() => navigation.navigate('Home')}
  //   >
  //     <br>
  //     </br>
  //     <Button 
  //       color='black'
  //       title="Create account"
  //       onPress={() => navigation.navigate('Signup')}
  //     />  
  
  // <Text style={{marginTop:20}}>{state.Name}</Text>
  //   </SignupForm>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fafafa",
    resizeMode: 'cover',
    flex: 1,
  },
  text:{
    fontSize:wp('10%'),
    textAlign:'center',
    fontFamily:'sans-serif',
    fontWeight:"100"
  },
  button:{
    marginTop:wp('15%'),
    width:wp('60%'),
    fontSize:wp('20%'),
    alignSelf:'center',
    textAlign:'center',
    paddingTop:wp('3%'),
    height:wp('10%'),
    backgroundColor:'#9370DB',
    color:'white',
    borderRadius:wp('20%'),
    marginLeft:wp('10%')
  }
})


export default FirstScreen;