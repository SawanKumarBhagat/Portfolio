import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the skill",
      type: "string"
    }),
    defineField({
        name: "progress",
        title: "Progress",
        description: "Progress of the skill from 0 to 100%",
        type: "number",
        validation: (rule) => rule.min(0).max(100),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    }),
  ],
})
