import { Movie } from "../types/Movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Vingadores: Ultimato",
    category: "Ação",
    rating: 4.9,
    description:
      "Após os eventos devastadores de Guerra Infinita, os Vingadores restantes se reúnem mais uma vez para tentar reverter as ações de Thanos e restaurar a ordem no universo.",
    image: require("../assets/movies/vingadores-ultimato.jpg"),
  },
  {
    id: 2,
    title: "Homem-Aranha: Um Novo Dia",
    category: "Ação",
    rating: 4.8,
    description:
      "Peter Parker enfrenta novos vilões e desafios emocionantes enquanto busca equilibrar sua vida pessoal com a responsabilidade de ser o herói da vizinhança.",
    image: require("../assets/movies/homem-aranha-um-novo-dia.jpg"),
  },
  {
    id: 3,
    title: "Monstros S.A.",
    category: "Animação",
    rating: 4.9,
    description:
      "Sulley e Mike são os melhores assustadores da fábrica de sustos, até que uma garotinha humana chamada Boo entra no mundo dos monstros e muda tudo.",
    image: require("../assets/movies/monstro-sa.jpg"),
  },
  {
    id: 4,
    title: "Até o Último Homem",
    category: "Drama",
    rating: 4.8,
    description:
      "A impressionante história real de Desmond Doss, um socorrista do exército que na Segunda Guerra Mundial se recusou a pegar em armas e salvou dezenas de vidas.",
    image: require("../assets/movies/ate-ultimo-homem.jpg"),
  },
  {
    id: 5,
    title: "Titanic",
    category: "Romance",
    rating: 4.9,
    description:
      "Um jovem artista e uma jovem aristocrata se apaixonam a bordo do luxuoso e inesquecível navio transatlântico RMS Titanic.",
    image: require("../assets/movies/titanic.jpg"),
  },
  {
    id: 6,
    title: "Para Todos os Garotos que Já Amei",
    category: "Romance",
    rating: 4.5,
    description:
      "A vida amorosa de Lara Jean sai do controle quando suas cartas secretas de amor são misteriosamente enviadas para todos os garotos por quem já foi apaixonada.",
    image: require("../assets/movies/para-todos-garotos-amei.jpg"),
  },
]