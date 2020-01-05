/* 
* @ react native app
* @ screen -> payee criteria screen
* @ author -> Abdullah , Graphics Panda
* ios-arrow-forward
* md-add
* md-remove
*/

import React , {useState , useEffect} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Text,
    TextInput,
    Alert,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Ionicons from 'react-native-vector-icons/Ionicons';


const payee_criteria_screen = ({navigation}) => {

    const [ checkamount , setcheckamount ] = useState(false)
    const [ checkfef , setcheckfef ] = useState(false)

    const [ amount , setamount ] = useState('')
    const [ fef , setfef ] = useState('')

    {/* focus and blur methods */}

    const textfocusamount = () => {
        setcheckamount(true)
    }
    const textbluramount = () => {
        setcheckamount(false)
    }

    const textfocusfef = () => {
        setcheckfef(true)
    }
    const textblurfef = () => {
        setcheckfef(false)
    }

    {/* end */}

    const handleamount = text => {
        setamount(text)
    }
    const handlefef = text => {
        setfef(text)
    }

    
    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}


    const handle_change_payee = () => {
        navigation.navigate('select_payee')
    }

    const handle_calendar = () => {
        if(amount === '' || fef === '')
        {
            Alert.alert('Empty fields','Please enter amount and fef code first')
        }
        else
        {
            navigation.navigate('calendar',{amu:amount,Fe:fef})
        }
        
    }

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
            <ImageBackground source={require('../screen_assets/email_screen/blue_bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
                <View style={{
                    marginTop:hp('5%'),
                    width: wp('100%'),
                    height: hp('100%'),
                    borderRadius: 30,
                    borderWidth: 2,
                    backgroundColor: '#14274A',
                    borderColor:'#14274A',
                }}>   
                    <View style={{marginTop:hp('2%')}}/>
                    <View style={{alignSelf:'center',flexDirection:'row'}}>
                        <View>
                        <Text style={{color:'white',fontSize:16}}>
                            Pay & transfer
                        </Text>
                        </View>
                        <View style={{left:wp('50%'),position:'absolute'}}>
                        <TouchableOpacity>
                        <Ionicons name="md-close" color='white' size={20}/>
                        </TouchableOpacity>
                        </View>
                        
                    </View>

                    <View>
                        <Text style={{color:'#ABB4C6',fontSize:12,left:wp('15%')}}>
                            From:
                        </Text>
                        <View style={{marginTop:hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                        <Image
                            style={{left:wp('8%')}}
                            source={require('../screen_assets/pay_transfer_screen/pound.png')}
                        />
                        <Text style={styles.accountHolder}>
                                Andrew Clark
                        </Text>
                        </View>
                        

                        <Text style={styles.accountDetails}>
                            Current Account
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.accountDetails}>
                                30-99-09 | 44050268
                            </Text>
                            <TouchableOpacity>
                            <Ionicons name="ios-arrow-forward" size={20} color='white' style={{
                                marginLeft:wp('35%')
                            }} />
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.moneyDetails}>
                            {'\u00A3'}197,7220
                        </Text>
                        <Text style={styles.accountDetails}>
                            Available {'\u00A3'}197,7220
                        </Text>

                        <View style={styles.separator} />

                    </View>


                    <View>
                        <Text style={{color:'#ABB4C6',fontSize:12,left:wp('15%')}}>
                            To:
                        </Text>
                        <View style={{marginTop:hp('1%')}}/>
                        
                        <View style={{flexDirection:'row'}}>
                        <Image
                            style={{left:wp('8%')}}
                            source={require('../screen_assets/pay_transfer_screen/pound.png')}
                        />
                        <Text style={styles.accountHolder}>
                                ABC Limited
                        </Text>
                        </View>
                        

                        <Text style={styles.accountDetails}>
                            Buisness Account
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.accountDetails}>
                                30-99-09 | 44050268
                            </Text>
                            <TouchableOpacity onPress={handle_change_payee}>
                            <Ionicons name="ios-arrow-forward" size={20} color='white' style={{
                                marginLeft:wp('35%')
                            }} />
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.moneyDetails}>
                            {'\u00A3'}42,211.00
                        </Text>
                        <Text style={styles.accountDetails}>
                            Available {'\u00A3'}197,722.00
                        </Text>

                        <View style={styles.separator} />


                    {/* design for input amount*/}
                    
                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Amount</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkamount?'#003366':'transparent',
                         borderColor: checkamount?'#2E73A9':'grey',
                         opacity: checkamount?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Amount'}
                            placeholderTextColor = {checkamount?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleamount}
                            selectionColor={'white'}
                            onFocus={textfocusamount}
                            onBlur={textbluramount}
                            keyboardType={'number-pad'}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('1%')}}/>

                    {/* design for input fef*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Fef</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkfef?'#003366':'transparent',
                         borderColor: checkfef?'#2E73A9':'grey',
                         opacity: checkfef?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Fee Note 5469'}
                            placeholderTextColor = {checkfef?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlefef}
                            selectionColor={'white'}
                            onFocus={textfocusfef}
                            onBlur={textblurfef}
                        >    
                        </TextInput>
                        
                    </View>

                    {checkfef?
                    
                    <View>
                    <Text style={{color:'#2E73A9',fontSize:12,alignSelf:'center',marginTop:hp('1')}}>
                        This will also appear on payee statement
                    </Text>
                    </View>:null    
                
                }

                    <View style={{marginTop:hp('1%')}}/>

                    {/* design for input date*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>When</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: 'transparent',
                         borderColor: '#2E73A9',
                         opacity: 1,
                         alignSelf:'center',
                         flexDirection:'row'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Now'}
                            placeholderTextColor = {'white'}
                            underlineColorAndroid = 'transparent'
                            selectionColor={'white'}
                            editable={false}
                        >    
                        </TextInput>
                        <View style={{alignSelf:'center',marginLeft:isIphoneX() ? wp('6') : wp('5'),marginTop:isIphoneX() ? hp('1') : hp('0')}}>
                        <TouchableOpacity onPress={handle_calendar}>
                        <Image
                            source = {require('../screen_assets/pay_transfer_screen/calendar.png')}
                        />
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{marginTop:hp('1%')}}/>

                    {/* end for text inputs */}
                        
                        <View style={{marginTop:isIphoneX() ? hp('5'):hp('1')}}/>
                        <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={console.log('hello')}>
                            <Image
      			                style={{alignSelf:'center'}}
      			                source = {require('../screen_assets/pay_transfer_screen/continue.png')}
      		                />
                        </TouchableOpacity>       
                        </View>
                


                    </View>
                    

                </View> 
            </ImageBackground>
            </KeyboardAwareScrollView>
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
    box_view: {
        marginLeft: wp('5%'),
        width: wp('90%'),
        height: hp('25%'),
        borderRadius: 30,
        borderWidth: 2,
        backgroundColor: '#2B5FA9',
        borderColor:'#2B5FA9',
    },
    accountHolder: {
        color: 'white',
        fontSize: 18,
        left:wp('10%')
    },
    accountDetails: {
        color: '#ABB4C6',
        fontSize: 12,
        marginTop:hp('1%'),
        marginLeft: wp('15%')
    },
    moneyDetails: {
        color: '#ABB4C6',
        fontSize: 18,
        marginTop:hp('1%'),
        marginLeft: wp('15%')
    },
    icon: {
        marginLeft : wp('35%'),
        marginTop:hp('4%'),
    },
    circle: {
        marginTop:hp('4%'),
        marginLeft: wp('5%')
    },
    separator: {  
        height: 0.5,
        width: wp('70%'),
        marginLeft: wp('15%'),
        marginTop:hp('2%'),
        backgroundColor: "#707070"  
    }, 
    input: {
        marginLeft: wp('8%'),
        height: hp('6%'),
        fontSize: 16,
        color: 'white',
        width:wp('50%')
    },

});


export default payee_criteria_screen;