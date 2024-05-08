import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export const ArrowLeftIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        d="M12 5.25H2.873l4.192-4.192L6 0 0 6l6 6 1.058-1.057L2.872 6.75H12v-1.5z"
        fill={props?.color ? props.color : "#ffffff"}
      />
    </Svg>
  );
};
