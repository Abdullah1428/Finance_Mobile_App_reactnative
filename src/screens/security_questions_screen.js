/* 
* @ react native app
* @ screen -> security questions screen
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
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Picker,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  }from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Ionicons'

import RNPickerSelect from 'react-native-picker-select';
import security_questions from '../functions/security_questions.json'

const { width,height } = Dimensions.get("window");

const security_questions_screen = ({navigation}) => {

    const [firstans , setfirstans] = useState(' ')
    const [secans , setsecans] = useState(' ')
    const [thirdans , setthirdans] = useState(' ')

    const [myques , setmyques] = useState('Security Questions')

    const handleFirstQuestion = (text) => {
        setfirstans(text);
    }

    const handleSecondQuestion = (text) => {
        setsecans(text);
    }

    const handleThirdQuestion = (text) => {
        setthirdans(text);
    }

    
    const handleNextbutton = () => {
        if(firstans != ' ' && secans != ' ' && thirdans != ' ')
        {
            navigation.navigate('personal_inform')
        }
        else
        {
            Alert.alert('Empty Fields','Please answer all your questions')
        }
        
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
             <ScrollView>
            <KeyboardAwareScrollView>
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
                    <Text style={styles.text}>Fill out the information</Text>
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
      			            source = {require('../screen_assets/security_questions_screen/progress.png')}
      		            />
                        <View style={{marginTop: hp('1%')}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',fontSize:10}}>
                                Registration process
                            </Text>
                        {isIphoneX()?<View style={{marginLeft: wp('35%')}}/>:<View style={{marginLeft: wp('38%')}}/>}
                            <Text style={{color:'white',fontSize:10}}>
                                2 steps left
                            </Text>
                        </View>
                    </View>


                    <View style={{marginTop: hp('3%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Select security question 1</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 12,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: 'transparent',
                         borderColor: 'grey',
                         flexDirection:'row'
                    }}>
                        {Platform.OS == 'ios'?
                        <RNPickerSelect
                            placeholder={{
                                label: 'Security Question 1',
                                value: null,
                                color: 'white',
                              }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'What was your childhood nick name?', value: 'question1' },
                                { label: 'What is the name of your childhood friend?', value: 'question2' },
                                { label: 'What is the name of your school?', value: 'question3' },
                            ]}
                            
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                  top: 20,
                                  right: 10,
                                },
                                placeholder: {
                                  color: 'white',
                                  fontSize: 16,
                                },
                              }}
                        />:
                        <Picker
                            selectedValue={myques}

                            onValueChange={(itemValue) => 
                            setmyques(itemValue)} style={styles.picker}>
                            {security_questions.map((ques)=> {
                                return <Picker.Item label={ques.question} value={ques.question} key={ques.question} />
                            })}

                        </Picker>
                        
                        }
                        <View>
                            <Icon name = "md-arrow-dropdown" size = {28} color = 'white'
                            style={{marginLeft:Platform.OS == 'ios' ? wp('30%') : null,marginTop:hp('1%'),alignSelf:'flex-end'}}
                            />
                        </View>
                        
                    </View>
                    <View style={{marginTop: hp('1%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: 'transparent',
                         borderColor: 'grey',
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Answer to security question 1'}
                            placeholderTextColor = 'grey'
                            underlineColorAndroid = 'transparent'
                            onChangeText = {setfirstans}
                            selectionColor={'white'}
                        >    
                        </TextInput>
                    </View>

                    <View style={{marginTop: hp('3%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Select security question 2</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: 'transparent',
                         borderColor: 'grey',
                         flexDirection:'row',
                    }}>
                        {Platform.OS == 'ios'?
                        <RNPickerSelect
                            placeholder={{
                                label: 'Security Question 2',
                                value: null,
                                color: 'white',
                              }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'What was your childhood nick name?', value: 'question1' },
                                { label: 'What is the name of your childhood friend?', value: 'question2' },
                                { label: 'What is the name of your school?', value: 'question3' },
                            ]}
                            
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                  top: 20,
                                  right: 10,
                                },
                                placeholder: {
                                  color: 'white',
                                  fontSize: 16,
                                },
                              }}
                        />:
                        <Picker
                            selectedValue={myques}

                            onValueChange={(itemValue) => 
                            setmyques(itemValue)} style={styles.picker}>
                            {security_questions.map((ques)=> {
                                return <Picker.Item label={ques.question} value={ques.question} key={ques.question} />
                            })}

                        </Picker>
                        }
                        <View>
                            <Icon name = "md-arrow-dropdown" size = {28} color = 'white'
                            style={{marginLeft:Platform.OS == 'ios' ? wp('30%') : null,marginTop:hp('1%'),alignSelf:'flex-end'}}
                            />
                        </View>

                    </View>
                    <View style={{marginTop: hp('1%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: 'transparent',
                         borderColor: 'grey',
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Answer to security question 2'}
                            placeholderTextColor = 'grey'
                            underlineColorAndroid = 'transparent'
                            onChangeText = {setsecans}
                            selectionColor={'white'}
                        >    
                        </TextInput>
                    </View>

                    <View style={{marginTop: hp('3%')}}/>
                    <View>
                        <Text style={{fontSize: 14 , color: 'white' , marginLeft: wp('5%')}}>Select security question 3</Text>
                    </View>
                    <View style={{marginTop: hp('2%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: 'transparent',
                         borderColor: 'grey',
                         flexDirection: 'row',
                    }}>
                        {Platform.OS == 'ios'?
                        <RNPickerSelect
                            placeholder={{
                                label: 'Security Question 3',
                                value: null,
                                color: 'white',
                              }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'What was your childhood nick name?', value: 'question1' },
                                { label: 'What is the name of your childhood friend?', value: 'question2' },
                                { label: 'What is the name of your school?', value: 'question3' },
                            ]}
                            
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                  top: 20,
                                  right: 10,
                                },
                                placeholder: {
                                  color: 'white',
                                  fontSize: 16,
                                },
                              }}
                        />:
                        <Picker
                            selectedValue={myques}

                            onValueChange={(itemValue) => 
                            setmyques(itemValue)} style={styles.picker}>
                            {security_questions.map((ques)=> {
                                return <Picker.Item label={ques.question} value={ques.question} key={ques.question} />
                            })}

                        </Picker>
                        }
                        <View>
                            <Icon name = "md-arrow-dropdown" size = {28} color = 'white'
                            style={{marginLeft:Platform.OS == 'ios' ? wp('30%') : null,marginTop:hp('1%'),alignSelf:'flex-end'}}
                            />
                        </View>

                    </View>
                    <View style={{marginTop: hp('1%')}}/>
                    <View style={{
                         marginLeft: wp('5%'),
                         width: wp('90%'),
                         height: hp('7%'),
                         fontSize: 16,
                         borderRadius: 30,
                         borderWidth: 2,
                         backgroundColor: 'transparent',
                         borderColor: 'grey',
                    }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Answer to security question 3'}
                            placeholderTextColor = 'grey'
                            underlineColorAndroid = 'transparent'
                            onChangeText = {setthirdans}
                            selectionColor={'white'}
                        >    
                        </TextInput>
                    </View>

                  <View style={{marginTop: hp('3%')}}/>

                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={handleNextbutton}>
                            <Image
      			                style={styles.confirmbutton}
      			                source = {require('../screen_assets/password_screen/next.png')}
      		                />
                        </TouchableOpacity>       
                    </View>
                </ImageBackground>
            </View>
            </KeyboardAwareScrollView>
            </ScrollView>
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
    picker: {
        color:'white',
        height: hp('7%'),
        width:wp('75%'),
        backgroundColor:'transparent',
        marginLeft:wp('7%'),
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      color: 'white',
      paddingRight: 25, // to ensure the text is never behind the icon
      marginLeft:wp('7%'),
      marginTop:hp('2%')
    },
    inputAndroid: {
      fontSize: 16,
      color: 'white',
      paddingRight: 30, // to ensure the text is never behind the icon
      marginLeft:wp('7%'),
      marginTop:hp('2%')
    },
  });
  

export default security_questions_screen;