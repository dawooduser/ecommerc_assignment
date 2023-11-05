import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { commonStyles } from '../../constant/theme'
import { Header, ProductCardHome, ProductTab, VerticalSpace } from '../../components'

const ProductFashion = () => {
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen]}>
      <Header mode={'search'}  showFilterBool container={{paddingVertical: 0}} />
      <ProductTab />
      <VerticalSpace />
      <FlatList numColumns={2}
      data={['1', '1']} keyExtractor={(item, index) => index}
      columnWrapperStyle={{
        justifyContent: 'space-between', paddingHorizontal: 5, 
      }}
      renderItem={({ item }) => <ProductCardHome />}
      />
    </SafeAreaView>
  )
}

export default memo(ProductFashion)

const styles = StyleSheet.create({})