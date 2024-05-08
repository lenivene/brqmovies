import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native-paper";

import { theme } from "@styles/theme";

import { styles } from "./styles";

export interface InputProps extends TextInputProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input: ReactFC<InputProps> = forwardRef(
  ({ label, iconLeft, iconRight, ...rest }, ref) => {
    return (
      <TextInput
        label={label}
        left={iconLeft && <TextInput.Icon icon={() => iconLeft} />}
        right={iconRight && <TextInput.Icon icon={() => iconRight} />}
        cursorColor={theme.colors.primary}
        textColor={theme.colors.primary}
        activeUnderlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        outlineColor="white"
        placeholderTextColor={theme.colors.primary}
        style={styles.input}
        theme={{ colors: { onSurfaceVariant: theme.colors.secondary } }}
        {...rest}
        ref={ref}
      />
    );
  }
);
