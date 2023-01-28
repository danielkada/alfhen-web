import { ChangeEvent } from 'react';

export interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ContainerStyledProps {
  isFocused: boolean;
}
