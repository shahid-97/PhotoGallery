import React, { useReducer, useCallback, useEffect } from "react";
import { StyleSheet } from "react-native";
import MUIHeader from './../components/Header'
import PhotoGrid from './../components/PhotoGrid'
import { getList } from './../api/picsum'
import { actionCreators, initialState, reducer } from './../reducers/photos'
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
const MainScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { photos, nextPage, loading, error } = state

  const fetchPhotos = useCallback(async () => {
    dispatch(actionCreators.loading())

    try {
      const nextPhotos = await getList(nextPage)
      dispatch(actionCreators.success(nextPhotos, nextPage))
    } catch (e) {
      dispatch(actionCreators.failure())
    }
  }, [nextPage])

  useEffect(() => {
    fetchPhotos()
  }, [])

  // We'll show an error only if the first page fails to load
  if (photos.length === 0) {
    if (loading) {
      <LoadingScreen />
    }

    if (error) {
      <ErrorScreen />
    }
  }
  return (
    <>
      <MUIHeader />
      <PhotoGrid numColumns={3} photos={photos} onEndReached={fetchPhotos} />
    </>
  )
}
// const styles = StyleSheet.create({

//   })
export default MainScreen