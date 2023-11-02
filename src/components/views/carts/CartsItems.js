import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper'
import { Entypo } from '../../../constant/icons'
import ShowPrice from './ShowPrice'
import HorizontalSpace from '../HorizontalSpace'
import VerticalSpace from '../VerticalSpace'

const image = 'https://media-qatar.ahmarket.com/media/catalog/product/cache/359b58ec75e6950134692ac40e74b893/0/8/089686122015.jpg'
const CartsItems = ({item, index}) => {
   
  return (
    <View style={[commonStyles.fullWidth, {}]} key={index}>
         <View style={[commonStyles.rowDirectionCenter, styles.card]}>
            <Image source={{uri: image}} style={styles.imagePreview} />
            <HorizontalSpace />
            <View style={[commonStyles.fillFullScreen]}>
                <Text style={[FONTS.body3]} numberOfLines={2}>{"Indomine Chicken Flavoured Gout Poulet 60g"}</Text>
                <ShowPrice data={{}}/>
            </View>
            <View style={[styles.itemCounterContainer, commonStyles.spaceBetween]}>
                <TouchableOpacity>
                    <Entypo name={"plus"} size={genericRatio(20)} color={'#89cf05'} />
                </TouchableOpacity>
                <VerticalSpace container={{height: 2}} />
                <View style={[styles.boxQty, commonStyles.center]}>
                    <Text style={[FONTS.body3]}>{'10'}</Text>
                </View>
                <VerticalSpace container={{height: 2}} />
                <TouchableOpacity>
                    <Entypo name={"minus"} size={genericRatio(20)} color={'#89cf05'} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default memo(CartsItems)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aqua'
    },
    card: {
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '95%',
        alignSelf: 'center',
    },
    imagePreview: {
        height: genericRatio(50), width: genericRatio(50)
    },
    itemCounterContainer: {
        height: 'auto',
        alignItems: 'center'
    },
    boxQty: {
        borderWidth: 0.5, borderColor: '#e6e6e7',
        paddingVertical: 3, paddingHorizontal: 3
    }
})