import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {AppLoading} from "expo"
import { useFonts } from '@use-expo/font';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Asset} from "expo-asset"
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import {enableScreens} from "react-native-screens"
enableScreens()

import Screens from "./navigation/Screens"
import Images from "./constants/Images"
import articles from "./constants/articles.js"
import argonTheme from "./constants/Theme"

const assetImages=[
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Prop,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
]

// // cache product images
articles.map(article => assetImages.push(article.image))

function cacheImages(images){
  return images.map(image => {
    if(typeof image === "string"){
      return Image.prefetch(image)
    }else{
      Asset.fromModule(image).downloadAsync()
    }
  })
}

export default function App() {
  const [isLoadingComplete, setLoading] = useState(false)
  let [fontsLoaded] = useFonts({
    'ArgonExtra':require("./assets/font/argon.ttf")
  })

  function _loadedResourceAsync(){
    return Promise.all([...cacheImages(assetImages)]);

  }

  function _handleLoadingError(error){
    console.warn(error)
  }
  function _handleFinishLoading(){
    setLoading(true)
  }
if(!fontsLoaded && !isLoadingComplete){
  return(
    <AppLoading
      startAsync={_loadedResourceAsync}
      onError={_handleLoadingError}
      onFinish={_handleFinishLoading}
    />
  )
}else if(fontsLoaded){
  return(
    <NavigationContainer>
      <GalioProvider theme={argonTheme}>
        <Block flex>
          <Screens />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  )
}else{
  return(<Text>NO APP</Text>)
}

}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
