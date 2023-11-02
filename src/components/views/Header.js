import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { Ionicons } from '../../constant/icons'
import { genericRatio } from '../../helper'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import HorizontalSpace from './HorizontalSpace'

const Header = ({ title }) => {
    const navigation = useNavigation()
    const backNavigation = useCallback(() => navigation.goBack(), [])
    return (
        <View style={[styles.container, commonStyles.fullWidth, commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
            <TouchableOpacity onPress={backNavigation}>
                <Ionicons name={"arrow-back"} size={genericRatio(25)} color={'#9e9f99'} />
            </TouchableOpacity>
            <Text style={[styles.textStyle, FONTS.h3]}>{title}</Text>
            <HorizontalSpace container={{width: genericRatio(25)}} />
        </View>
    )
}

Header.propType = {
    title: PropTypes.string.isRequired,
}
export default memo(Header)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    textStyle: {
        color: 'white'
    }
})