import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import HorizontalSpace from './HorizontalSpace'
import { genericRatio } from '../../helper'
import SimpleBtn from './SimpleBtn'

const BottomAddtoCartContainer = () => {
  return (
    <View style={[commonStyles.fullWidth, styles.container, commonStyles.rowDirectionCenter]}>
     <View style={[commonStyles.center, styles.qtyContainer]}>
        <Text style={[FONTS.body4, {color: '#b7b7b7'}]}>{"QTY"}</Text>
        <Text style={[FONTS.h4, {fontFamily: 'Roboto-black', color: 'black'}]}>{"10"}</Text>
        
     </View>
     <HorizontalSpace />
     <SimpleBtn title={'Add To Cart'} callBack={() => console.log('Add to cart pressed')} 
      containerStyle={[styles.addtoCartButton, commonStyles.fillFullScreen]} 
      textStyle={[FONTS.h3, {fontFamily: 'Roboto-Medium', color: 'white'}]} />
    </View>
  )
}

export default memo(BottomAddtoCartContainer)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10, 
        backgroundColor: COLORS.secondary, 
        borderBottomWidth: 0.5, borderColor: COLORS.lightGray7
    },
    addtoCartButton: {
        paddingVertical: genericRatio(10),
        backgroundColor: COLORS.primary
    },
    qtyContainer: {
        paddingHorizontal: 15, paddingVertical: genericRatio(2),
        borderWidth: 0.5, borderColor: '#b7b7b7',
    }

})