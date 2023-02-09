export interface MessageProps {
  id: number;
  type: 'default' | 'error' | 'success';
  text: string;
  duration?: number;
}
