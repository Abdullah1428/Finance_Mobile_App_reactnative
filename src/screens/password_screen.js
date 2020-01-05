/* 
* @ react native app
* @ screen -> type email screen
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

const password_screen = ({navigation}) => {

    const [check , setcheck] = useState(false);
    const [check_again , setcheck_again] = useState(false);
    const [password , setpassword] = useState('')
    const [password_again , setpassword_again] = useState('')

    const textfocus = () => {
        setcheck(true);
    }

    const textblur = () => {
        setcheck(false);
    }

    const textfocus_again = () => {
        setcheck_again(true);
    }

    const textblur_again = () => {
        setcheck_again(false);
    }


    const handlePasswordInput = (text) => {
        /**
         * we are using a RegEx to prevent the user from entering
         * white space since the password is expected to be a string of
         * non white space characters
         */
        setpassword(text.replace(/\s/g, ''));
    }

    const handlePasswordInputAgain = (text) => {
        /**
         * we are using a RegEx to prevent the user from entering
         * white space since the password is expected to be a string of
         * non white space characters
         */
        setpassword_again(text.replace(/\s/g, ''));
    }

    const checkifPasswordsMatch = () => {
        if(password === password_again && password != '' && password_again != '')
        {
            console.log('Passwords Match');
            return true;
        }
        else
        {
            return false;
        }
    }

    const handleNextbutton = () => {
        if(password != '' && password_again != '')
        {
            if(checkifPasswordsMatch() == true )
            {
                navigation.navigate('security_questions')
            }
            else
            {
                Alert.alert('Incorrect Fields','Please provide the same password in both fields')
            }
        }
        else
        {
            Alert.alert('Incorrect Fields','Please provide the correct information')
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
                    <Text style={styles.text}>Fill out the information</Text>
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
      			            source = {require('../screen_assets/password_screen/progress.png')}
      		            />
                        <View style={{marginTop: hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:10}}>
                                Registration process
                            </Text>
                        {isIphoneX()?<View style={{marginLeft: wp('35%')}}/>:<View style={{marginLeft: wp('38%')}}/>}
                            <Text style={{color:'white',fontSize:10}}>
                                3 steps left
                            </Text>
                        </View>
                    </View>


                    <View style={{marginTop: hp('10%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Enter password</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: check?'#003366':'transparent',
                         borderColor: check?'#2E73A9':'grey',
                         opacity: check?1:0.4
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            placeholderTextColor = {check?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlePasswordInput}
                            selectionColor={'white'}
                            onFocus={textfocus}
                            onBlur={textblur}
                            secureTextEntry={true}
                        >    
                        </TextInput>
                    </View>
                    <View style={{marginTop: hp('3%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Confirm password</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: check_again?'#003366':'transparent',
                         borderColor: check_again?'#2E73A9':'grey',
                         opacity: check_again?1:0.4
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            placeholderTextColor = {check_again?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlePasswordInputAgain}
                            selectionColor={'white'}
                            onFocus={textfocus_again}
                            onBlur={textblur_again}
                            secureTextEntry={true}
                        >    
                        </TextInput>
                    </View>

                  {check || check_again?<View style={{marginTop: hp('8%')}}/>:<View style={{marginTop: hp('35%')}}/>}
                  {isIphoneX()?null:<View style={{marginTop: hp('-5%')}}/>}
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleNextbutton}>
                            <Image
      			                style={styles.confirmbutton}
      			                source = {require('../screen_assets/password_screen/next.png')}
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

export default password_screen;