import styled from "styled-components";
import { LabelProps } from "./types";

export const ShowLabel = styled.div<LabelProps>`
  background: ${props => props.pillColor};
  color: #fff;
  padding: 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  margin: 0 0 5px 0;
  display: table;
  transition: all 0.3s;
  border-radius: 5px;
`;
