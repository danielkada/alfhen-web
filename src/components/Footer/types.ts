import { SelectedProps } from '../../pages/Dashboard/types';

export interface FooterProps {
  selected: string;
  onModalVisibility: () => void;
  onSelectedChange: ({ page }: SelectedProps) => void;
}

export interface ContainerStyledProps {
  selected: string;
}
