export interface AxiosError {
  name: string;
  response: {
    data: {
      error: string;
    }
  }
}

export interface Error {
  name: string;
  error: string;
}
