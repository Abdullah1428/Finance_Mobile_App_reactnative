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
    Alert,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 


import Ionicons from 'react-native-vector-icons/Ionicons';


const review_payee_screen = ({navigation}) => {

    const amu = navigation.getParam('amu');
    const Fe = navigation.getParam('Fe');
    const date = navigation.getParam('date');

    
    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}

    const handle_edit = () => {
        navigation.navigate('payee_criteria');
    }

    const handle_confirm = () => {
        Alert.alert('success','success')
        navigation.navigate('pay_transfer_initial');
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
                            Review
                        </Text>
                        </View>
                        <View style={{left:wp('50%'),position:'absolute'}}>
                        <TouchableOpacity>
                        <Ionicons name="md-close" color='white' size={20}/>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{marginTop:hp('1%')}}/>

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
                        
                        <Text style={styles.accountDetails}>
                            30-99-09 | 44050268
                        </Text>
                        
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
                        
                        <Text style={styles.accountDetails}>
                            30-99-09 | 44050268
                        </Text>
                            
                        <View style={styles.separator} />

                    </View>
                    <View style={{marginTop:hp('2%')}}/>
                    <View>
                        <Text style={{color:'#ABB4C6',fontSize:12,left:wp('15%')}}>
                            Amount:
                        </Text>

                        <Text style={{color: 'white',fontSize: 18,left:wp('15%')}}>
                            {amu}
                        </Text>
                        <View style={styles.separator} />
                        <View style={{marginTop:hp('2%')}}/>

                        <Text style={{color:'#ABB4C6',fontSize:12,left:wp('15%')}}>
                            Ref:
                        </Text>

                        <Text style={{color: 'white',fontSize: 18,left:wp('15%')}}>
                            {Fe}
                        </Text>
                        <View style={styles.separator} />
                        <View style={{marginTop:hp('2%')}}/>

                        <Text style={{color:'#ABB4C6',fontSize:12,left:wp('15%')}}>
                            Date:
                        </Text>

                        <Text style={{color: 'white',fontSize: 18,left:wp('15%')}}>
                            {date.slice(0,15)}
                        </Text>
                        <View style={styles.separator} />

                    </View>
                    {isIphoneX()?<View style={{marginTop:hp('6%')}}/>:<View style={{marginTop:hp('2%')}}/>}
                    <View style={{alignSelf:'center'}}>
                    <TouchableOpacity onPress={handle_edit}>
                        <Image
      			            style={{alignSelf:'center'}}
      			            source = {require('../screen_assets/pay_transfer_screen/edit_review.png')}
      		            />
                    </TouchableOpacity>       
                    </View> 
                    <View style={{marginTop:hp('2%')}}/>
                    <View style={{alignSelf:'center'}}>
                    <TouchableOpacity onPress={handle_confirm}>
                        <Image
      			            style={{alignSelf:'center'}}
      			            source = {require('../screen_assets/pay_transfer_screen/confirm_review.png')}
      		            />
                    </TouchableOpacity>       
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


export default review_payee_screen;