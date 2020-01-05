/* 
* @ react native app
* @ screen -> terms and condition screen
* @ author -> Abdullah , Graphics Panda
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
    Platform,
    Modal,
    Text,
    Alert,
    Dimensions,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons'

const terms_condition = ({navigation}) => {

    const scrollX = new Animated.Value(0);
    const [check , setcheck] = useState(false);
    const [showTerms , setshowTerms] = useState(false);
/*
    useEffect (() => {

        listenOrientationChange();

    return ()=>{
      rol()
    }

    },[])
*/

    const isIphoneX = () => {
        
        const dimen = Dimensions.get('window')
        
        return (
            Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
            (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
        )
  }
    const handleNextbutton = () => {
        if(!check)
        {
            Alert.alert("Terms of Service","Please read the terms of service first")
        }
        else
        {
            navigation.navigate('select_doc')
        }
        
    }

    const handle_Check_box = () => {
        setcheck(!check);
    }

    return (
        <SafeAreaView>
            <View style = {{flex:1  }}>
                <ImageBackground source={require('../screen_assets/terms_cond_screen/bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
                {isIphoneX()?<View style={{marginTop:hp('8%')}}/>:null}
                    <View>
                        <Image
                            style={{alignSelf:'center',resizeMode:'contain'}}
                            source = {require('../screen_assets/terms_cond_screen/logo2.png')}
                        />
                    </View>
                    {isIphoneX()?<View style={{marginTop:hp('5%')}}/>:<View style={{marginTop:hp('5%')}}/>}
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: isIphoneX()?hp('45%'):hp('55%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: '#112E69',
                         borderColor: 'transparent',
                         opacity: 0.9
                    }}>
                        <View style={styles.textstyle}>
                        <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Text>
                            {"\n"}
                        </Text>
                        <Text style={styles.text}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text>
                            {"\n\n"}
                        </Text>
                        </View>
                    <View style={styles.terms}>
                        <TouchableOpacity onPress={handle_Check_box}>
                            <Icon name={check ? "md-checkbox-outline" : "md-square-outline"} size={28} color='white' />
                        </TouchableOpacity>
                        <View style={{marginLeft:wp('4%')}}/>
                        <Text style={{fontSize:18,color:'white'}}>
                            Accept 
                        </Text>
                        <View style={{marginLeft:wp('2%')}}/>
                        <TouchableOpacity onPress={() => setshowTerms(true)}>
                        <Text style={{fontSize:18,color:'#B2D9FF'}}>
                            terms of service 
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    {isIphoneX()?<View style={{marginTop: hp('5%')}}/>:<View style={{marginTop: hp('3%')}}/>}
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleNextbutton}> 
                            <Image
                                style={styles.logo_style}
                                source = {require('../screen_assets/terms_cond_screen/next.png')}
                            />
                        </TouchableOpacity>
                        
                    </View>
                        
                </ImageBackground>
                <View>
                    <Modal animationType="slide" visible={showTerms} onRequestClose={() => setshowTerms(false)}>
                        <SafeAreaView>
                        <ImageBackground source={require('../screen_assets/terms_cond_screen/blue_bg.png')} style={{width: wp('100%'),height:hp('100%')}}>    
                        <View style={{flex:1}}>
                            <View style={{marginTop: hp('3%')}}/>
                                <View style={styles.statusbar}>
                                    <TouchableOpacity onPress={()=>setshowTerms(false)}>
                                        <Image
      			                            style={styles.backbutton}
      			                            source = {require('../screen_assets/email_screen/back.png')}
      		                            />
                                    </TouchableOpacity>                           
                                 <Text style={styles.text_tos}>Terms of Service</Text>
                            </View>
                            <View style={{marginTop: hp('5%')}}/>
                            <View style={{
                                marginLeft: wp('5%'),
                                width: wp('90%'),
                                height: isIphoneX()?hp('55%'):hp('65%'),
                                fontSize: 16,
                                borderRadius: 30,
                                borderWidth: 2,
                                backgroundColor: '#112E69',
                                borderColor: '#112E69',
                                opacity: 0.5
                            }}>
                                <View style={styles.textstyle}>
                                <Text style={styles.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Text>
                                <Text>
                                    {"\n"}
                                </Text>
                                <Text style={styles.text}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                                <Text>
                                    {"\n"}
                                </Text>
                                <Text style={styles.text}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                                </View>
                        </View>
                        {isIphoneX()?<View style={{marginTop:hp('5%')}}/>:null}
                        <View>
                            <Image
                                style={{alignSelf:'center'}}
                                source = {require('../screen_assets/terms_cond_screen/mediumlogo.png')}
                            />
                        </View>
                        </View>
                        </ImageBackground>
                        </SafeAreaView>
                    </Modal>
                </View>
            </View>
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
    textstyle: {
        width: wp('70%'),
        marginLeft: wp('10%'),
        marginTop: hp('5%')
    },
    terms: {
        flexDirection: 'row',
        width: wp('70%'),
        marginLeft: wp('10%'),
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
    text_tos: {
        marginLeft: wp('25%'),
        fontSize: 18,
        color: 'white',
    },
    backbutton: {
        marginTop: hp('1%'),
        marginLeft: wp('5%'),
    },
    statusbar: {
        flexDirection: 'row',
    }
});

export default terms_condition;