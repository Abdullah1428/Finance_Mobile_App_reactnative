/* 
* @ react native app
* @ screen -> first screen
* @ author -> Abdullah , Graphics Panda
*/

import React , {useState , useEffect} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Animated,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 


const first_screen = ({navigation}) => {

    const scrollX = new Animated.Value(0);
    /*
    useEffect (() => {

        listenOrientationChange();

    return ()=>{
      rol()
    }

    },[])
*/

    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}
    const handleLoginButton = () => {
        navigation.navigate('Home')
    }

    const handleSignupButton = () => {
        navigation.navigate('email')
    }

    return (
        <SafeAreaView>
             <KeyboardAvoidingView>
            <View>
                <ImageBackground source={require('../screen_assets/first_screen/background.png')} style={{width: wp('100%'),height:hp('100%')}}>
                    <View style={{marginTop:hp('20%')}}/>
                        <View>
      		                <Image
      			                style={styles.logo_style}
      			                source = {require('../screen_assets/first_screen/logo.png')}
      		                />
                        </View>
                    {isIphoneX()?<View style={{marginTop: hp('30%')}}/>:<View style={{marginTop: hp('25%')}}/>}
                        <View style={{width:wp('50%'),alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleLoginButton}>
                           <Image
      			                style={styles.buttonstyle}
      			                source = {require('../screen_assets/first_screen/login.png')}
      		                />
                        </TouchableOpacity>
                        </View>
                        <View style={{marginTop: hp('2%')}}/>
                        
                        <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleSignupButton}>
                            <Image
      			                style={styles.buttonstyle}
      			                source = {require('../screen_assets/first_screen/signup.png')}
      		                />
                        </TouchableOpacity>
                        </View>
                </ImageBackground>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo_style: {
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    buttonstyle: {
        alignSelf: 'center',
    },
});

export default first_screen;