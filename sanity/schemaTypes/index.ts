import { type SchemaTypeDefinition } from 'sanity'
import {blogPostType } from './postTypes'
import { authorType } from './authorTypes'
import { categoryType } from './categoryTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogPostType,authorType,categoryType
  ],
}
