export interface MessageProps {
  id: number;
  type: 'default' | 'error' | 'success';
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EventProps extends Event {
  detail: string;
}
