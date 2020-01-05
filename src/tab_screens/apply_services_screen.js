/* 
* @ react native app
* @ screen -> apply for services screen
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
    Animated,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Text,
    ScrollView,
    Alert,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 


import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const apply_services_screen = ({navigation}) => {

    
    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}



    return (
        <SafeAreaView>
            <ScrollView>
            <KeyboardAvoidingView>
            <View>
                <ImageBackground source={require('../screen_assets/email_screen/blue_bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
                    <View style={{marginTop:hp('4%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <Text style={{color:'white',fontSize:16}}>
                            Apply
                        </Text>
                    </View>
                    <View style={{marginTop:hp('4%')}}/>
                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                Featured
                            </Text>
                            <Ionicons name="md-remove" size={24} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                Buisness insurance
                            </Text>
                            <Ionicons name="ios-arrow-forward" size={20} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                Buisness loan
                            </Text>
                            <Ionicons name="ios-arrow-forward" size={20} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                Credit card
                            </Text>
                            <Ionicons name="ios-arrow-forward" size={20} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                Buisness current account
                            </Text>
                            <Ionicons name="md-add" size={24} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                Loans and finance
                            </Text>
                            <Ionicons name="md-add" size={24} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                Mortgages
                            </Text>
                            <Ionicons name="md-add" size={24} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                Card
                            </Text>
                            <Ionicons name="md-add" size={24} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%'),fontWeight:'bold'}}>
                                British Tel DD
                            </Text>
                            <Ionicons name="md-add" size={24} color='white' style={{
                                marginLeft:wp('80%'),position:'absolute'
                            }}/>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('2%')}}/>

                    


                </ImageBackground>
            </View>
            </KeyboardAvoidingView>
            </ScrollView>
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
        marginTop:hp('4%'),
        marginLeft: wp('3%')
    },
    accountDetails: {
        color: '#EAE9E6',
        fontSize: 12,
        marginTop:hp('1%'),
        marginLeft: wp('15%')
    },
    moneyDetails: {
        color: 'white',
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


export default apply_services_screen;