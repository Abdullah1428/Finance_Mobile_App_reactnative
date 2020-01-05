/* 
* @ react native app
* @ screen -> transaction current screen
* @ author -> Abdullah , Graphics Panda
*/


/*
* we will use FLat list or list view or we can simply map the transactions details once we get connected to db 
* 
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
    TouchableWithoutFeedback,
    FlatList,
    Alert,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 

import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

 
const transaction_cuurent_screen = ({navigation}) => {

    const [firstch , setfirstch] = useState(false)
    const [secondch , setsecondch] = useState(true)
    const [thirdch , setthirdch] = useState(false)

    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}
    handle_first = () => {
        setfirstch(true)
        setsecondch(false)
        setthirdch(false)
    }

    handle_second = () => {
        setsecondch(true)
        setfirstch(false)
        setthirdch(false)
    }

    handle_third = () => {
        setthirdch(true)
        setfirstch(false)
        setsecondch(false)
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
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
                    <Text style={styles.text}>Transactions</Text>
                    </View>  

                    <View style={{marginTop:hp('4%')}}/>
                    <View style={{
                        marginLeft: wp('5%'),
                        width: wp('90%'),
                        height: isIphoneX() ? hp('22%') : hp('25%'),
                        borderRadius: 30,
                        borderWidth: 2,
                        backgroundColor: '#2B5FA9',
                        borderColor:'#2B5FA9',
                    }}>
                        <View style={{flexDirection:'row'}}>
                            <Image
                                style={styles.circle}
                                source={require('../screen_assets/home_screen/circle.png')}
                            />
                            <Text style={styles.accountHolder}>
                                Andrew Clark
                            </Text>

                            <View style={{alignSelf:'center',marginLeft: isIphoneX() ? wp('40%') : wp('35%'),marginTop:hp('4%')}}>
                            <TouchableOpacity>
                            <Ionicons name="md-more" size={28} color='white'/>
                            </TouchableOpacity>
                            </View>

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
                    </View>
                    <View style={{marginTop:hp('2%')}}/>
                    <View style={{
                        marginLeft: wp('5%'),
                        width: wp('90%'),
                        height: isIphoneX() ? hp('6%') : hp('8%'),
                        borderRadius: 30,
                        borderWidth: 2,
                        backgroundColor: '#14274A',
                        borderColor:'#14274A',
                    }}>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>

                    <TouchableWithoutFeedback onPress={handle_first}>  
                    <Text style={{color:firstch ? 'white' : 'grey',fontSize:15,marginLeft:isIphoneX() ? wp('2%') : wp('2%'),marginTop:hp('2%')}}>
                        September
                    </Text>
                    </TouchableWithoutFeedback>  

                    <View
                        style={{
                        borderLeftWidth: 1,
                        borderLeftColor: '#0068EF',
                        marginTop:hp('2%'),
                        marginLeft:wp('4%')
                        }}
                    />

                    <TouchableWithoutFeedback onPress={handle_second}>
                    <Text style={{color:secondch ? 'white' : 'grey',fontSize:15,marginLeft:wp('4%'),marginTop:hp('2%')}}>
                        October
                    </Text>
                    </TouchableWithoutFeedback>

                    <View
                        style={{
                        borderLeftWidth: 1,
                        borderLeftColor: '#0068EF',
                        marginTop:hp('2%'),
                        marginLeft:wp('4%')
                        }}
                    />
                    <TouchableWithoutFeedback onPress={handle_third}>
                    <Text style={{color:thirdch ? 'white' : 'grey',fontSize:15,marginLeft:wp('4%'),marginTop:hp('2%')}}>
                        Due Soon
                    </Text>
                    </TouchableWithoutFeedback>

                    </View>

                    </View>

                    <View style={{marginTop:hp('2%')}}/>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize: 10 ,color:'white',marginLeft:wp('10%')}}>
                            Recieved
                        </Text>
                        <Text style={{fontSize: 10 ,color:'white',marginLeft:wp('75%'),position:'absolute'}}>
                            {'\u00A3'}197,722.00
                        </Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{alignSelf:'center'}}>
                    <Progress.Bar
                        progress={1}
                        color= '#00C965'
                        borderRadius = {10}
                        height = {hp('1%')} 
                        width={wp('80%')}
                        borderColor='#707070'
                    />
                    </View>

                    <View style={{marginTop:hp('2%')}}/>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize: 10 ,color:'white',marginLeft:wp('10%')}}>
                            Spent
                        </Text>
                        <Text style={{fontSize: 10 ,color:'white',marginLeft:wp('75%'),position:'absolute'}}>
                            -{'\u00A3'}5846.00
                        </Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{alignSelf:'center'}}>
                    <Progress.Bar
                        progress={0.6}
                        color= '#FD0202'
                        borderRadius = {10}
                        height = {hp('1%')}
                        width={wp('80%')}
                        borderColor='#707070'
                    />
                    </View>
                    <View style={{marginTop:hp('4%')}}/>

                    <ScrollView>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#707070',fontSize:14,marginLeft:wp('15%')}}>
                                18 Oct 19
                            </Text>
                            <Text style={{color:'#707070',fontSize:14,marginLeft:wp('65%'),position:'absolute'}}>
                                {'\u00A3'}197,722.00
                            </Text>
                        </View>   
                        <View style={{marginTop:hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('15%')}}>
                                British Tel DD
                            </Text>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('65%'),position:'absolute'}}>
                                -{'\u00A3'}1300.98
                            </Text>
                        </View>
                        <View style={styles.separator} />

                        </View>
                    </ScrollView>


                </ImageBackground>
            </View>
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
    statusbar: {
        flexDirection: 'row',
        width: wp('100%')
    },
    text: {
        fontSize: 18,
        color: 'white',
        marginLeft:wp('30%'),
    },
    backbutton: {
        marginTop: hp('1%'),
        marginLeft: wp('4%')
    },
    progress: {
        width: wp('80%'),
        height: hp('2%')
    },
    separator: {  
        height: 0.5,
        width: wp('70%'),
        marginLeft: wp('15%'),
        marginTop:hp('2%'),
        backgroundColor: "#707070"  
    }, 

});


export default transaction_cuurent_screen;