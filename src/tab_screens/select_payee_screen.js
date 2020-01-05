/* 
* @ react native app
* @ screen -> select payee screen
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
    TextInput
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 

import ActionSheet from 'react-native-actionsheet';

import Ionicons from 'react-native-vector-icons/Ionicons';

const select_payee_screen = ({navigation}) => {

    var optionArray = [
        'Make Payment',
        'Delete payee',
        'Cancel',
      ];

    
    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}

const handlefilter = () => {
    console.log('filtering on the basis of name')
}

const handle_new_payee = () => {
    navigation.navigate('new_payee');
}

const showActionSheet = () => {
    //To show the Bottom ActionSheet
    this.ActionSheet.show();
  };

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
                            Select payee
                        </Text>
                        </View>
                        <View style={{left:wp('50%'),position:'absolute'}}>
                        <TouchableOpacity>
                        <Ionicons name="md-close" color='white' size={20}/>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{marginTop:hp('4%')}}/>

                    <View style={styles.search_bar}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Search'}
                            placeholderTextColor = {'white'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlefilter}
                            selectionColor={'white'}
                            clearTextOnFocus
                        >    
                        </TextInput>
                        <Ionicons name="md-search" size={20} color='white' style={styles.search}/>
                    </View>
                    <View style={{marginTop:hp('4%')}}/>

                    <View style={{flexDirection:'row'}}>
                            <Ionicons name="md-person" size={20} color='white' style={{
                                marginLeft:wp('15%')
                            }}/>
                            <Text style={{color:'white',fontSize:15,marginLeft:wp('4%')}}>
                                Add new payee
                            </Text>
                            <View style={{
                                marginLeft:isIphoneX() ? wp('35%') : wp('30%') , alignSelf:'center'
                            }}>
                            <TouchableOpacity onPress={handle_new_payee}>
                            <Ionicons name="ios-arrow-forward" size={20} color='white' />
                            </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.separator} />
                    <View style={{marginTop:hp('4%')}}/>
                    <View>
                        <Text style={{color:'#ABB4C6',fontSize:12,left:wp('15%')}}>
                            Recent
                        </Text>
                    </View>
                    <View style={{marginTop:hp('2%')}}/>

                    {/* here we will do rendering for different accounts fetched from db */}

                    <View style={{flexDirection:'row'}}>
                        <Image
                            style={{left:wp('8%')}}
                            source={require('../screen_assets/pay_transfer_screen/pound.png')}
                        />
                        <Text style={styles.accountHolder}>
                                Finlab 2000 LIMITED
                        </Text>

                        <View style={styles.manage_box}>
                            <TouchableOpacity onPress={showActionSheet}>
                            <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:hp('1')}}>
                                Manage
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    
                    <View>
                        <Text style={styles.accountDetails}>
                            30-99-09 | 44050268
                        </Text>
                    </View>
                    
                    <View style={styles.separator} />

                    <View style={{marginTop:hp('2%')}}/>

                    <View style={{flexDirection:'row'}}>
                        <Image
                            style={{left:wp('8%')}}
                            source={require('../screen_assets/pay_transfer_screen/pound.png')}
                        />
                        <Text style={styles.accountHolder}>
                                British Tel
                        </Text>

                        <View style={styles.manage_box}>
                            <TouchableOpacity>
                            <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:hp('1')}}>
                                Manage
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    
                    <View>
                        <Text style={styles.accountDetails}>
                            30-99-09 | 44050268
                        </Text>
                    </View>
                    <View style={styles.separator} />

                    <View style={{backgroundColor:'#1D3462'}} >
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        //Title of the Bottom Sheet
                        title= { 'Finlab 2000 LIMITED'}
                        //Options Array to show in bottom sheet
                        message={'30-99-09 | 44050268'}
                        options={optionArray}
                        //Define cancel button index in the option array
                        //this will take the cancel option in bottom and will highlight it
                        cancelButtonIndex={2}
                        //If you want to highlight any specific option you can use below prop
                        destructiveButtonIndex={2}
                        onPress={index => {
                        //Clicking on the option will give you the index of the option clicked
                        // navigate accordingly
                            if(index == 0)
                            {
                                navigation.navigate('pay_transfer_page')
                            }
                        }}


                    />
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
        left:wp('10%'),
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
    input: {
        marginLeft: wp('8%'),
        height: hp('6%'),
        fontSize: 16,
        color: 'white',
        width:wp('50%')
    },
    search: {
        marginTop:hp('2%'),
        left:wp('20')
    },
    search_bar: {
        marginLeft: wp('5%'),
        width: wp('90%'),
        height: hp('6%'),
        fontSize: 16,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderColor: '#EBEEF4',
        flexDirection:'row'
    },
    manage_box: {
        marginLeft: wp('5%'),
        width: wp('25%'),
        height: hp('4%'),
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderColor: '#EBEEF4',
        position:'absolute',
        marginLeft:wp('60')
    },

});


export default select_payee_screen;