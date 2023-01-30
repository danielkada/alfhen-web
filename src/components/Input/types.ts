import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  IconComponent: IconType;
  isPassword?: boolean;
}

export interface ContainerStyledProps {
  isFocused: boolean;
}
