import styled from "styled-components";
import {ShowLabelProps} from "./types";

export const Label = styled.p<ShowLabelProps>`
    color: ${props => props.color || "white"};
`