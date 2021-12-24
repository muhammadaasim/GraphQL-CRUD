import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    class: String
  }
  type Query {
    student: [Student]
  } 
`

const student = [
  {
    id: 1,
    name: 'Mohsin',
    class: 'BS CS'
  },
  {
    id: 2,
    name: 'ibrar',
    class: 'BS IT'
  }
]
const resolvers = {
  Query: {
    student: () => student
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(` Server ready at ur:  ${url}`)
})
