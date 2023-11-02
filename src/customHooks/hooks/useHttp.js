import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hide, show } from '../../redux/reducers/spinner'
import axiosInstance from '../../http/config'
import { HttpToastMsg, showToastMsg } from '../../helper'

const useHttp = () => {
    const user = useSelector(x => x.user)
    
    const dispatch = useDispatch()


    return {}
}

export default useHttp