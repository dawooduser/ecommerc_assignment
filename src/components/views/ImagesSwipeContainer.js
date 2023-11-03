import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { SIZES, commonStyles } from '../../constant/theme'
import Swiper from 'react-native-web-swiper';

const ImagesSwipeContainer = ({images, containerStyle, children, callBack}) => {
    if (images.length === 0) return null
    // return <View style={styles.container}><ImageBackground source={{uri: images[0]}} style={[styles.imageContainer]}>{children}</ImageBackground></View>
  return (
    <View style={[styles.container, containerStyle]}>
      <Swiper controlsEnabled={false}>
        {images.map((val, index) => (
            <TouchableOpacity activeOpacity={0.9} onPress={() => callBack(val, index)}>
                <ImageBackground index={index} source={{uri: val}} resizeMode={'stretch'} style={[styles.imageContainer]}>{children}</ImageBackground>
            </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  )
}

ImagesSwipeContainer.defaultProps = {
    images: [],
    containerStyle: {},
    children: [],
    callBack: (image, index = 0) => console.warn('press index ' + index),
}

export default memo(ImagesSwipeContainer)

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: SIZES.width
    },
    imageContainer: {
        height: '100%',
        width: '100%',
        
    }
})