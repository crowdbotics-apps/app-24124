import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps197938Navigator from '../features/Maps197938/navigator';
import Additem197937Navigator from '../features/Additem197937/navigator';
import Maps197933Navigator from '../features/Maps197933/navigator';
import UserProfile197929Navigator from '../features/UserProfile197929/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps197938: { screen: Maps197938Navigator },
Additem197937: { screen: Additem197937Navigator },
Maps197933: { screen: Maps197933Navigator },
UserProfile197929: { screen: UserProfile197929Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
