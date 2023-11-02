import React, { memo } from 'react';
import { StyleSheet, } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useSelector } from 'react-redux';
import { COLORS, FONTS, commonStyles } from '../../constant/theme'

const LazyLoader = () => {
  const spinner = useSelector(x => x.spinner)
  return <Spinner 
  visible={spinner.visible}
    textStyle={styles.spinnerTextStyle}
    textContent={spinner?.text || ""}
  />
}

export default memo(LazyLoader)

const styles = StyleSheet.create({
  spinnerTextStyle: {
    ...FONTS.h4,
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});