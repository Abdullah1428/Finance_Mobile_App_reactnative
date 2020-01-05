/* 
* @ react native app
* @ screen -> edit personal information screen
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

import AsyncStorage from '@react-native-community/async-storage'

const { width,height } = Dimensions.get("window");

const edit_info_screen = ({navigation}) => {

    // variables for retireving old info
    const [fname , setfname] = useState('')
    const [lname , setlname] = useState('')
    const [pos , setpost] = useState('')
    const [mai , setmail] = useState('')
    const [num , setnum] = useState('')   
    const [re , setre] = useState('') 
    //

    // variables for saving new info
    const [fname2 , setfname2] = useState(fname)
    const [lname2 , setlname2] = useState(lname)
    const [pos2 , setpost2] = useState(pos)
    const [mai2 , setmail2] = useState(mai)
    const [num2 , setnum2] = useState(num)   
    const [re2 , setre2] = useState(re)
    // 

    // variables for focus and blur methods
    const [checkfandlname , setcheckfandlname] = useState(false);
    const [checkres , setcheckres] = useState(false);
    const [checkpost , setcheckpost] = useState(false);
    const [checkmail , setcheckmail] = useState(false);
    const [checkphone , setcheckphone] = useState(false);

    // getting previous data from async storage to display
    const getUserInfo = async () => {
        try{
            const firstname = await AsyncStorage.getItem('@firstname');
            const lastname = await AsyncStorage.getItem('@lastname');
            const dob = await AsyncStorage.getItem('@dob');
            const phnum = await AsyncStorage.getItem('@phnum');
            const res = await AsyncStorage.getItem('@res');
            const email = await AsyncStorage.getItem('@email');
            const post = await AsyncStorage.getItem('@post')
            console.log('success in getting detials in async storage')
            if(firstname && lastname && dob && phnum && res && email && post)
            {
                setfname(firstname)
                setlname(lastname)
                setre(res)
                setpost(post)
                setmail(email)
                setnum(phnum)
            }
        }
        catch (e)
        {
            console.log(e)
            console.log('couldnt save the details in async storage')
        }
    }

    // saving the edit data in async 
    const saveNewuserData = async () => {
        try{
            await AsyncStorage.setItem('@firstname2',fname2);
            await AsyncStorage.setItem('@lastname2',lname2);
            await AsyncStorage.setItem('@post2',pos2);
            await AsyncStorage.setItem('@email2',mai2);
            await AsyncStorage.setItem('@phnum2',num2);
            await AsyncStorage.setItem('@res2',re2);
        }catch(e){
            console.log(e)
        }
    }


    // methods for focus and blur 
    const textfocusfandlname = () => {
        setcheckfandlname(true);
    }

    const textblurfandlname = () => {
        setcheckfandlname(false);
    }

    const textfocusres = () => {
        setcheckres(true);
    }

    const textblurres = () => {
        setcheckres(false);
    }

    const textfocuspost = () => {
        setcheckpost(true);
    }

    const textblurpost = () => {
        setcheckpost(false);
    }

    const textfocusmail = () => {
        setcheckmail(true);
    }

    const textblurmail = () => {
        setcheckmail(false);
    }

    const textfocusnum = () => {
        setcheckphone(true);
    }

    const textblurnum = () => {
        setcheckphone(false);
    }
    //


    // methods for handling text change
    const handlefirstandlastname = (text) => {
        var fullname = text.split(' ');
        var first = fullname[0];
        var last = fullname[fullname.length-1];
        setfname2(first);
        setlname2(last);
    }


    const handleresidence = (text) => {
        setre2(text);
    }

    const handlepost = (text) => {
        setpost2(text.replace(/\D/g, ''));
    }

    const handlemail = (text) => {
        setmail2(text);
    }

    const handlePhonenum = (text) => {
        setnum2(text.replace(/\D/g, ''));
    }
    //

    // methods for handling button
    const handleConfirm = () => {
        async function handle() {
            await saveNewuserData()
            navigation.navigate('get_started')
        }
        handle()
    }

    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
    }

    useEffect (() => {
        getUserInfo()
    },[])

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
                    <Text style={styles.text}>Edit the information</Text>
                        <TouchableOpacity>
                            <Image
      			                style={{
                                      marginTop: hp('1.5%'),
                                  }}
      			                source = {require('../screen_assets/email_screen/home.png')}
      		                />
                        </TouchableOpacity>
                    </View>  

                    


                    <View style={{marginTop: hp('3%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>First And Last Name:</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkfandlname?'#003366':'transparent',
                         borderColor: checkfandlname?'#2E73A9':'grey',
                         opacity: checkfandlname?1:0.6
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={fname.concat(" ",lname)}
                            placeholderTextColor = {checkfandlname?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlefirstandlastname}
                            selectionColor={'white'}
                            onFocus={textfocusfandlname}
                            onBlur={textblurfandlname}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Residence Address:</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkres?'#003366':'transparent',
                         borderColor: checkres?'#2E73A9':'grey',
                         opacity: checkres?1:0.6
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={re}
                            placeholderTextColor = {checkres?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleresidence}
                            selectionColor={'white'}
                            onFocus={textfocusres}
                            onBlur={textblurres}
                        >    
                        </TextInput>
                    </View>

                    <View style={{marginTop: hp('3%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Post code:</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkpost?'#003366':'transparent',
                         borderColor: checkpost?'#2E73A9':'grey',
                         opacity: checkpost?1:0.6
                    }}>
                         <TextInput
                            style={styles.input}
                            placeholder={pos}
                            placeholderTextColor = {checkpost?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlepost}
                            selectionColor={'white'}
                            onFocus={textfocuspost}
                            onBlur={textblurpost}
                        >    
                        </TextInput>

                       
                    </View>                       
                    
                    <View style={{marginTop: hp('2%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Email:</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkmail?'#003366':'transparent',
                         borderColor: checkmail?'#2E73A9':'grey',
                         opacity: checkmail?1:0.6
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={mai}
                            placeholderTextColor = {checkmail?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlemail}
                            selectionColor={'white'}
                            onFocus={textfocusmail}
                            onBlur={textblurmail}
                        >    
                        </TextInput>
                    </View>

                    <View style={{marginTop: hp('2%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Mobile Phone Number::</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkphone?'#003366':'transparent',
                         borderColor: checkphone?'#2E73A9':'grey',
                         opacity: checkphone?1:0.6
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={num}
                            placeholderTextColor = {checkphone?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlePhonenum}
                            selectionColor={'white'}
                            onFocus={textfocusnum}
                            onBlur={textblurnum}
                        >    
                        </TextInput>
                    </View>

                  <View style={{marginTop: hp('10%')}}/>

                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleConfirm}>
                            <Image
      			                style={styles.confirmbutton}
      			                source = {require('../screen_assets/confirm_info_screen/confirm.png')}
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
});


export default edit_info_screen;