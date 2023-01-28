export interface ReadingsProps {
  readings: {
    book: {
      id: string;
      imageURL: string | null;
      title: string;
      subtitle: string | null;
      publishedDate: string;
      numberOfPages: number;
    };
    id: string;
    book_id: string;
    user_id: string;
    created_at: string;
    current_page: string;
  }[]
}

export interface ReadingProps {
    book: {
      id: string;
      imageURL: string | null;
      title: string;
      subtitle: string | null;
      publishedDate: string;
      numberOfPages: number;
    };
    id: string;
    book_id: string;
    user_id: string;
    created_at: string;
    current_page: string;
}
