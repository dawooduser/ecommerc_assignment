import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo, useCallback} from 'react'
import {COLORS, FONTS, commonStyles} from '../../constant/theme'
import {AntDesign, Ionicons} from '../../constant/icons'
import {genericRatio} from '../../helper'
import PropTypes from 'prop-types'
import {useNavigation} from '@react-navigation/native'
import HorizontalSpace from './HorizontalSpace'
import HeaderBackBtn from './HeaderBackBtn'
import HeaderSearchContainer from './HeaderSearchContainer'

const Header = ({
  title = '',
  mode = 'simple',
  container = {},
  showFilterBool = false,
}) => {
  const Simple = useCallback(
    () => (
      <>
        <HeaderBackBtn />
        <Text style={[styles.textStyle, FONTS.h3]}>{title}</Text>
        <HorizontalSpace container={{width: genericRatio(25)}} />
      </>
    ),
    [],
  )

  const Search = useCallback(
    () => (
      <>
        <HeaderBackBtn />
        <HorizontalSpace />
        <HeaderSearchContainer />
        {showFilterBool && (
          <>
            <HorizontalSpace />
            <TouchableOpacity style={[commonStyles.center]}>
              <AntDesign
                name={'filter'}
                size={genericRatio(25)}
                color={COLORS.secondary}
              />
              <Text style={[FONTS.body4, styles.textStyle]}>{'Filter'}</Text>
            </TouchableOpacity>
          </>
        )}
      </>
    ),
    [],
  )

  const HeaderMode = useCallback(() => {
    const ListOfHeaders = {
      simple: <Simple />,
      search: <Search />,
    }
    return ListOfHeaders[mode] || <View />
  }, [])
  return (
    <View
      style={[
        styles.container,
        commonStyles.fullWidth,
        commonStyles.rowDirectionCenter,
        commonStyles.spaceBetween,
        container,
      ]}>
      <HeaderMode />
    </View>
  )
}

Header.propType = {}

export default memo(Header)

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textStyle: {
    color: 'white',
  },
})
