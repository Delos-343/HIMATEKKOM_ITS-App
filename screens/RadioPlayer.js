import React from 'react'
import { Animated, FlatList, SafeAreaView } from 'react-native'

const RadioPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>

            {/* Poster / Live Video Preview */}

            <Animated.FlatList
                ref={radioSlider}
                renderItem={renderChannels}
                data={channels}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {x: scrollX},
                      },
                    },
                  ],
                  {useNativeDriver: true},
                )}
            />

            {/* Title + Author */}

            <View>
                <Text style={[styles.channelContent, styles.channelTitle]}>
                    {/* {channels[channelIndex].title} */ trackTitle}
                </Text>
                <Text style={[styles.channelContent, styles.channelArtist]}>
                    {/* {channels[channelIndex].artist} */ trackArtist}
                </Text>
            </View>

        </View>
    </SafeAreaView>
  )
}

export default RadioPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
    
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});