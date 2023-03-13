import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function TracklistScreen() {
  return (
    <>
        <LinearGradient
            colors={['#0000ff', '#00005f', '#191414']}
            style={styles.linearGradient}>
            <Image
                style={{width: 200, height: 200}}
                source={{uri: '../assets/logos/Logo_HimaTekkom-ITS.png'}}
            />
        </LinearGradient>
        <TouchableOpacity>
            <Text style={[styles.helloWorld]}> Hello World </Text>
        </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    helloWorld: {
      alignText: 'center',
    },
  });

export default TracklistScreen