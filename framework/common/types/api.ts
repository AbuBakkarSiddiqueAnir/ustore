export type apiFetcherOptions = {
  url: string;
  query: string;
};

export type apiFetcherResults<T> = {
  data: T;
};

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: apiFetcherOptions): Promise<apiFetcherResults<T>>;
}
