import React from "react";
import { useTheme } from "styled-components";
import Animated, {
  FadeIn,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import {
  AnimatedContent,
  AnimatedHeader,
  AnimatedHeaderTitle,
  ButtonHeader,
  Container,
  OverviewContent,
  Poster,
  SummaryLabel,
  TitleContent,
} from "./styles";
import { useMovie } from "@hooks/movie";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "@assets/icons/arrow-left";
import { HeartIcon } from "@assets/icons/heart";

export const SingleDetailsScreen: React.FC = () => {
  const theme = useTheme();
  const { movieDetails, addFavoriteMovie, checkHasMovieInFavorite } =
    useMovie();
  const { goBack: onHandleGoBack } = useNavigation();
  const scrollY = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [50, 120],
        ["transparent", theme.colors.tertiary]
      ),
    };
  });

  const animatedHeaderTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [50, 120], [0, 1]),
    };
  });

  if (!movieDetails) {
    return <></>;
  }

  return (
    <>
      <AnimatedHeader
        style={animatedHeaderStyle}
        entering={FadeIn.duration(500)}
      >
        <ButtonHeader onPress={onHandleGoBack}>
          <ArrowLeftIcon />
        </ButtonHeader>
        <AnimatedHeaderTitle style={animatedHeaderTitleStyle} numberOfLines={1}>
          {movieDetails.title}
        </AnimatedHeaderTitle>
        <ButtonHeader
          onPress={() => {
            addFavoriteMovie(movieDetails);
          }}
        >
          <HeartIcon
            color={
              checkHasMovieInFavorite(movieDetails.id)
                ? theme.colors.danger
                : theme.colors.secondary
            }
          />
        </ButtonHeader>
      </AnimatedHeader>
      <Animated.ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        onScroll={onScrollHandler}
        scrollEventThrottle={100}
        bounces={false}
      >
        <Container>
          <Poster
            source={{
              uri: `https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`,
            }}
          />

          <AnimatedContent entering={FadeIn.duration(600).delay(300)}>
            <TitleContent>{movieDetails.title}</TitleContent>
            <SummaryLabel>Sinopse</SummaryLabel>
            <OverviewContent>{movieDetails.overview}</OverviewContent>
          </AnimatedContent>
        </Container>
      </Animated.ScrollView>
    </>
  );
};
