import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
const SimpleBtn = ({title, callBack, containerStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={callBack} style={[
      commonStyles.center,commonStyles.fullWidth, styles.btnContainer, containerStyle]}>
      <Text style={[FONTS.h4, styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}
SimpleBtn.propType = {
  title: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
}
export default memo(SimpleBtn)

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 15
  },
  textStyle: {color: COLORS.black}
})