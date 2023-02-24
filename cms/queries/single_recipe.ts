export default gql`
query MyQuery($slug: String) {
  recipe(filter: {slug: {eq: $slug}}) {
    content
    conseil
    image {
      alt
      url
    }
    titre
    intRT
    ingredient
  }
}`
