import React from 'react';
import { ShowLabelProps } from "./types";
import { Label } from "./styles";

const ShowLabel: React.FC<ShowLabelProps> = props => {
    const { children, color } = props;
    return (
        <Label color={color}>{children}</Label>
    );
}

export default ShowLabel;
