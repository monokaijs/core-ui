import React from "react";
import {Image, View} from "react-native";
import {Text} from "react-native";
import Swiper from 'react-native-swiper';
import Scaffold from "./Scaffold";
import Block from "./Block";
import Button from "../controls/Button";

const Screen = ({screen, index, vertical, style = {}, labelStyle, align, isLast}) => {
  const footer = (
    <Block noPadding style={{
      marginBottom: vertical ? 16 : 48,
    }}>
      {isLast ? (
        <Button>
          Finish
        </Button>
      ) : (
        <Text style={{
          textAlign: "center",
          fontStyle: "italic"
        }}>Swipe {vertical ? "down" : "right"} to continue</Text>
      )}
    </Block>
  );

  style = {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 32,
    ...style,
  }

  switch (align) {
    case "bottom-left":
      style = {
        ...style,
        justifyContent: "flex-end",
        alignItems: "flex-start"
      }
      break;
    case "bottom-center":
      style = {
        ...style,
        justifyContent: "flex-end",
        alignItems: "center"
      }
      break;
    case "middle-left":
      style = {
        ...style,
        justifyContent: "center",
        alignItems: "flex-start"
      }
      break;
  }

  return (
    <Scaffold footer={footer} containerStyle={{
      backgroundColor: style.backgroundColor || "#FFF"
    }}>
      <View style={style}>
        {screen.figure && (
          <Image source={screen.figure} style={{
            width: 140,
            height: 140,
            marginBottom: 32,
            resizeMode: "contain"
          }}/>
        )}
        <Text style={{
          color: "#000",
          fontSize: 24,
          fontWeight: "bold",
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
            align={align}
          />
        ))}
      </Swiper>
    </View>
  )
};

export default IntroScreen;
