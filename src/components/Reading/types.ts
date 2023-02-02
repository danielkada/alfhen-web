export interface ReadingProps {
  id: string;
  current_page: string;
  book: {
    title: string;
    imageURL: string | null;
    numberOfPages: number;
  }
}
