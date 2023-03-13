import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

function TracklistScreen() {
  return (
    <>
        <LinearGradient
            colors={['#0000ff', '#00005f', '#191414']}
            style={styles.linearGradient}>
            <Image
            style={{width: 200, height: 200}}
            source={{uri: 'https://www.bensound.com/bensound-img/punky.jpg'}}
            />
        </LinearGradient>
    </>
  )
}

export default TracklistScreen