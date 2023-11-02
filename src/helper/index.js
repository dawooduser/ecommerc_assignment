import { CommonActions } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const genericWidth = ratio => scale(ratio)
export const genericHeight = ratio => verticalScale(ratio)
export const genericRatio = ratio => moderateScale(ratio)
export const screenNavigation = (navigaiton, path = "", data = {}) => navigaiton.navigate(path, data)
export const hardScreenNavigation = (navigaiton, name = "", params = {}) => navigaiton.dispatch(
  CommonActions.reset({
    index: 0,
    routes: [{ name, params }]
  })
);