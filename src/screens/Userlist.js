import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../redux/slices/userSlice'

const Userlist = () => {

    const rs= useSelector(state =>state.user)
    
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchAllUsers());
    }
    ,[])
    console.log(rs);

  return (
    <View>
      <Text>Userlist</Text>
    </View>
  )
}

export default Userlist

const styles = StyleSheet.create({})