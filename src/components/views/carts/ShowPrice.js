import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useMemo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import HorizontalSpace from '../HorizontalSpace'

const ShowPrice = ({ data }) => {
    const salePriceBool = useMemo(() => {
        let bool = true
        bool = data['salePrice'] !== undefined ? true : false
        return bool
    }, [])
    return (
        <View style={[commonStyles.rowDirectionCenter]}>
            <Text style={[FONTS.body4, { color: COLORS.lightGray7 }]}>QAR</Text>
            <HorizontalSpace />
            {salePriceBool && <><Text style={[FONTS.body3, styles.showingPriceColor]}>{data['salePrice']}</Text><HorizontalSpace /></>}
            <Text style={[FONTS.body3, salePriceBool ? styles.linePRiceText : styles.showingPriceColor]}>{data['price'] || 10}</Text>
        </View>
    )
}

export default memo(ShowPrice)

const styles = StyleSheet.create({
    showingPriceColor: {
        color: '#e27769'
    },
    linePRiceText: {
        color: COLORS.lightGray7,
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        textDecorationColor: COLORS.lightGray7
    }
})