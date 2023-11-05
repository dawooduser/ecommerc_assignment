import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'

const ProductTab = () => {
    const TabBtn = useCallback(({title = ''}) => (
        <View style={[commonStyles.center, styles.TabContainer]}>
            <Text style={[FONTS.body4, styles.title]}>{title}</Text>
        </View>
    ), [])
    
  return (
    <View style={[styles.container, commonStyles.rowDirectionCenter]}>
      <TabBtn title={"ALL"} />
      
    </View>
  )
}

export default memo(ProductTab)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 5,
        // paddingHorizontal: 5
    },
    TabContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10, borderRadius: 10,
        marginLeft: 5, backgroundColor: '#e7ebef'
    },
    title: {
        color: '#2d2d2d'
      },
})