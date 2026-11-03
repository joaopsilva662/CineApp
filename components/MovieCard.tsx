import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Rating from "./Rating";
import { Ionicons } from "@expo/vector-icons";

export type MovieCardProps = {
  image: ImageSourcePropType;
  title: string;
  category: string;
  rating: number;
  favorite: boolean;
  onFavorite: () => void;
  onDatails: () => void;
};

export default function MovieCard({
  image,
  title,
  category,
  rating,
  favorite,
  onFavorite,
  onDatails,
}: MovieCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover"></Image>

      <View style={{ padding: 16 }}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <View style={styles.sectionCategoryRating}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <Rating value={rating} />
        </View>

        <View>
          <Pressable style={styles.detailsButton} onPress={onDatails}>
            <Text style={styles.detailsButtonText}>Ver detalhes</Text>
          </Pressable>

          <Pressable>
            <Ionicons
              name={favorite ? "heart" : "heart-outline"}
              size={20}
              color={favorite ? "#ff3366" : "#94a3b8"}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#242b40",
    borderRadius: 18,
    backgroundColor: "#141724",
    overflow: "hidden",
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 195,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
    height: 24,
  },
  sectionCategoryRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBlock: 15,
  },
  categoryBadge: {
    backgroundColor: "#1e2437",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#2c344e",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#94a3b8",
  },
  detailsButton: {
    flex: 1,
    height: 42,
    backgroundColor: "#1e2437",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2d3650",
    justifyContent: "center",
    alignItems: "center"
  },
    detailsButtonText: {
      fontSize: 14,
      fontWeight: "700",
      color: "#fff"
    }
});
