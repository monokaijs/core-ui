import React from "react";
import {ScrollView, View} from "react-native";

const Scaffold = (props) => {
  return (
    <View style={{
      flex: 1,
      ...props.containerStyle
    }}>
      <ScrollView contentContainerStyle={{
        flex: 1
      }}>
        {props.children}
      </ScrollView>
      <View>
        {props.footer}
      </View>
    </View>
  )
};

export default Scaffold;
