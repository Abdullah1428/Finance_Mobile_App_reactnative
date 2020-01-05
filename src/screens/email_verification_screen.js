/* 
* @ react native app
* @ screen -> email verification screen
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

const email_verification_screen = ({navigation}) => {

    const user_email = navigation.getParam('user_email')

    const sendEmailVerificationUsingFirebaseService = () => {
        // will send the user email to verify 
        // email will be send to "user_email"
    }
    
    const handleNextbutton = () => {
        navigation.navigate('email_verified')
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
                <View style={{marginTop: hp('2%')}}/>  
                    <View style={styles.statusbar}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image
      			                style={styles.backbutton}
      			                source = {require('../screen_assets/email_screen/back.png')}
      		                />
                        </TouchableOpacity>
                    <Text style={styles.text}>Confirm your email</Text>
                        <TouchableOpacity>
                            <Image
      			                style={{
                                      marginTop: hp('1.5%'),
                                  }}
      			                source = {require('../screen_assets/email_screen/home.png')}
      		                />
                        </TouchableOpacity>
                    </View>  

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
                            source = {require('../screen_assets/email_screen/message.png')}
                        />
                    </View>
                    
                    <View style={{marginTop:hp('10%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleNextbutton}>
                            <Image
      			                style={styles.confirmbutton}
      			                source = {require('../screen_assets/email_screen/next.png')}
      		                />
                        </TouchableOpacity>       
                    </View>
                    {isIphoneX()?<View style={{marginTop:hp('10%')}}/>:null}
                    <View style={{alignSelf:'center'}}>
                        <Image
                            source = {require('../screen_assets/email_screen/logo.png')}
                        />
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

export default email_verification_screen;