/**
 * @format
 * @flow
 */

import { Navigation } from 'react-native-navigation';

//Screens
import Home from "./app/screens/Home.js";
import ScreenOne from "./app/screens/ScreenOne.js";

const APP_NAME = 'App';

const generateRoute = (route: string, screen: any) => {
  return {
    path: `${APP_NAME}.${route}`,
    component: screen,
  }
}

const registerScreen = (route: string, screen: any) => {
  Navigation.registerComponent(route, () => screen)
}

const Routes = {
  Home: generateRoute('Home', Home),
  ScreenOne: generateRoute('ScreenOne', ScreenOne),
};

//TODO: Impliment spread operator
registerScreen( Routes['Home']['path'], Routes['Home']['component']);
registerScreen( Routes['ScreenOne']['path'], Routes['ScreenOne']['component']);

export default App =() => Navigation;
