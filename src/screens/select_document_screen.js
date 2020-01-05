/* 
* @ react native app
* @ screen -> select document screen
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
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width,height } = Dimensions.get("window");

const select_document_screen = ({navigation}) => {


    const handleScanPassport = () => {
        navigation.navigate('scan_passport')
    }

    const handleScanLicense = () => {
        navigation.navigate('scan_license')
    }

    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
    }

    return (
        <SafeAreaView>
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
                    <Text style={styles.text}>Scan document</Text>
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
      			            source = {require('../screen_assets/select_docs_screen/progress.png')}
      		            />
                        <View style={{marginTop: hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:10}}>
                                Identification process
                            </Text>
                        {isIphoneX()?<View style={{marginLeft: wp('35%')}}/>:<View style={{marginLeft: wp('38%')}}/>}
                            <Text style={{color:'white',fontSize:10}}>
                                6 steps left
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop: hp('15%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleScanPassport}>
                        <Image
      			            source = {require('../screen_assets/select_docs_screen/passport.png')}
      		            />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleScanLicense}>
                            <Image
      			                source = {require('../screen_assets/select_docs_screen/driving.png')}
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
});

export default select_document_screen;