import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export const HeartIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M1.617 2.2a3.53 3.53 0 000 4.992l5.346 5.346.037-.037.036.037 5.347-5.346A3.53 3.53 0 107.39 2.201L7 2.592l-.392-.391a3.53 3.53 0 00-4.991 0z"
        fill={props?.color ? props.color : "#16171B"}
        stroke={props?.color ? props.color : "#16171B"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
