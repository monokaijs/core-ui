import React from "react";
import {View} from "react-native";
import {Text} from "react-native";
import Swiper from 'react-native-swiper';
import Scaffold from "./Scaffold";
import Block from "./Block";
import Button from "../controls/Button";

const Screen = ({screen, index, vertical, style = {}, labelStyle}) => {
  const footer = (
    <Block noPadding style={{
      marginBottom: vertical ? 16 : 48,
    }}>
      <Button>Next</Button>
    </Block>
  );
  return (
    <Scaffold footer={footer} containerStyle={{
      backgroundColor: style.backgroundColor || "#FFF"
    }}>
      <View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}>
        <Text style={{
          color: "#000",
          ...labelStyle
        }}>{screen.title}</Text>
        <Text style={{
          ...labelStyle
        }}>{screen.description}</Text>
      </View>
    </Scaffold>
  );
}

const IntroScreen = (props) => {
  const align = props.align || "center";

  return (
    <View style={{
      flex: 1
    }}>
      <Swiper horizontal={!props.vertical}>
        {props.screens.map((screen, index) => (
          <Screen
            isLast={index === props.screens.length - 1}
            vertical={props.vertical}
            screen={screen}
            index={index}
            key={index}
            style={props.screenStyle}
            labelStyle={props.textStyle}
          />
        ))}
      </Swiper>
    </View>
  )
};

export default IntroScreen;
