import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { memo, useCallback } from 'react'
import { Ionicons } from '../../constant/icons'
import { useNavigation } from '@react-navigation/native'
import { genericRatio } from '../../helper'

const HeaderBackBtn = () => {
    const navigation = useNavigation()
    const backNavigation = useCallback(() => navigation.goBack(), [])
    return (
        <TouchableOpacity onPress={backNavigation}>
            <Ionicons name={"arrow-back"} size={genericRatio(25)} color={'#9e9f99'} />
        </TouchableOpacity>
    )
}

export default memo(HeaderBackBtn)

const styles = StyleSheet.create({})