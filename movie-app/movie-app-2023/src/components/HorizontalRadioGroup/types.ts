import React from 'react';
export interface HorizontalRadioProps {
  value: number,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
