import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback, useMemo, useState } from 'react'
import { COLORS, commonStyles } from '../../constant/theme'
import { genericRatio } from '../../helper'
import { Ionicons } from '../../constant/icons'

const LikeHeart = () => {
    const [toggle, setToggle] = useState(false)
    const toggleChangeIcon = useMemo(() => {
        let name = toggle ? 'heart' : 'heart-outline'
        return name
    }, [toggle])

    const toggleCb = useCallback(() => {
        setToggle(!toggle)
    }, [toggle])

  return (
    <TouchableOpacity style={[styles.container, commonStyles.center]} onPress={toggleCb} activeOpacity={0.9}>
        <Ionicons name={toggleChangeIcon} size={genericRatio(20)} color={COLORS.primary} />
    </TouchableOpacity>
  )
}

export default memo(LikeHeart)

const styles = StyleSheet.create({
    container: {
        height: genericRatio(34), width: genericRatio(34), borderRadius: genericRatio(34),
        backgroundColor: 'rgba(255,250,250, 0.5)'
    }
})