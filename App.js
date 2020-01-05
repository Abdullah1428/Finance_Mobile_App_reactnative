import React from 'react';

import {
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
}from 'react-native-responsive-screen'; 

import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import first_screen from './src/screens/first_screen';
import email_screen from './src/screens/email_screen';
import terms_condition from './src/screens/terms_condition';
import select_document_screen from './src/screens/select_document_screen';
import scan_passport_screen from './src/screens/scan_passport_screen';
import scanned_passport_screen from './src/screens/scanned_passport_screen';
import scan_license_screen from './src/screens/scan_license_screen';
import scanned_license_screen from './src/screens/scanned_license_screen';
import selfie_video_screen from './src/screens/selfie_video_screen';
import scanned_selfie_screen from './src/screens/scanned_selfie_screen';
import selfie_picture_screen from './src/screens/selfie_picture_screen';
import scanned_selfie_picture_screen from './src/screens/scanned_selfie_picture_screen';
import type_email_screen from './src/screens/type_email_screen';
import email_verification_screen from './src/screens/email_verification_screen';
import email_verified_screen from './src/screens/email_verified_screen';
import scan_address_screen from './src/screens/scan_address_screen';
import scanned_address_screen from './src/screens/scanned_address_screen';
import password_screen from './src/screens/password_screen';
import security_questions_screen from './src/screens/security_questions_screen';
import personal_information_screen from './src/screens/personal_information_screen';
import finger_print_screen from './src/screens/finger_print_screen';
import confirm_information_screen from './src/screens/confirm_information_screen';
import edit_info_screen from './src/screens/edit_info_screen';
import get_started_screen from './src/screens/get_started_screen';
// menu screens
import Home_Screen from './src/tab_screens/Home_Screen';
import transaction_cuurent_screen from './src/tab_screens/transaction_current_screen';
import apply_services_screen from './src/tab_screens/apply_services_screen';
import pay_transfer_initial_screen from './src/tab_screens/pay_transfer_initial_screen';
import select_payee_screen from './src/tab_screens/select_payee_screen';
import new_payee_screen from './src/tab_screens/new_payee_screen';
import new_payee_pic_screen from './src/tab_screens/new_payee_pic_screen';
import pay_transfer_page_screen from './src/tab_screens/pay_trasnfer_page_screen';
import payee_criteria_screen from './src/tab_screens/payee_criteria_screen';
import calendar_screen from './src/tab_screens/calendar_screen';
import review_payee_screen from './src/tab_screens/review_payee_screen';

console.disableYellowBox = true;

const Sign_up_Screens = createStackNavigator({

  first: {
    screen: first_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  email: {
    screen: email_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  terms_cond: {
    screen: terms_condition,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  select_doc: {
    screen: select_document_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  scan_passport: {
    screen: scan_passport_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  scanned_passport: {
    screen: scanned_passport_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  scan_license: {
    screen: scan_license_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  scanned_license: {
    screen: scanned_license_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  selfie_video: {
    screen: selfie_video_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  scanned_selfie: {
    screen: scanned_selfie_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  selfie_picture: {
    screen: selfie_picture_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  scanned_selfie_picture: {
    screen: scanned_selfie_picture_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  type_email: {
    screen: type_email_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  email_verification: {
    screen: email_verification_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  email_verified: {
    screen: email_verified_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  scan_address: {
    screen: scan_address_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  scanned_address: {
    screen: scanned_address_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  password: {
    screen: password_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  security_questions: {
    screen: security_questions_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  personal_inform: {
    screen: personal_information_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  finger_print: {
    screen: finger_print_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  confirm_info: {
    screen: confirm_information_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  edit_info: {
    screen: edit_info_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  get_started: {
    screen: get_started_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },

 

},{
  initialRouteName: 'first',
}

);

// Home Menu Screens 
const Home_menu = createStackNavigator({

  Home: {
    screen: Home_Screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  transactions_current: {
    screen: transaction_cuurent_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },

},
{
  initialRouteName: 'Home',
}

);

Home_menu.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

// end

// apply menu

const apply_menu = createStackNavigator({

  apply_services: {
    screen: apply_services_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },

},
{
  initialRouteName: 'apply_services',
}

);

apply_menu.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

// end

// pay transfer menu

const pay_transfer_menu = createStackNavigator({

  pay_transfer_initial: {
    screen: pay_transfer_initial_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  select_payee: {
    screen: select_payee_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  new_payee: {
    screen: new_payee_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  new_payee_pic: {
    screen: new_payee_pic_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  pay_transfer_page: {
    screen: pay_transfer_page_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  payee_criteria: {
    screen: payee_criteria_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  calendar: {
    screen: calendar_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  review_payee: {
    screen: review_payee_screen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  }

},
{
  initialRouteName: 'pay_transfer_initial',
}

);

pay_transfer_menu.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

// end





const After_Login_Screens = createBottomTabNavigator(
  {
    home:Home_menu,
    apply:apply_menu,
    pay_transfer:pay_transfer_menu,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon:({focused , horizontal , tintColor}) => {
        const { routeName } = navigation.state;

        if(routeName === 'home'){
          if(focused) {
            return(
              <Image
                source={require('./src/screen_assets/tab_screen_icons/home.png')}
              />
            )
          }
          else
          {
            return(
              <Image
                source={require('./src/screen_assets/tab_screen_icons/home_w.png')}
              />
            )
          }
          
        }

      if(routeName === 'apply'){
          if(focused) {
            return(
              <Image
                source={require('./src/screen_assets/tab_screen_icons/feature.png')}
              />
            )
          }
          else
          {
            return(
              <Image
                source={require('./src/screen_assets/tab_screen_icons/feature_w.png')}
              />
            )
          }
          
        }

      if(routeName === 'pay_transfer'){
          if(focused) {
            return(
              <Image
                source={require('./src/screen_assets/tab_screen_icons/pay.png')}
              />
            )
          }
          else
          {
            return(
              <Image
                source={require('./src/screen_assets/tab_screen_icons/pay_w.png')}
              />
            )
          }
          
        }



      }
    }),
    tabBarOptions: {
      style:{
        backgroundColor:'#14274A',
        borderTopColor:'transparent',
      },
      showIcon:true,
      showLabel:false,
    },
    swipeEnabled: false,
  
    
  }
  

)

const all_screens = createStackNavigator(
  {
    signup: {
      screen: Sign_up_Screens,
      navigationOptions:({navigation}) => ({
        header:null,
      }),
    },

    loggedin: {
      screen: After_Login_Screens,
      navigationOptions:({navigation}) => ({
        header:null,
      }),
    },


  },
)

export default createAppContainer(all_screens);