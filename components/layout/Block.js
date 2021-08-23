import React from "react";
import {View} from "react-native";

const Block = (props) => {
  let style = {
    margin: 16,
    padding: 16,
    borderRadius: 8,
  };
  if (props.dashed) style = {
    ...style,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: style.backgroundColor,
    backgroundColor: "transparent",
  };
  if (props.strong) style.backgroundColor = "#FFF";
  if (props.noPadding) style.padding = 0;
  style = {
    ...style,
    ...props.style,
  }
  return (
    <View style={style}>
      {props.children}
    </View>
  );
};

export default Block;
