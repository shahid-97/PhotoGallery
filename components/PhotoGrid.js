import React from 'react'
import { Dimensions, FlatList, Image, Pressable } from 'react-native'
import MUIHeader from './Header'

import { formatPhotoUri } from '../api/picsum'

export default function PhotoGrid({ photos, numColumns, onEndReached }) {
  const { width } = Dimensions.get('window')

  const size = width / numColumns

  return (
    // <>
    /* <MUIHeader/> */
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => alert('pressed')}
          android_ripple={
            {
              color: "blue"
            }
          }
        >
          <Image
            source={{
              width: size,
              height: size,
              uri: formatPhotoUri(item.id, size, size),
            }}
          />
        </Pressable>
      )}
    />
    // </>
  )
}
