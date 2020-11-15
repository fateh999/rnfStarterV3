import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';

MaterialCommunityIcons.loadFont();
EStyleSheet.build();
AppRegistry.registerComponent(appName, () => App);
