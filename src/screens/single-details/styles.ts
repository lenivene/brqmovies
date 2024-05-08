import styled from "styled-components/native";
import { Platform } from "react-native";
import Animated from "react-native-reanimated";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral};
  align-items: center;
  width: 100%;
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${Platform.OS === "ios" ? 74 : 20}px 16px 16px;
  position: absolute;
  z-index: 1;
`;

export const AnimatedHeader = Animated.createAnimatedComponent(Header);

export const ButtonHeader = styled.TouchableOpacity<{ color?: string }>`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 34px;
  width: 34px;

  border-radius: 100%;

  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};

  margin: 0 8px;
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.nunito.regular};
  font-size: 22px;
`;

export const AnimatedHeaderTitle =
  Animated.createAnimatedComponent(HeaderTitle);

const Content = styled.View`
  justify-content: flex-start;
  padding: 16px;
  width: 100%;

  gap: 16px;
`;

export const AnimatedContent = Animated.createAnimatedComponent(Content);

export const Poster = styled.Image`
  width: 100%;
  height: 526px;
  object-fit: cover;
`;

export const TitleContent = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};

  font-family: ${({ theme }) => theme.fonts.nunito.bold};
  font-size: 28px;

  margin: 32px 0px 0px;
  line-height: 36px;
`;

export const SummaryLabel = styled.Text`
  color: ${({ theme }) => theme.colors.primary};

  text-transform: uppercase;

  font-family: ${({ theme }) => theme.fonts.nunito.bold};
  line-height: 24px;
  font-size: 14px;
`;

export const OverviewContent = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};

  text-align: justify;

  font-family: ${({ theme }) => theme.fonts.nunito.regular};
  line-height: 24px;
  font-size: 16px;
`;
