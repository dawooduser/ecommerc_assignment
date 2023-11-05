import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { genericRatio } from '../../helper'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import VerticalSpace from './VerticalSpace'
import HorizontalSpace from './HorizontalSpace'

const ProductCardHome = () => {
  return (
    <View style={{width: '49%', backgroundColor: COLORS.secondary}}>
      <Image source={{uri: 'https://media-qatar.ahmarket.com/media/catalog/product/cache/359b58ec75e6950134692ac40e74b893/7/1/7152000468571_2_1.jpg'}} 
      style={{height: genericRatio(150), width: '100%'}}
      />
      <View style={[styles.cardBottom]}>
        <Text style={[FONTS.body4, styles.title]}>{"Product Title"}</Text>
        <View style={[commonStyles.rowDirectionCenter]}>
          <Text style={[FONTS.body4, styles.title]}>{"QAR"}</Text>
          <HorizontalSpace />
          <Text style={[FONTS.body3, styles.priceColor]}>XX.xx</Text>
        </View>
          <Text style={[FONTS.body3, styles.linePRiceText]}>XX.xx</Text>
      </View>
    </View>
  )
}

export default memo(ProductCardHome)

const styles = StyleSheet.create({
    cardBottom: {
        padding:  10
      },
      priceColor: {
        color: '#f23030'
      },
      linePRiceText: {
        color: COLORS.lightGray7,
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        textDecorationColor: COLORS.lightGray7
    }
})