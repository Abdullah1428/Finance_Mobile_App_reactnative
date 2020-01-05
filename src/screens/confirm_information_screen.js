/* 
* @ react native app
* @ screen -> confirm information screen
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

import AsyncStorage from '@react-native-community/async-storage'


const confirm_information_screen = ({navigation}) => {
    const [fname , setfname] = useState('')
    const [lname , setlanme] = useState('')
    const [d , setd] = useState('')
    const [ph , setph] = useState('')
    const [re , setre] = useState('')
    const [mail , setmail] = useState('')
    const [post , setpost] = useState('')

    getuserDetails = async () => {
        try{
            const firstname = await AsyncStorage.getItem('@firstname');
            const lastname = await AsyncStorage.getItem('@lastname');
            const dob = await AsyncStorage.getItem('@dob');
            const phnum = await AsyncStorage.getItem('@phnum');
            const res = await AsyncStorage.getItem('@res');
            const email = await AsyncStorage.getItem('@email');
            console.log('success in fetching user details') 
            if(firstname && lastname && dob && phnum && res)
            {
                setfname(firstname)
                setlanme(lastname)
                setd(dob)
                setph(phnum)
                setre(res)
                setmail(email)
                setpost('123456')
            }

        }catch(e) {
            console.log(e)
            console.log('couldnt fetch user details')
        }
    }

    const savepostcode = async () => {
        try{
            await AsyncStorage.setItem('@post',post)
        }catch(e)
        {
            console.log(e)
        }
    }

    useEffect(() => {
        getuserDetails()

    },[])

    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
    }

    const handleEdit = () => {
        async function handle() {
            await savepostcode()
            navigation.navigate('edit_info')
        }
        handle()
    }

    const handleConfirm = () => {
        if(fname.length == 0 && lname.length == 0 && ph.length == 0 && re.length == 0 && post.length == 0 && mail.length == 0)
        {
            Alert.alert('Empty Fields','Please go back and provide the complete information in edit info')
        }
        else
        {
            navigation.navigate('get_started')
        }
       
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
                    <Text style={styles.text}>Confirm information</Text>
                    <TouchableOpacity>
                        <Image
      			            style={{
                                marginTop: hp('1.5%'),
                            }}
      			            source = {require('../screen_assets/email_screen/home.png')}
      		            />
                    </TouchableOpacity>
                </View>        
            </View>
                   
            <View style={{marginTop:hp('3%')}}/>
            <View style={{opacity:0.4,marginLeft:wp('15%')}}>
                <Text style={{color:'white',fontSize:12}}>
                    First and Last Name:
                </Text>
            </View>
            <View style={{marginLeft:wp('15%'),marginTop:hp('1%')}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>
                    {fname} {lname}
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft:wp('15%'),
                    marginTop:hp('3%'),
                    opacity:0.4,
                    width:wp('70%')
                }}
            />

            <View style={{marginTop:hp('2%')}}/>
            <View style={{opacity:0.4,marginLeft:wp('15%')}}>
                <Text style={{color:'white',fontSize:12}}>
                    Residence Address:
                </Text>
            </View>
            <View style={{marginLeft:wp('15%'),marginTop:hp('1%')}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold',}}>
                    {re}
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft:wp('15%'),
                    marginTop:hp('3%'),
                    opacity:0.4,
                    width:wp('70%')
                }}
            />

            <View style={{marginTop:hp('2%')}}/>
            <View style={{opacity:0.4,marginLeft:wp('15%')}}>
                <Text style={{color:'white',fontSize:12}}>
                    Post Code:
                </Text>
            </View>
            <View style={{marginLeft:wp('15%'),marginTop:hp('1%')}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>
                    {post}
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft:wp('15%'),
                    marginTop:hp('3%'),
                    opacity:0.4,
                    width:wp('70%')
                }}
            />


            <View style={{marginTop:hp('2%')}}/>
            <View style={{opacity:0.4,marginLeft:wp('15%')}}>
                <Text style={{color:'white',fontSize:12}}>
                    Email:
                </Text>
            </View>
            <View style={{marginLeft:wp('15%'),marginTop:hp('1%')}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>
                    {mail}
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft:wp('15%'),
                    marginTop:hp('3%'),
                    opacity:0.4,
                    width:wp('70%')
                }}
            />

            <View style={{marginTop:hp('2%')}}/>
            <View style={{opacity:0.4,marginLeft:wp('15%')}}>
                <Text style={{color:'white',fontSize:12}}>
                    Mobile Phone Number:
                </Text>
            </View>
            <View style={{marginLeft:wp('15%'),marginTop:hp('1%')}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>
                    +{ph}
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginLeft:wp('15%'),
                    marginTop:hp('3%'),
                    opacity:0.4,
                    width:wp('70%')
                }}
            />

            {isIphoneX()?<View style={{marginTop:hp('20%')}}/>:<View style={{marginTop:hp('10%')}}/>}
            <View style={{alignSelf:'center'}}>
                <TouchableOpacity onPress={handleEdit}>
                    <Image
      			        style={styles.button}
      			        source = {require('../screen_assets/confirm_info_screen/edit.png')}
      		            />
                </TouchableOpacity>       
            </View>
            <View style={{marginTop:hp('2%')}}/>
            <View style={{alignSelf:'center'}}>
                <TouchableOpacity onPress={handleConfirm}>
                    <Image
      			        style={styles.button}
      			        source = {require('../screen_assets/confirm_info_screen/confirm.png')}
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

export default confirm_information_screen;