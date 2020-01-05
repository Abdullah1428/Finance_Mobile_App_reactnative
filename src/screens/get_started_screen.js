/* 
* @ react native app
* @ screen -> get started screen
* @ author -> Abdullah , Graphics Panda
*/

import React , {useState , useEffect} from 'react';
import {
    StyleSheet,
    View,
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

const get_started_screen = ({navigation}) => {

        
    const handleNextbutton = () => {
        navigation.navigate('first')
    }

    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
    }

    return (
        <SafeAreaView style={{flex:1}}> 
            <View>
                <ImageBackground source={require('../screen_assets/get_started_screen/bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
                   
                    <View style={{marginTop:hp('10%')}}/>
                    <View style={{alignSelf:'center'}}>
                        <Image
                            style={{alignSelf:'center',height:hp('70%'),resizeMode:'contain'}}
                            source = {require('../screen_assets/get_started_screen/message.png')}
                        />
                         <View style={{marginTop:hp('5%')}}/>
                        <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleNextbutton}>
                        <Image
                            style={{alignSelf:'center'}}
                            source = {require('../screen_assets/get_started_screen/getstarted.png')}
                        />
                        </TouchableOpacity>
                        </View>
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

export default get_started_screen;