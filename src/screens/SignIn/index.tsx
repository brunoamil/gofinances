import React, { useContext } from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSVG from "../../assets/apple.svg";
import GoogleSVG from "../../assets/google.svg";
import LogoSVG from "../../assets/logo.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWraper,
} from "./styles";

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("error login", error);
      Alert.alert("Não foi possivel conectar com a conta Google");
    }
  }

  async function handleSignWithApple() {
    try {
      await signInWithApple();
    } catch (error) {
      console.log("error login", error);
      Alert.alert("Não foi possivel conectar com a conta Apple");
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSVG width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"} uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWraper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSVG}
            onPress={handleSignWithGoogle}
          />
          <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSVG}
            onPress={handleSignWithApple}
          />
        </FooterWraper>
      </Footer>
    </Container>
  );
}
