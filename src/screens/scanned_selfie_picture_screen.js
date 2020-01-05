/* 
* @ react native app
* @ screen -> scanned selfie picture screen
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


const scanned_selfie_picture_screen = ({navigation}) => {

    const image_selfie = navigation.getParam('image_selfie');

    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
    }

    const handleScanAgain = () => {
        navigation.navigate('selfie_picture')
    }

    const handleConfirm = () => {
        navigation.navigate('type_email')
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
                        <Text style={styles.text}>Here&apos;s your selfie</Text>
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
      			            source = {require('../screen_assets/selfie_picture_screen/progress.png')}
      		            />
                        <View style={{marginTop: hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:10}}>
                                Identification process
                            </Text>
                        {isIphoneX()?<View style={{marginLeft: wp('35%')}}/>:<View style={{marginLeft: wp('38%')}}/>}
                            <Text style={{color:'white',fontSize:10}}>
                                2 steps left
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    </View>
                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image
                            style={{
                                width:wp('90%'),
                                height:hp('50%'),
                                resizeMode:Platform.OS === 'android' ? 'cover' : 'stretch' ,
                                borderColor: '#3399FF',
                                borderRadius: 10,
                                borderWidth: 3,
                            }}
                            source={{uri:image_selfie}}
                        />
                    </View>
                    <View style={{marginTop:hp('8%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleScanAgain}>
                            <Image
      			                style={styles.button}
      			                source = {require('../screen_assets/selfie_picture_screen/selfieagain.png')}
      		                />
                        </TouchableOpacity>       
                    </View>
                    <View style={{marginTop:hp('2%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleConfirm}>
                            <Image
      			                style={styles.button}
      			                source = {require('../screen_assets/selfie_picture_screen/confirm.png')}
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

export default scanned_selfie_picture_screen;