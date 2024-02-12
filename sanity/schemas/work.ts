export default {
  name: "project",
  type: "document",
  title: "My Projects",
  fields: [
    {
      name: "id",
      type: "slug",
      title: "Generated ID",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200),
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) =>
        Rule.required()
          .max(50)
          .warning("Shorter titles are usually better"),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule: any) =>
        Rule.required()
          .max(150)
          .warning("Shorter descriptions are usually better"),
    },
    {
      name: "body",
      type: "text",
      title: "Content",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "url",
      type: "string",
      title: "External URL",
    },
  ],
}
