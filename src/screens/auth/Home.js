import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { SimpleBtn, VerticalSpace } from '../../components'
import { screenNavigation } from '../../helper'

const Home = ({navigation}) => {
  const moveToScreen = useCallback((screenName) => screenNavigation(navigation, screenName), [])
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, commonStyles.center, styles.container]}>
      <SimpleBtn title={'Product Catalogue Fashion'} callBack={() => moveToScreen("ProductFashion")} 
      containerStyle={[commonStyles.shadow, styles.Btn]} textStyle={[FONTS.h3, {fontFamily: 'Roboto-Medium'}]} />
      <VerticalSpace />
      <SimpleBtn title={'Product Catalogue Standard'} callBack={() => moveToScreen("ProductFashion")}
      containerStyle={[commonStyles.shadow, styles.Btn]} textStyle={[FONTS.h3, {fontFamily: 'Roboto-Medium'}]} />
      <VerticalSpace />
      <SimpleBtn title={'Product Detail Page | Config'} callBack={() => moveToScreen("ProductDetail")}
      containerStyle={[commonStyles.shadow, styles.Btn]} textStyle={[FONTS.h3, {fontFamily: 'Roboto-Medium'}]} />
      <VerticalSpace />
      <SimpleBtn title={'Product Detail Page | Simple'} callBack={() => moveToScreen("Product")}
      containerStyle={[commonStyles.shadow, styles.Btn]} textStyle={[FONTS.h3, {fontFamily: 'Roboto-Medium'}]} />
      <VerticalSpace />
      <SimpleBtn title={'Cart Page'} callBack={() => moveToScreen("Cart")}
      containerStyle={[commonStyles.shadow, styles.Btn]} textStyle={[FONTS.h3, {fontFamily: 'Roboto-Medium'}]} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary
  },
  Btn: {backgroundColor: 'white', width: '90%', borderRadius: 10}
})