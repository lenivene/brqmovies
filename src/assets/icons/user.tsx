import React from "react";
import Svg, { Path } from "react-native-svg";

export const UserIcon: React.FC = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 21.5l.165-1.064c.209-1.34 1.083-2.49 2.38-2.89C7.137 17.057 9.491 16.5 12 16.5c2.51 0 4.863.555 6.455 1.047 1.297.4 2.17 1.548 2.38 2.89L21 21.5M12 12a5 5 0 100-10 5 5 0 000 10z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
