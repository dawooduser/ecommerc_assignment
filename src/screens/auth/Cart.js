import { Alert, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CartsItems, Header, HorizontalSpace, VerticalSpace } from '../../components'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import ShowPrice from '../../components/views/carts/ShowPrice'
import { Entypo, Feather, FontAwesome6 } from '../../constant/icons'
import { genericRatio } from '../../helper'
import Swipelist from 'react-native-swipeable-list-view';

const image = 'https://media-qatar.ahmarket.com/media/catalog/product/cache/359b58ec75e6950134692ac40e74b893/0/8/089686122015.jpg'
const Cart = () => {
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, { backgroundColor: COLORS.lightGray6 }]}>
      <Header title={'Cart'} />
      <Swipelist
        data={['data', 'a', '1', 'data', 'a', '1', 'data', 'a', '1']}
        renderRightItem={(data, index) => <CartsItems item={data} index={index}/>}
        renderHiddenItem={(data, index) => (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[styles.rightAction, { backgroundColor: '#bfbfbf' }]}
              onPress={() => {
                Alert.alert('Edit?', data.name);
              }}
            >
              <FontAwesome6 name={'trash'} size={25} color={'white'} />
            </TouchableOpacity>
          </View>
        )}
        rightOpenValue={200}
      />
      <VerticalSpace />
      <View style={[{
        backgroundColor: COLORS.secondary, paddingVertical: 20, paddingHorizontal: 30,
        width: '95%', alignSelf: 'center'
      }]}>
        <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
          <Text style={[FONTS.h4]}>{"Item(s) Total:"}</Text>
          <Text style={[FONTS.h4]}>{"QAR 102.00"}</Text>
        </View>
        <VerticalSpace />
        <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
          <Text style={[FONTS.h4]}>{"Item(s) Discount:"}</Text>
          <Text style={[FONTS.h4]}>{"QAR 102.00"}</Text>
        </View>
        <VerticalSpace />
        <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
          <Text style={[FONTS.h4]}>{"Total QAR 120.00"}</Text>
          <View style={[commonStyles.rowDirectionCenter, commonStyles.center,
          { paddingVertical: 10, paddingHorizontal: 10, borderRadius: 15, backgroundColor: COLORS.primary }]}>
            <Feather name='shopping-cart' color='white' size={20} />
            <HorizontalSpace />
            <Text style={[FONTS.body5, { color: 'white', fontSize: 15 }]}>{'CHECKOUT'}</Text>
          </View>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  rightAction: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})


{/* <ScrollView>
<FlatList 
data={['1', '1']}
renderItem={({item, index}) => <CartsItems item={item} index={index}/>}

ItemSeparatorComponent={<VerticalSpace />}
keyExtractor={(item, index) => index}
/>
<VerticalSpace />
<View style={[{backgroundColor: COLORS.secondary, paddingVertical: 20, paddingHorizontal: 30, 
  width: '95%', alignSelf: 'center'}]}>
  <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
    <Text style={[FONTS.h4]}>{"Item(s) Total:"}</Text>
    <Text style={[FONTS.h4]}>{"QAR 102.00"}</Text>
  </View>
  <VerticalSpace />
  <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
    <Text style={[FONTS.h4]}>{"Item(s) Discount:"}</Text>
    <Text style={[FONTS.h4]}>{"QAR 102.00"}</Text>
  </View>
  <VerticalSpace />
  <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
    <Text style={[FONTS.h4]}>{"Total QAR 120.00"}</Text>
    <View style={[commonStyles.rowDirectionCenter, commonStyles.center, 
      {paddingVertical: 10, paddingHorizontal: 10,  borderRadius: 15, backgroundColor: COLORS.primary}]}>
      <Feather name='shopping-cart' color='white' size={20} />
      <HorizontalSpace />
      <Text style={[FONTS.body5, {color: 'white', fontSize: 15}]}>{'CHECKOUT'}</Text>
    </View>
  </View>
  
</View>
<VerticalSpace />

</ScrollView> */}