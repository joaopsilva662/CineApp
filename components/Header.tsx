import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <View style={styles.brandGroup}>
          <View style={styles.logoBadge}>
            <Ionicons name="film" size={22} color="#FF3366"></Ionicons>
          </View>

          <View>
            <Text style={styles.brandTitle}>
              Cine<Text style={styles.brandHighlight}>App</Text>
            </Text>
            <Text style={styles.brandSubtitle}>Catálogo & Streaming</Text>
          </View>
        </View>

        <View style={styles.userBadge}>
          <Ionicons name="sparkles" size={16} color="#ffb800" />
          <Text style={styles.userBadgeText}>Em alta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandGroup: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  logoBadge: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255, 51,102,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255, 51,102,0.25)",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFF",
    letterSpacing: 0.5,
  },
  brandHighlight: {
    color: "#FF3366",
  },
  brandSubtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#94A3B8",
    marginTop: 2,
  },
  userBadge: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    backgroundColor: "rgba(255,184,0,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,184,0,0.12)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  userBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#ffb800",
  },
});