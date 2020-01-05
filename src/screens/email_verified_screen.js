/* 
* @ react native app
* @ screen -> email verified screen
* @ author -> Abdullah , Graphics Panda
*/

import React , {useState , useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  }from 'react-native-responsive-screen';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width,height } = Dimensions.get("window");

const email_verified_screen = ({navigation}) => {

        
    const handleNextbutton = () => {
        navigation.navigate('scan_address')
    }

    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
    }

    return (
        <SafeAreaView style={{flex:1}}> 
             <KeyboardAvoidingView 
                behavior='padding' enabled>
            <View>
                <ImageBackground source={require('../screen_assets/email_screen/blue_bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
                    <View style={{marginTop:hp('5%')}}/>
                    <View style={styles.progress}>
                        <Image
                            style={{resizeMode:'contain'}}
      			            source = {require('../screen_assets/email_screen/progress.png')}
      		            />
                        <View style={{marginTop: hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:10}}>
                                Identification process
                            </Text>
                        {isIphoneX()?<View style={{marginLeft: wp('35%')}}/>:<View style={{marginLeft: wp('38%')}}/>}
                            <Text style={{color:'white',fontSize:10}}>
                                1 step left
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop:hp('10%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <Image
                            style={{alignSelf:'center'}}
                            source = {require('../screen_assets/email_screen/checked.png')}
                        />
                         <View style={{marginTop:hp('5%')}}/>
                        <Image
                            style={{alignSelf:'center'}}
                            source = {require('../screen_assets/email_screen/verify.png')}
                        />
                    </View>
                    
                    {isIphoneX()?<View style={{marginTop:hp('30%')}}/>:<View style={{marginTop:hp('25%')}}/>}
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleNextbutton}>
                            <Image
      			                style={styles.confirmbutton}
      			                source = {require('../screen_assets/email_screen/next.png')}
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    backbutton: {
        marginTop: hp('1%'),
    },
    confirmbutton: {
        alignSelf: 'center',
    },
    statusbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: wp('100%')
    },
    input: {
        marginLeft: wp('8%'),
        height: hp('7%'),
        fontSize: 16,
        color: 'white',
    },
    progress: {
        alignSelf: 'center',
        marginTop: hp('5%'),
    },
});

export default email_verified_screen;