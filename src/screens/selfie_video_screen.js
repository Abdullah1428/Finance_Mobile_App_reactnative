/* 
* @ react native app
* @ screen -> selfie video screen
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

import {RNCamera} from 'react-native-camera';

import Icon from 'react-native-vector-icons/Ionicons'

const { width,height } = Dimensions.get("window");

const selfie_video_screen = ({navigation}) => {

    const [recording , setrecording] = useState(false)
    const camera_type_front = RNCamera.Constants.Type.front;
    const camera_type_back = RNCamera.Constants.Type.back;
    const [camera_type , setcamera_type] = useState(camera_type_back)

    const toggle_camera = () => {
        if(camera_type == camera_type_back)
        {
            setcamera_type(camera_type_front)
        }
        else
        {
            setcamera_type(camera_type_back)
        }
    }
  
    const start_video_button = async() => {
        setrecording(!recording)
        try {
            const { uri , codec = "mp4"} = await camera.recordAsync();
            setcamera_type(camera_type_back)
            navigation.navigate('scanned_selfie',{video_selfie:uri})
        }
        catch ( e )
        {
            console.log('error',e);
        }
        
    }

    const stop_video_button = () => {
        setrecording(false)
        camera.stopRecording();
    }


    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
    }

    useEffect (() =>{
        Alert.alert('Selfie Video Instruction','To record selfie video hold the video button for recording and release when you are done recording for a short time!')
    },[])

    return (
        <SafeAreaView>
            <View>
            <View style={{backgroundColor:'#131A30'}}>
                <View style={{marginTop: hp('2%')}}/>  

                    <View style={styles.statusbar}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image
      			                style={styles.backbutton}
      			                source = {require('../screen_assets/email_screen/back.png')}
      		                />
                        </TouchableOpacity>
                    <Text style={styles.text}>Take video of your selfie</Text>
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
      			            source = {require('../screen_assets/selfie_video_screen/progress.png')}
      		            />
                        <View style={{marginTop: hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:10}}>
                                Identification process
                            </Text>
                        {isIphoneX()?<View style={{marginLeft: wp('35%')}}/>:<View style={{marginLeft: wp('38%')}}/>}
                            <Text style={{color:'white',fontSize:10}}>
                                3 steps left
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                </View>

                <View style={{backgroundColor:'black'}}>  
                <View style={{marginTop:hp('2%')}}/>                  
                <View style={{alignSelf:'center'}}>
                    <RNCamera
                        ref={ref=>{
                            camera = ref;
                        }}
                        style={{width: Platform.OS === 'android' ? wp('75%') : wp('90%'),height: hp('60%')}}
                        type = {camera_type}
                        flashMode = {RNCamera.Constants.FlashMode.off}>
                        <Image
                            style={{alignSelf:'center',marginTop:hp('5%'),height:hp('50%'),resizeMode:'contain'}}
                            source = {require('../screen_assets/selfie_video_screen/mask.png')}
                        />
                    </RNCamera>
                        <View style={{marginTop:hp('2%')}}/>
                </View>
                </View>
                  
                    <ImageBackground source={require('../screen_assets/scan_passport_screen/bluerect.png')} style={{width: wp('100%'),height:hp('100%')}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{alignSelf:'center',marginTop:hp('3%'),marginLeft:wp('38%')}}>
                        <TouchableOpacity onPressIn={start_video_button} onPressOut={stop_video_button}>
                            <Image
                                style={{alignSelf:'center'}}
                                source = {require('../screen_assets/selfie_video_screen/camerabutton.png')}
                            />
                        </TouchableOpacity>
                    </View>
                        <Icon name="md-reverse-camera" size={40} color='white' style={{marginLeft:wp('10%'),marginTop:hp('6%')}} onPress={toggle_camera}/>
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
    menubutton: {
        marginTop: hp('1%'),
        marginLeft: wp('90%'),
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

export default selfie_video_screen;