import React, {useEffect, useState} from "react";
import {Image, View} from "react-native";
import {Text} from "react-native";
import Swiper from 'react-native-swiper';
import Scaffold from "./Scaffold";
import Block from "./Block";
import Button from "../controls/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';


const IntroScreen = (props) => {
  const align = props.align || "center";
  const [show, setShow] = useState(false);

  const Screen = ({screen, index, vertical, style = {}, labelStyle, align, isLast, showAgain}) => {
    const footer = (
      <Block noPadding style={{
        marginBottom: vertical ? 16 : 48,
      }}>
        {isLast ? (
          <Button onPress={async () => {
            await AsyncStorage.setItem('intro', '1');
            setShow(false);
          }}>
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

    return (<Scaffold footer={footer} containerStyle={{
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
    </Scaffold>);
  }

  useEffect(async () => {
    const intro = await AsyncStorage.getItem('intro');
    setShow(intro === null || props.showAgain);
  }, []);

  return show ? (
    <View style={{
      flex: 1,
      position: "absolute",
      left: 0, right: 0, top: 0, bottom: 0
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
            showAgain={props.showAgain}
          />
        ))}
      </Swiper>
    </View>
  ) : null;
};

export default IntroScreen;
