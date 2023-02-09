export interface ToastMessageProps {
  message: {
    id: number;
    text: string;
    type: 'default' | 'error' | 'success';
  }
  onRemoveMessage: (id: number) => void;
}

export interface ContainerStyledProps {
  type: string;
}
