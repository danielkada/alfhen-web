import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  IconComponent: IconType;
  isPassword?: boolean;
  error?: boolean | null;
}

export interface ContainerStyledProps {
  isFocused: boolean;
  error?: boolean | null;
}
