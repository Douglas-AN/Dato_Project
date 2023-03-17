export default gql`
query Recipes {
  allRecipes {
    slug
    image {
      url
    }
    id
    titre
    content
  }
}
`