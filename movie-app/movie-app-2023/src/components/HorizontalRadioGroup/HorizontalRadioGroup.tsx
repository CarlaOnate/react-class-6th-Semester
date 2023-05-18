import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {HorizontalRadioProps} from "./types";

const HorizontalRadioGroup: React.FC<HorizontalRadioProps> = props => {
  const { value, handleChange } = props;

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Filter Movies</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={0} control={<Radio />} label="All" />
        <FormControlLabel value={27} control={<Radio />} label="Horror" />
        <FormControlLabel value={35} control={<Radio />} label="Comedy" />
        <FormControlLabel value={18} control={<Radio />} label="Drama" />
        <FormControlLabel value={53} control={<Radio />} label="Thriller" />
        <FormControlLabel value={16} control={<Radio />} label="Animation" />
        <FormControlLabel value={28} control={<Radio />} label="Action" />
      </RadioGroup>
    </FormControl>
  );
}

export default HorizontalRadioGroup;