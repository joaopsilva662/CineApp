import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  onClear
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#94a3b8"></Ionicons>

      <TextInput
        style={styles.input}
        placeholder="Buscar filme por titulo..."
        placeholderTextColor="#64748b"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {value?.length > 0 && onClear && (
        <Pressable onPress={onClear} hitSlop={10}>
          <Ionicons name="close-circle" size={18} color="#94a4b8"></IonIcons>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: "#161a28",
    paddingHorizontal: 16,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#262d42"
  },
  input: {
    flex: 1,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 500
  }
});