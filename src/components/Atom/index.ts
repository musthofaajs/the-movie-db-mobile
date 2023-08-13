import {
  StatusBarProps,
  StatusBarPropsAndroid,
  StatusBarPropsIOS,
} from 'react-native';
import FocusAwareStatusBar from './FocusAwareStatusBar';

export type IStatusBarProps = StatusBarProps &
  StatusBarPropsAndroid &
  StatusBarPropsIOS;

export {FocusAwareStatusBar};
