import 'react-native-gesture-handler';
import React, { useEffect, useReducer, useCallback } from 'react'
import { StyleSheet} from 'react-native'
import { getList } from './api/picsum'
import { actionCreators, initialState, reducer } from './reducers/photos'
import DrawerNavigation from './components/DrawerLayout/DrawerNavigation'
import LoadingScreen from './screens/LoadingScreen';
import ErrorScreen from './screens/ErrorScreen';

export default function App() {
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
    <DrawerNavigation />
  );
}

// const styles = StyleSheet.create({
  
// })
