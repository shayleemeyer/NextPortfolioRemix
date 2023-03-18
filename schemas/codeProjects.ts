export default {
  name: "codeProjects",
  title: "CodeProjects",
  type: "document",
  fields: [
    {
      name: "language",
      title: "Language",
      description: "Language of project",
      type: "string",
    },

    {
      name: "linkToGit",
      title: "LinkToGit",
      type: "string",
    },
    {
      name: "projImage",
      title: "ProjImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
