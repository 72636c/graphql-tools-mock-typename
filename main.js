import { mockServer } from '@graphql-tools/mock'

const schema = `
  type Query {
    flying: Flying
  }

  type Ability {
    name: String!
  }

  interface Flying {
    ability: Ability!
  }

  type Bird implements Flying {
    ability: Ability!
  }
`
const mocks = {
  Flying: () => ({
    __typename: 'Bird',
  }),
};

const server = mockServer(schema, mocks);

const query = `{
  flying {
    ability {
      name
    }
  }
}`;

const res = await server.query(query);

console.log(JSON.stringify(res, null, 2));
