export interface GoogleBookProps {
  id: string;
  imageURL: string | null;
  authors: Array<string>;
  description: string;
  numberOfPages: number;
  publishedDate: string;
  title: string;
  subtitle: string | null;
}

export interface ContainerStyledProps {
  isLoading: boolean;
}
