import React from 'react'
import { Animated, FlatList, SafeAreaView } from 'react-native'

const RadioPlayer = () => {
  return (
    <SafeAreaView style={style.container}>
        <View style={style.mainContainer}>

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
                <Text style={[style.channelContent, style.channelTitle]}>
                    {/* {channels[channelIndex].title} */ trackTitle}
                </Text>
                <Text style={[style.channelContent, style.channelArtist]}>
                    {/* {channels[channelIndex].artist} */ trackArtist}
                </Text>
            </View>

        </View>
    </SafeAreaView>
  )
}

export default RadioPlayer