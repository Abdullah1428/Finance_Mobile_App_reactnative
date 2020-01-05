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

import AsyncStorage from '@react-native-community/async-storage'

const { width,height } = Dimensions.get("window");

const type_email_screen = ({navigation}) => {

    const [email,setemail] = useState('');
    const [check , setcheck] = useState(false);

    const textfocus = () => {
        setcheck(true);
    }

    const textblur = () => {
        setcheck(false);
    }


    const handleEmail = async(text) => {
        setemail(text);
    }

    const handleNextbutton = () => {
        async function handlebutton () {
            if (email==='')
            {
                Alert.alert('Invalid Email','Please Enter a valid email')
            }
            else
            {
                await savemail();
                navigation.navigate('email_verification',{user_email:email})
            }
        }
        handlebutton()        
        
    }

    const savemail = async() => {
        try{
            await AsyncStorage.setItem('@email', email);
        }catch(e){
            console.log(e)
            console.log('couldnt save email')
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
                    <Text style={styles.text}>Type email</Text>
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


                    <View style={{marginTop: hp('10%')}}/>
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

export default type_email_screen;