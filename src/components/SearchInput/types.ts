import { ChangeEvent } from 'react';

export interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  googleBooks: boolean;
  onSearchGoogleBooks?: () => void;
}

export interface ContainerStyledProps {
  isFocused: boolean;
  googleBooks: boolean;
}
