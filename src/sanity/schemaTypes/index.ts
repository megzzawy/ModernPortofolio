import { type SchemaTypeDefinition } from 'sanity'

import { pageInfo } from './pageInfo'
import experience from './experience'
import skill from './skill'
import project from './project'
import social from './social'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ pageInfo, experience, skill, project, social],
}
