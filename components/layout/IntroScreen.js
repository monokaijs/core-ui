import React from "react";
import {View} from "react-native";
import {Text} from "react-native";
import Swiper from 'react-native-swiper';

const IntroScreen = (props) => {
  const align = props.align || "left";
  return (
    <View style={{
      flex: 1
    }}>
      <Swiper style={{
        flex: 1
      }}>
        {props.screens.map(screen => (
          <View style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{
              color: "#000"
            }}>{screen.title}</Text>
            <Text>{screen.description}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  )
};

export default IntroScreen;
