/* 
* @ react native app
* @ screen -> Home screen
* @ author -> Abdullah , Graphics Panda
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
    Alert,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 

import ActionSheet from 'react-native-actionsheet';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Home_Screen = ({navigation}) => {

    const [check , setcheck ] = useState(false);

    var optionArray = [
        'View transactions',
        'Payment and transfers',
        'Deposit cheque',
        'Standing orders',
        'Direct Debts',
        'View payments due soon',
        'Cancel',
      ];

    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}

const handle_current = () => {
    navigation.navigate('transactions_current')
}

const showActionSheet1 = () => {
    //To show the Bottom ActionSheet
    setcheck(true);
    this.ActionSheet.show();
  };

const showActionSheet2 = () => {
    //To show the Bottom ActionSheet
    setcheck(false);
    this.ActionSheet.show();
  };

    return (
        <SafeAreaView>
            <ScrollView>
            <KeyboardAvoidingView>
            <View>
                <ImageBackground source={require('../screen_assets/email_screen/blue_bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
                    <View style={{marginTop:hp('4%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <Text style={{color:'white',fontSize:16}}>
                            Home
                        </Text>
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
                            <TouchableOpacity onPress={() => {
                                showActionSheet1()
                            }}>
                            <Ionicons name="md-more" size={28} color='white'/>
                            </TouchableOpacity>
                            </View>
                            
                        </View>
                        <TouchableWithoutFeedback onPress={handle_current}>
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
                        </TouchableWithoutFeedback>

                    </View>
                    <View style={{marginTop:hp('2%')}}/>
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
                                FinLab 2000 Limited
                            </Text>

                            <View style={{alignSelf:'center',marginLeft:isIphoneX() ? wp('25%') : wp('20%'),marginTop:hp('4%')}}>
                            <TouchableOpacity onPress={() => {
                                showActionSheet2()
                            }}>
                            <Ionicons name="md-more" size={28} color='white'/>
                            </TouchableOpacity>
                            </View>

                        </View>

                        <Text style={styles.accountDetails}>
                            Buisness Account
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

                    <View style={{backgroundColor:'#1D3462'}} >
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        //Title of the Bottom Sheet
                        title= { check?'Current Account':'Buisness Account'}
                        //Options Array to show in bottom sheet
                        message={'30-99-09 | 44050268'}
                        options={optionArray}
                        //Define cancel button index in the option array
                        //this will take the cancel option in bottom and will highlight it
                        cancelButtonIndex={6}
                        //If you want to highlight any specific option you can use below prop
                        destructiveButtonIndex={6}
                        onPress={index => {
                        //Clicking on the option will give you the index of the option clicked
                        // navigate accordingly
                        }}


                    />
                </View>

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

});


export default Home_Screen;