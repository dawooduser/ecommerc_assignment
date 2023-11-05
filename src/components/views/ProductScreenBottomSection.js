import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { memo, useCallback } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import VerticalSpace from './VerticalSpace'
import HorizontalSpace from './HorizontalSpace'
import productImagesMens from '../../constant/ProductBottomImages'
import { genericRatio } from '../../helper'

const ProductScreenBottomSection = () => {
  const CardView = useCallback(({item, index}) => (
    <View style={[styles.CardContainer, commonStyles.shadow]} key={index}>
      <Image source={{uri: item}} style={[styles.cardImae]} />
      <View style={[styles.cardBottom]}>
        <Text style={[FONTS.body4, styles.title]}>{"Product Title"}</Text>
        <VerticalSpace />
        <View style={[commonStyles.rowDirectionCenter]}>
          <Text style={[FONTS.body4, styles.title]}>{"QAR"}</Text>
          <HorizontalSpace />
          <Text style={[FONTS.body3, styles.priceColor]}>XX.xx</Text>
        </View>
          <Text style={[FONTS.body3, styles.linePRiceText]}>XX.xx</Text>
      </View>
    </View>
  ), [])
  return (
    <View>
      <VerticalSpace />
      <Text style={[FONTS.body3, styles.title]}>You may also like this</Text>
      <VerticalSpace />
      <ScrollView horizontal >
        {productImagesMens.map((val, index) => <CardView item={val} index={index} />)}
      </ScrollView>
    </View>
  )
}

export default memo(ProductScreenBottomSection)

const styles = StyleSheet.create({
  title: {
    color: '#2d2d2d'
  },
  CardContainer: {
    width: genericRatio(120), backgroundColor: COLORS.secondary, marginLeft: 10
  },
  cardImae: {
    height: genericRatio(120), width: '100%'
  },
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