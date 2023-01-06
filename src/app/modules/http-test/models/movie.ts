export interface Movie {
  id?: string;
  title: string;
  year: string;
  category: string;
  director: string;
  plot: string;
  poster: string | null;
  country: string;
  imdbRating: string;
}