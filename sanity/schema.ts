import { type SchemaTypeDefinition } from 'sanity'
import work from './schemas/work'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [work],
}
