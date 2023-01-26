import { ChangeEvent } from 'react';

export interface HeaderProps {
  title: string;
  searchTerm: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
