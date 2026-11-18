import { ImageSourcePropType } from "react-native"

export type Movie = {
  id: number;
  image: ImageSourcePropType;
  title: string;
  category: string;
  rating: number;
  description: string;
};