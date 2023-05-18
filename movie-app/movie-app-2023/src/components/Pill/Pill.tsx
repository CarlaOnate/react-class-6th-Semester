import React from "react";
import { ShowLabel } from "./styles";
import { PillProp } from "./types";

const Pill: React.FC<PillProp> = ({ pillColor = "#ff4444", genre }) => {
  return <ShowLabel pillColor={pillColor}>{genre}</ShowLabel>;
};

export default Pill;
