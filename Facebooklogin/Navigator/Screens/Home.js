import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { StackActions, useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation=useNavigation();
    const handleLogOut=async()=>{
        try {
            await auth().signOut();
            navigation.dispatch(StackActions.replace("Login"))
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <View style={styles.container}>
      <Text style={{padding:20}}> Well Come</Text>
      <Text style={{padding:20}}> website</Text>
      <TouchableOpacity onPress={handleLogOut} style={{backgroundColor:"red",borderRadius:10}}>
        <Text style={{padding:20,color:"white",fontWeight:"bold"}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})