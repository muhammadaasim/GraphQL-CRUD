const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Student {
    title: String
    author: String
  }
  type Query {
    student: [Student]
  }
`

const Student = [
  {
    name: 'Mohsin',
    class: 'BS CS'
  },
  {
    name: 'ibrar',
    class: 'BS IT'
  }
]
const resolvers = {
  Query: {
    student: () => Student
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
