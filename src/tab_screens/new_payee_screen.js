/* 
* @ react native app
* @ screen -> new payee screen
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
    Platform,
    Dimensions,
    Text,
    TextInput,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  }from 'react-native-responsive-screen'; 

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Ionicons from 'react-native-vector-icons/Ionicons';

const new_payee_screen = ({navigation}) => {

    const [check , setcheck] = useState(false);
    const [checkbenadd , setcheckbenadd] = useState(false);
    const [checkbenopt , setcheckbenopt] = useState(false);
    const [checkcity , setcheckcity] = useState(false);
    const [checkpost , setcheckpost] = useState(false);
    const [checksort , setchecksort] = useState(false);
    const [checkbankname , setcheckbankname] = useState(false);
    const [checkbankadd , setcheckbankadd] = useState(false);
    const [checkacc , setcheckacc] = useState(false);

    const [ benName , setBenName] = useState('');
    const [ benadd , setBenAdd] = useState('');
    const [ benopt , setBenOpt] = useState('');
    const [ city , setCity] = useState('');
    const [ post , setPost] = useState('');
    const [ sort , setSort] = useState('');
    const [ bankname , setBankName] = useState('');
    const [ bankadd , setBankAdd] = useState('');
    const [ account , setAccount] = useState('');


    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}

{/* focus and blur methods */}

const textfocus = () => {
    setcheck(true);
}

const textblur = () => {
    setcheck(false);
}

const textfocusbenadd = () => {
    setcheckbenadd(true);
}

const textblurbenadd = () => {
    setcheckbenadd(false);
}

const textfocusbenopt = () => {
    setcheckbenopt(true);
}

const textblurbenopt = () => {
    setcheckbenopt(false);
}

const textfocuscity = () => {
    setcheckcity(true);
}

const textblurcity = () => {
    setcheckcity(false);
}

const textfocuspost = () => {
    setcheckpost(true);
}

const textblurpost = () => {
    setcheckpost(false);
}

const textfocussort = () => {
    setchecksort(true);
}

const textblursort = () => {
    setchecksort(false);
}

const textfocusbankname = () => {
    setcheckbankname(true);
}

const textblurbankname = () => {
    setcheckbankname(false);
}

const textfocusbankadd = () => {
    setcheckbankadd(true);
}

const textblurbankadd = () => {
    setcheckbankadd(false);
}

const textfocusacc = () => {
    setcheckacc(true);
}

const textbluracc = () => {
    setcheckacc(false);
}

{/* end */}

{/* methods for setting the names and codes in variables */}
const handleBenificiaryName = (text) => {
    setBenName(text);
}

const handleBenificiaryAddress = (text) => {
    setBenAdd(text);
}

const handleBenificiaryOptional = (text) => {
    setBenOpt(text);
}

const handleCity = (text) => {
    setCity(text);
}

const handlePost = (text) => {
    setPost(text);
}

const handleSort = (text) => {
    setSort(text);
}

const handleBankName = (text) => {
    setBankName(text);
}

const handleBankAdd = (text) => {
    setBankAdd(text);
}

const handleAccount = (text) => {
    setAccount(text);
}
{/* end */}

const handleConfirmNewPayee = () => {
    navigation.navigate('new_payee_pic')
}

    return (
        <SafeAreaView>
            <View>
            <KeyboardAwareScrollView>
            <ImageBackground source={require('../screen_assets/email_screen/blue_bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
                <View style={{
                    marginTop:hp('5%'),
                    borderRadius: 30,
                    borderWidth: 2,
                    backgroundColor: '#14274A',
                    borderColor:'#14274A',
                }}>   
                    <View style={{marginTop:hp('2%')}}/>
                    <View style={{alignSelf:'center',flexDirection:'row'}}>
                        <View>
                        <Text style={{color:'white',fontSize:16}}>
                            Enter New Payee
                        </Text>
                        </View>
                        <View style={{left:wp('50%'),position:'absolute'}}>
                        <TouchableOpacity>
                        <Ionicons name="md-close" color='white' size={20}/>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{marginTop:hp('4%')}}/>

                    {/* design for input 1*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Benificiary name</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: check?'#003366':'transparent',
                         borderColor: check?'#2E73A9':'grey',
                         opacity: check?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Benificiary name'}
                            placeholderTextColor = {check?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleBenificiaryName}
                            selectionColor={'white'}
                            onFocus={textfocus}
                            onBlur={textblur}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('2%')}}/>

                    {/* design for input 2*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Benificiary address</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkbenadd?'#003366':'transparent',
                         borderColor: checkbenadd?'#2E73A9':'grey',
                         opacity: checkbenadd?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'First line'}
                            placeholderTextColor = {checkbenadd?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleBenificiaryAddress}
                            selectionColor={'white'}
                            onFocus={textfocusbenadd}
                            onBlur={textblurbenadd}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkbenopt?'#003366':'transparent',
                         borderColor: checkbenopt?'#2E73A9':'grey',
                         opacity: checkbenopt?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'optional'}
                            placeholderTextColor = {checkbenopt?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleBenificiaryOptional}
                            selectionColor={'white'}
                            onFocus={textfocusbenopt}
                            onBlur={textblurbenopt}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('2%')}}/>

                    {/* design for input 3*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>City</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkcity?'#003366':'transparent',
                         borderColor: checkcity?'#2E73A9':'grey',
                         opacity: checkcity?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'City'}
                            placeholderTextColor = {checkcity?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleCity}
                            selectionColor={'white'}
                            onFocus={textfocuscity}
                            onBlur={textblurcity}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('2%')}}/>

                    {/* design for input 4*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Post Code</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkpost?'#003366':'transparent',
                         borderColor: checkpost?'#2E73A9':'grey',
                         opacity: checkpost?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Post Code'}
                            placeholderTextColor = {checkpost?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handlePost}
                            selectionColor={'white'}
                            onFocus={textfocuspost}
                            onBlur={textblurpost}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('2%')}}/>

                    {/* design for input 5*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Sort Code</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checksort?'#003366':'transparent',
                         borderColor: checksort?'#2E73A9':'grey',
                         opacity: checksort?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Sort Code'}
                            placeholderTextColor = {checksort?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleSort}
                            selectionColor={'white'}
                            onFocus={textfocussort}
                            onBlur={textblursort}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('2%')}}/>

                    {/* design for input 6*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Bank name</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkbankname?'#003366':'transparent',
                         borderColor: checkbankname?'#2E73A9':'grey',
                         opacity: checkbankname?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Bank name'}
                            placeholderTextColor = {checkbankname?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleBankName}
                            selectionColor={'white'}
                            onFocus={textfocusbankname}
                            onBlur={textblurbankname}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('2%')}}/>


                    {/* design for input 7*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Bank address</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkbankadd?'#003366':'transparent',
                         borderColor: checkbankadd?'#2E73A9':'grey',
                         opacity: checkbankadd?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Bank address'}
                            placeholderTextColor = {checkbankadd?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleBankAdd}
                            selectionColor={'white'}
                            onFocus={textfocusbankadd}
                            onBlur={textblurbankadd}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('2%')}}/>

                    {/* design for input 8*/}

                    <View>
                        <Text style={{fontSize: 15 , color: 'white' , marginLeft: wp('10%')}}>Account number</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}/>
                    <View style={{
                         width: wp('80%'),
                         height: hp('6%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: checkacc?'#003366':'transparent',
                         borderColor: checkacc?'#2E73A9':'grey',
                         opacity: checkacc?1:0.6,
                         alignSelf:'center'
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Account number'}
                            placeholderTextColor = {checkacc?'white':'grey'}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {handleAccount}
                            selectionColor={'white'}
                            onFocus={textfocusacc}
                            onBlur={textbluracc}
                        >    
                        </TextInput>
                        
                    </View>
                    <View style={{marginTop:hp('5%')}}/>


                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleConfirmNewPayee}>
                            <Image
      			                style={{alignSelf:'center'}}
      			                source = {require('../screen_assets/pay_transfer_screen/confirm_new_payee.png')}
      		                />
                        </TouchableOpacity>       
                    </View>


                </View> 
            </ImageBackground>
            </KeyboardAwareScrollView>
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
        width:wp('60%')
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

});


export default new_payee_screen;