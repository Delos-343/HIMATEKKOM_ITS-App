import React from 'react'
import { Animated, FlatList, SafeAreaView } from 'react-native'

const RadioPlayer = () => {
  return (
    <SafeAreaView style={style.container}>
        <View style={style.mainContainer}>
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
        </View>
    </SafeAreaView>
  )
}

export default RadioPlayer