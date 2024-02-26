export default {
  name: "project",
  type: "document",
  title: "My Projects",
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Generated ID",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "date",
      type: "date",
      title: "Project Date",
      validation: (Rule: any) => Rule.required()
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) =>
        Rule.required().max(50).warning("Shorter titles are usually better"),
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
      name: "cover",
      type: "image",
      title: "Cover",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tags",
      type: "array",
      title: "Include Tags",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.unique(),
    },
    {
      name: "body",
      type: "array",
      title: "Content",
      valdiation: (Rule: any) => Rule.required(),
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        {
          type: "image",
        },
      ],
    },
    {
      name: "url",
      type: "string",
      title: "External URL",
    },
  ],
}
