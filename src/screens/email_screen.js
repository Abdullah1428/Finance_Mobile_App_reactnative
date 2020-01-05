/* 
* @ react native app
* @ screen -> email screen
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
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {Header} from 'react-native-elements';
const { width,height } = Dimensions.get("window");

const email_screen = ({navigation}) => {

    const [email,setemail] = useState('');
    const [check , setcheck] = useState(false);

    const textfocus = () => {
        setcheck(true);
    }

    const textblur = () => {
        setcheck(false);
    }


    const handleEmail = (text) => {
        setemail(text);
    }

    const handleconfirmbutton = () => {
        if (email==='')
        {
            Alert.alert('Invalid Email','Please Enter a valid email')
        }
        else
        {
            navigation.navigate('terms_cond')
        }
        
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
                    <Text style={styles.text}>Type your email</Text>
                        <TouchableOpacity>
                            <Image
      			                style={{
                                      marginTop: hp('1.5%'),
                                  }}
      			                source = {require('../screen_assets/email_screen/home.png')}
      		                />
                        </TouchableOpacity>
                    </View>  

                    <View style={{marginTop: hp('20%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Type your email</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: 'transparent',
                         borderColor: check?'white':'grey',
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Email'}
                            placeholderTextColor = {check?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleEmail}
                            selectionColor={'white'}
                            clearTextOnFocus
                            onFocus={textfocus}
                            onBlur={textblur}
                        >    
                        </TextInput>
                    </View>
                  {check?<View style={{marginTop: hp('15%')}}/>:<View style={{marginTop: hp('50%')}}/>}
                  {isIphoneX()?null:<View style={{marginTop: hp('-5%')}}/>}
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleconfirmbutton}>
                            <Image
      			                style={styles.confirmbutton}
      			                source = {require('../screen_assets/email_screen/confirm.png')}
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
});

export default email_screen;