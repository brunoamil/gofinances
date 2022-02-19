import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  GestureHandlerRootView,
  RectButtonProps,
} from "react-native-gesture-handler";

import { Container, Icon, Title, Button } from "./style";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends RectButtonProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
}
export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Container isActive={isActive} type={type}>
      <GestureHandlerRootView>
        <Button {...rest}>
          <Icon type={type} name={icons[type]} />
          <Title>{title}</Title>
        </Button>
      </GestureHandlerRootView>
    </Container>
  );
}
