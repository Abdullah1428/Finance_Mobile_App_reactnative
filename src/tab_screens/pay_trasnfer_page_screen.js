/* 
* @ react native app
* @ screen -> pay transfer initial screen
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
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 


import Ionicons from 'react-native-vector-icons/Ionicons';


const pay_transfer_page_screen = ({navigation}) => {

    
    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}

    const handle_Next_Button = () => {
        navigation.navigate('payee_criteria')
    }

    const handle_change_payee = () => {
        navigation.navigate('select_payee')
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
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
                    <View style={{marginTop:hp('4%')}}/>

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

                    <View style={{marginTop:hp('2%')}}/>

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

                        <View style={styles.separator} />

                        <View style={{marginTop:isIphoneX() ? hp('30'):hp('22')}}/>
                        <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handle_Next_Button}>
                            <Image
      			                style={{alignSelf:'center'}}
      			                source = {require('../screen_assets/pay_transfer_screen/next.png')}
      		                />
                        </TouchableOpacity>       
                        </View>



                    </View>

                </View> 
            </ImageBackground>
            </KeyboardAvoidingView>
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

});


export default pay_transfer_page_screen;