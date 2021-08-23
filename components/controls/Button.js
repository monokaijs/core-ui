import React from "react";
import {Button as ButtonPaper} from "react-native-paper";
const Button = props => {
  return (
    <ButtonPaper mode={"contained"} {...props}>
      {props.children}
    </ButtonPaper>
  );
};

export default Button;
