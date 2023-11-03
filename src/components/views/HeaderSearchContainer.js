import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, commonStyles } from '../../constant/theme'
import { SimpleLineIcons } from '../../constant/icons'
import { genericRatio } from '../../helper'

const HeaderSearchContainer = () => {
  return (
    <View style={[commonStyles.fillFullScreen, commonStyles.rowDirectionCenter, styles.container]}>
      <TextInput style={styles.TextInputContainer} placeholder='Search the Market' 
      placeholderTextColor={COLORS.lightGray7} />
      <TouchableOpacity>
        <SimpleLineIcons name={'magnifier'} size={genericRatio(20)} color={COLORS.darkgray} />
      </TouchableOpacity>
    </View>
  )
}

export default memo(HeaderSearchContainer)

const styles = StyleSheet.create({
    TextInputContainer: {
        flex: 1, height: 35, padding: 0, color: COLORS.darkgray 
    },
    container: {
        paddingHorizontal: 10, backgroundColor: COLORS.secondary, borderRadius: 10
    }
})