import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export const DotsMenuIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={4} height={16} viewBox="0 0 4 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
        fill={props?.color ? props.color : "#16171B"}
      />
    </Svg>
  );
};
