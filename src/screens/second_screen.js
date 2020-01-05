/* 
* @ react native app
* @ screen -> second screen
* @ author -> Abdullah , Graphics Panda


import ImageEditor from "@react-native-community/image-editor";
const croppingImage = async() => {

        await Image.getSize(image, (iwidth, iheight) => {
            console.log(`The image dimensions are ${iwidth}x${iheight}`);
            
            var cropData = {
                offset: {x: 0, y: 0},
                size: {width: iwidth, height: iheight},
                displaySize: {width: iwidth, height: iheight},
                resizeMode: 'contain',
            };

            ImageEditor.cropImage(image, cropData).then(url => {
                console.log("Cropped image uri", url);
                setcroppedImage(url);

            })

          }, (error) => {
            console.error(`Couldn't get the image size: ${error.message}`);
          });
    }

    const croppingImage = () => {

        Image.getSize(image, (iwidth, iheight) => {
            console.log(`The image dimensions are ${iwidth}x${iheight}`);
            
        var cropData = {
                offset: {x: 0, y: 0},
                size: {width: iwidth/1.2, height: iheight/1.2},
                displaySize: {width: iwidth, height: iheight},
                resizeMode: 'contain',
                
            };
        ImageEditor.cropImage(image, cropData).then(url => {
                console.log("Cropped image uri", url)
                setcroppedImage(url)
            })

          }, (error) => {
            console.error(`Couldn't get the image size: ${error.message}`);
          });   
    }


    <Picker
                            selectedValue={myques}

                            onValueChange={(itemValue) =>
                            setmyques(itemValue)} >
                                {questions.map((ques)=>{
                                    return <Picker.Item label={ques.question} value={ques.question} key={ques.question} />
                                })}
                            </Picker>
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
} from 'react-native';

const { width,height } = Dimensions.get("window");

const second_screen = ({navigation}) => {

    const handlebutton = () => {
        navigation.navigate('first')
    }

    return (
        <View style={styles.container}>
                <Text>
                    Hello from second screen react native
                </Text>
                <View style={{marginTop: 100}} />
                <View>
                    <TouchableOpacity onPress={handlebutton}>
                        <Text>
                            Button
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default second_screen;