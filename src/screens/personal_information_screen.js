/* 
* @ react native app
* @ screen -> personal information screen
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
    Picker,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  }from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Ionicons'

import RNPickerSelect from 'react-native-picker-select';
import places from '../functions/places.json'

import AsyncStorage from '@react-native-community/async-storage'

const { width,height } = Dimensions.get("window");

const personal_information_screen = ({navigation}) => {

    const [firstname , setfirstname] = useState('')
    const [lastname , setlastname] = useState('')
    const [dob , setdob] = useState('')
    const [phnum , setphnum] = useState('')
    const [res , setres] = useState('')

    const [check , setcheck] = useState(false);
    const [checklastname , setchecklastname] = useState(false);
    const [checkdob , setcheckdob] = useState(false);
    const [checkphnum , setcheckphnum] = useState(false);

    const [myplace , setmyplace] = useState('Security Questions')


    const saveUserInfo = async () => {
        try{
            await AsyncStorage.setItem('@firstname', firstname);
            await AsyncStorage.setItem('@lastname', lastname);
            await AsyncStorage.setItem('@dob', dob);
            await AsyncStorage.setItem('@phnum', phnum);
            await AsyncStorage.setItem('@res', res);
            console.log('success in storing detials in async storage')
        }
        catch (e)
        {
            console.log(e)
            console.log('couldnt save the details in async storage')
        }
    }


    const textfocus = () => {
        setcheck(true);
    }

    const textblur = () => {
        setcheck(false);
    }

    const textfocuslastname = () => {
        setchecklastname(true);
    }

    const textblurlastname = () => {
        setchecklastname(false);
    }

    const textfocusdob = () => {
        setcheckdob(true);
    }

    const textblurdob = () => {
        setcheckdob(false);
    }

    const textfocusphnum = () => {
        setcheckphnum(true);
    }

    const textblurphnum = () => {
        setcheckphnum(false);
    }


    const handlefirstname = (text) => {
        setfirstname(text);
    }

    const handlelastname = (text) => {
        setlastname(text);
    }

    const handleDOB = (text) => {
        setdob(text);
    }

    const handlePhonenum = (text) => {
        setphnum(text.replace(/\D/g, ''));
    }


    
    const handleNextbutton = () => {

        async function handlebutton(){
            await saveUserInfo();
            navigation.navigate('finger_print')
        }
        handlebutton()
        
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
            <ScrollView>
            <KeyboardAwareScrollView>
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
      			            source = {require('../screen_assets/personal_inform_screen/progress.png')}
      		            />
                        <View style={{marginTop: hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:10}}>
                                Registration process
                            </Text>
                        {isIphoneX()?<View style={{marginLeft: wp('35%')}}/>:<View style={{marginLeft: wp('38%')}}/>}
                            <Text style={{color:'white',fontSize:10}}>
                                1 step left
                            </Text>
                        </View>
                    </View>


                    <View style={{marginTop: hp('2%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>First name</Text>
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
                         opacity: check?1:0.6
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'First name'}
                            placeholderTextColor = {check?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlefirstname}
                            selectionColor={'white'}
                            onFocus={textfocus}
                            onBlur={textblur}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Last name</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checklastname?'#003366':'transparent',
                         borderColor: checklastname?'#2E73A9':'grey',
                         opacity: checklastname?1:0.6
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Last name'}
                            placeholderTextColor = {checklastname?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlelastname}
                            selectionColor={'white'}
                            onFocus={textfocuslastname}
                            onBlur={textblurlastname}
                        >    
                        </TextInput>
                    </View>

                    <View style={{marginTop: hp('3%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Date of Birth</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkdob?'#003366':'transparent',
                         borderColor: checkdob?'#2E73A9':'grey',
                         opacity: checkdob?1:0.6
                    }}>
                         <TextInput
                            style={styles.input}
                            placeholder={'11 / 11 / 1911'}
                            placeholderTextColor = {checkdob?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleDOB}
                            selectionColor={'white'}
                            onFocus={textfocusdob}
                            onBlur={textblurdob}
                        >    
                        </TextInput>

                       
                    </View>

                    <View style={{marginTop: hp('3%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Residency</Text>
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
                         borderColor: 'grey',
                         flexDirection: 'row',
                    }}>
                        {Platform.OS == 'ios'?
                        <RNPickerSelect
                            placeholder={{
                                label: 'Choose residency',
                                value: null,
                                color: 'white',
                              }}
                            onValueChange={(value) => setres(value)}
                            items={[
                                { label: 'london', value: 'London' },
                                { label: 'liverpool', value: 'Liverpool' },
                                { label: 'Newcastle', value: 'Newcastle' },
                            ]}
                            
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                  top: 20,
                                  right: 10,
                                },
                                placeholder: {
                                  color: 'white',
                                  fontSize: 16,
                                },
                              }}
                        />:
                        <Picker
                            selectedValue={myplace}

                            onValueChange={(itemValue) => 
                            setmyplace(itemValue)} style={styles.picker}>
                            {places.map((plac)=> {
                                return <Picker.Item label={plac.place} value={plac.place} key={plac.place} />
                            })}

                        </Picker>
        
                            }
                        <View>
                            <Icon name = "md-arrow-dropdown" size = {28} color = 'white'
                            style={{marginLeft:Platform.OS == 'ios' ? wp('30%') : null,marginTop:hp('1%'),alignSelf:'flex-end'}}
                            />
                        </View>

                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Mobile phone number</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkphnum?'#003366':'transparent',
                         borderColor: checkphnum?'#2E73A9':'grey',
                         opacity: checkphnum?1:0.6
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Your phone number'}
                            placeholderTextColor = {checkphnum?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlePhonenum}
                            selectionColor={'white'}
                            onFocus={textfocusphnum}
                            onBlur={textblurphnum}
                        >    
                        </TextInput>
                    </View>

                  <View style={{marginTop: hp('3%')}}/>

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
            </KeyboardAwareScrollView>
            </ScrollView>
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
    picker: {
        color:'white',
        height: hp('7%'),
        width:wp('75%'),
        backgroundColor:'transparent',
        marginLeft:wp('7%'),
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      color: 'white',
      paddingRight: 25, // to ensure the text is never behind the icon
      marginLeft:wp('7%'),
      marginTop:hp('2%'),
    },
    inputAndroid: {
      fontSize: 16,
      color: 'white',
      paddingRight: 30, // to ensure the text is never behind the icon
      marginLeft:wp('7%'),
      marginTop:hp('2%')
    },
  });
  

export default personal_information_screen;