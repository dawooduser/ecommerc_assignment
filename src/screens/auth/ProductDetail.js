import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, commonStyles } from '../../constant/theme'
import { BottomAddtoCartContainer, Header, HorizontalSpace, ImagesSwipeContainer, LikeHeart, ProductScreenBottomSection, ShareBtn, SimpleBtn, VerticalSpace } from '../../components'
import { SliderBox } from "react-native-image-slider-box";
import { genericRatio } from '../../helper';
import { AntDesign, MaterialCommunityIcons, Octicons } from '../../constant/icons';


const ProductDetail = () => {
  const productTitle = 'Mens Casual Shirt Hawai Printed'
  const productImages = [
    'https://media-qatar.ahmarket.com/media/catalog/product/cache/359b58ec75e6950134692ac40e74b893/7/1/7152000476705_1_1.jpg',
    'https://media-qatar.ahmarket.com/media/catalog/product/cache/359b58ec75e6950134692ac40e74b893/7/1/7152000476705_2_1.jpg',
    'https://media-qatar.ahmarket.com/media/catalog/product/cache/359b58ec75e6950134692ac40e74b893/7/1/7152000476705_4_1.jpg'
  ]
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, {backgroundColor: '#cccccc'}]}>
      <Header mode={'search'} />
      <ScrollView style={[commonStyles.fillFullScreen]}>
        <View style={[styles.screenPaddingHorizontalSpace, styles.titleContainer]}>
          <Text numberOfLines={1} style={[FONTS.body3, { fontFamily: 'Roboto-Black' }]}>{productTitle}</Text>
        </View>
        <ImagesSwipeContainer images={productImages}>
          <View style={[commonStyles.fillFullScreen, { padding: 10 }, commonStyles.spaceBetween]}>
            <View style={[commonStyles.fullWidth, { alignItems: 'flex-end' }]}>
              <LikeHeart />
            </View>
            <View style={[commonStyles.fullWidth, { alignItems: 'flex-end' }]}>
              <ShareBtn />
            </View>
          </View>
        </ImagesSwipeContainer>
        <View style={[styles.screenPaddingHorizontalSpace, commonStyles.rowDirection, commonStyles.spaceBetween,
        { paddingVertical: 5 }]}>
          <View style={commonStyles.rowDirectionCenter}>
            <Text numberOfLines={1} style={[FONTS.h4, styles.priceSection]}>{"QAR"}</Text>
            <HorizontalSpace />
            <Text style={[FONTS.h1, styles.priceSection]}>{'69.75'}</Text>
            <HorizontalSpace />
            <Text style={[FONTS.h4, styles.linePRiceText]}>{'75.25'}</Text>
          </View>
          <SimpleBtn title={'NEW ARRIVAL'} callBack={() => moveToScreen("ProductFashion")} 
          containerStyle={[{paddingVertical: 6, width: genericRatio(120), backgroundColor: '#ef7500', borderRadius: 10}]} 
          textStyle={[FONTS.body3, {fontFamily: 'Roboto-light', color: 'white'}]} />
        </View>
        <View style={[styles.screenPaddingHorizontalSpace, styles.titleContainer]}>
          <Text numberOfLines={1} style={[FONTS.body4, { fontFamily: 'Roboto-Black', color: 'black' }]}>{'Details:'}</Text>
          <VerticalSpace />
          <Text numberOfLines={1} style={[FONTS.body4, { fontFamily: 'Roboto-light', color: COLORS.darkgray }]}>
            {'SKU: 912900552'}
            </Text>
        </View>
        <VerticalSpace />
        <View style={[styles.screenPaddingHorizontalSpace, styles.titleContainer]}>
          <View style={[commonStyles.rowDirectionCenter]}>
            <MaterialCommunityIcons name="truck-fast-outline" size={genericRatio(25)} color={COLORS.black} />
            <HorizontalSpace container={{width: 5}} />
            <Text style={[FONTS.body3, {color: COLORS.black}]}>{"Shipping"}</Text>
          </View>
          
          <View style={[commonStyles.center, {paddingVertical: 15, backgroundColor: '#f9f9f9'}]}>
            <Text style={[FONTS.body4, {color: 'black', fontFamily: 'Roboto-light'}]}>{"Standard: as per selected time slot."}</Text>
            <Text style={[FONTS.body4, {color: 'green',}]}>{"Free delivery on orders above QAR 99."}</Text>
          </View>
          <View style={[commonStyles.fullWidth, {height: 1, backgroundColor: COLORS.darkgray}]} />
          <View style={[commonStyles.rowDirectionCenter, {paddingVertical: 15}, commonStyles.spaceBetween]}>
            <View style={[commonStyles.rowDirectionCenter]}>
            <Octicons name="package-dependents" size={genericRatio(25)} color={COLORS.black} />
            <HorizontalSpace container={{width: 5}} />
            <Text style={[FONTS.body3, {color: COLORS.black}]}>{"Easy Return: "}</Text>
            </View>
            <Text style={[FONTS.body3, {color: COLORS.black}]}>{"You call & we pick"}</Text>
            <AntDesign name="right" size={genericRatio(15)} color={COLORS.black} />
          </View>
        </View>
        <VerticalSpace />
        <View style={[styles.screenPaddingHorizontalSpace]}>
        <ProductScreenBottomSection />
        </View>
        <VerticalSpace />




      </ScrollView>
      <BottomAddtoCartContainer />
    </SafeAreaView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  screenPaddingHorizontalSpace: {
    paddingHorizontal: 10, backgroundColor: '#f9f9f9'
  },
  titleContainer: { justifyContent: 'center', paddingVertical: 10 },
  priceSection: { fontFamily: 'Roboto-light', color: 'black' },
  linePRiceText: {
    color: COLORS.lightGray7,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: COLORS.lightGray7
  }
})