import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
      </View>
    </View>
      
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 40,
        fontWeight:'bold',
        textDecorationLine: 'underline',
        paddingHorizontal:10,
    },
    container:{},
    card:{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
        width:100,
        height:100, 
        borderRadius:10,
        margin:15
    },
    cardOne:{
        backgroundColor:'#ff5733',
        fontWeight:'bold'
    }
})