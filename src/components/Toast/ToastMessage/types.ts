export interface ToastMessageProps {
  message: {
    id: number;
    text: string;
    type: 'default' | 'error' | 'success';
    duration?: number;
  }
  onRemoveMessage: (id: number) => void;
}

export interface ContainerStyledProps {
  type: string;
}
