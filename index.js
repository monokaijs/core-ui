/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Button from "./components/controls/Button";
import Input from "./components/controls/Input";
import Label from "./components/controls/Label";
import Select from "./components/controls/Select";
import Navbar from "./components/layout/Navbar";
import Scaffold from "./components/layout/Scaffold";
import SplashScreen from "./components/layout/SplashScreen";
import TabBar from "./components/layout/TabBar";

export {
  Button,
  Input,
  Label,
  Select,
  Navbar,
  Scaffold,
  SplashScreen,
  TabBar
}

AppRegistry.registerComponent(appName, () => App);
