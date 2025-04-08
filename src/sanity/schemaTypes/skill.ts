import { Rule } from "sanity";


export default{
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "title of the skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of the project",
      validation: (Rule: Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    
  ],
}
