import { StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryButton from "./components/CategoryButton";
import MovieCard from "./components/MovieCard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <SearchBar />

      <View style={styles.containerCategory}>
        <CategoryButton title="Todos" selected={true} />
        <CategoryButton title="Ação" selected={false} />
        <CategoryButton title="Animação" selected={false} />
        <CategoryButton title="Romance" selected={false} />
      </View>

      <View style={styles.sectionMovie}>
        <View style={styles.sectionTitleRow}>
          <View style={styles.accentBar}></View>
          <Text style={styles.sectionTitle}>Filmes em destaque</Text>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.sectionCount}>6 filmes</Text>
        </View>
      </View>

      <MovieCard 
        image={require("./assets/movies/vingadores-ultimato.jpg")}
        title="Vingadores: Ultimato" 
        category="Ação"
        rating={4.9}
        favorite={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0d14",
    paddingTop: 40,
  },
  containerCategory: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 20,
    marginTop: 15,
  },
  sectionMovie: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBlock: 18,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  accentBar: {
    height: 18,
    width: 4,
    backgroundColor: "#ff3336",
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 0.3,
  },
  countBadge: {
    backgroundColor: "#161a28",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#262d42",
    borderRadius: 12,
  },
  sectionCount: {
    fontSize: 15,
    fontWeight: "700",
    color: "#94a3b4",
  },
});
