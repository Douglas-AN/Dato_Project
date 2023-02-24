export default gql`
query single_recipe($slug: SlugFilter = {}) {
    recipe(filter: {slug: $slug}) {
      image {
        url
      }
      ingredient
      intRT
      slug
      titre
      content
      conseil
    }
  }
`