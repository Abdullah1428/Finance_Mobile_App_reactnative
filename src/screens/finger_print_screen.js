/* 
* @ react native app
* @ screen -> finger print screen
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
    Platform,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  }from 'react-native-responsive-screen';
import FingerprintScanner from 'react-native-fingerprint-scanner';


const finger_print_screen = ({navigation}) => {

    const [errorMessage , seterrorMessage] = useState('Scanning for fingerprint...')
    const [errorMessage2 , seterrorMessage2] = useState('Looking for sensor availability')

    useEffect( () => {

        Alert.alert('Message','While hitting confirm button place your finger on the scanner of device')

        FingerprintScanner
            .isSensorAvailable()
            .then(() => {
                seterrorMessage2('Fingerprint is registered for this device')
            })
            .catch((error) =>{
                seterrorMessage2('Fingerprint is not registered for this device')
            })

            return () => {
                FingerprintScanner.release();
            }
    },[])

    const handleFingerPrintbutton = () => {
        FingerprintScanner
            .authenticate({ onAttempt: handleAuthenticationAttempted})
            .then(() => {
                seterrorMessage('Authentication Success')
                navigation.navigate('confirm_info')
            })
            .catch((error) => {
                Alert.alert('Fingerprint Authentication','No match found please try again')
                seterrorMessage(error.message)
            })
    }

    const handleAuthenticationAttempted = (error) => {
        seterrorMessage(error.message)
    }

    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
    }

    const handleNotnow = () => {
        navigation.navigate('confirm_info')
    }    

    return (
        <SafeAreaView>
            <View>
            <ImageBackground source={require('../screen_assets/scanned_passport_screen/blue_bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
            <View>
            <View style={{marginTop: hp('2%')}}/>  
                    <View style={styles.statusbar}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image
      			                style={styles.backbutton}
      			                source = {require('../screen_assets/email_screen/back.png')}
      		                />
                        </TouchableOpacity>
                    <Text style={styles.text}>Set up the finger-print</Text>
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
      			            source = {require('../screen_assets/finger_print_screen/progress.png')}
      		            />
                        <View style={{marginTop: hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:10}}>
                                Registration process
                            </Text>
                        {isIphoneX()?<View style={{marginLeft: wp('35%')}}/>:<View style={{marginLeft: wp('38%')}}/>}
                            <Text style={{color:'white',fontSize:10}}>
                                last step
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    </View>
                    <View style={{marginTop:hp('8%')}}/>

                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image
                            source = {require('../screen_assets/finger_print_screen/message.png')}
                        />
                    </View>
                    {isIphoneX()?<View style={{marginTop:hp('2%')}}/>:<View style={{marginTop:hp('2%')}}/>}
                    <View>
                        <Text style={{color:'white',fontSize:15,alignSelf:'center'}}>
                                {errorMessage2}
                        </Text>
                    </View>
                    <View>
                        <Text style={{color:'white',fontSize:15,alignSelf:'center'}}>
                                {errorMessage}
                        </Text>
                    </View>

                    {isIphoneX()?<View style={{marginTop:hp('15%')}}/>:<View style={{marginTop:hp('3%')}}/>}
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleNotnow}>
                            <Image
      			                style={styles.button}
      			                source = {require('../screen_assets/finger_print_screen/notnow.png')}
      		                />
                        </TouchableOpacity>       
                    </View>
                    <View style={{marginTop:hp('2%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleFingerPrintbutton}>
                            <Image
      			                style={styles.button}
      			                source = {require('../screen_assets/finger_print_screen/confirm.png')}
      		                />
                        </TouchableOpacity>       
                    </View>
                </ImageBackground>     
            </View>
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
    progress: {
        alignSelf: 'center',
        marginTop: hp('5%'),
    },
    button: {
        alignSelf: 'center',
    },
});

export default finger_print_screen;