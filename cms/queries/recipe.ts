export default gql`
query Recicpe {
  allRecipes {
    blogSlug
    conseil
    content
    id
    image {
      url
    }
    titre
    ingredient
    intRT
  }
}
`