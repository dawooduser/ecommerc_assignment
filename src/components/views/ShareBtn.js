import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback, useMemo } from 'react'
import { COLORS, commonStyles } from '../../constant/theme'
import { genericRatio } from '../../helper'
import { Ionicons } from '../../constant/icons'

const ShareBtn = () => {
    const onPressCB = useCallback(() => {}, [])
  return (
    <TouchableOpacity style={[styles.container, commonStyles.center]} activeOpacity={0.9} onPress={onPressCB}>
        <Ionicons name={'share-social-sharp'} size={genericRatio(20)} color={COLORS.primary} />
    </TouchableOpacity>
  )
}

export default memo(ShareBtn)

const styles = StyleSheet.create({
    container: {
        height: genericRatio(34), width: genericRatio(34), borderRadius: genericRatio(34),
        backgroundColor: 'rgba(255,250,250, 0.7)'
    }
})