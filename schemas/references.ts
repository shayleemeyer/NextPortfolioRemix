export default {
  name: "references",
  title: "References",
  type: "document",
  fields: [
    {
      name: "referenceName",
      title: "ReferenceName",
      type: "string",
    },
    {
      name: "referenceImage",
      title: "ReferenceImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "company",
      title: "Company",
      type: "text",
    },
    {
      name: "statement",
      title: "Statement",
      type: "text",
    },
    {
      name: "linkedInLink",
      title: "LinkedInLink",
      type: "string",
    },
  ],
};
