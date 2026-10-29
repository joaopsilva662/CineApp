import { Pressable } from "react-native";

type CategoryButtonProps = {
  title: string;
  selected: boolean;
  onPress: () => void;
}

export default function CategoryButton({
  title,
  selected,
  onPress
}: CategoryButtonProps) {
  return (
    <Pressable onPress={onPress}>

    </Pressable>
  );
}