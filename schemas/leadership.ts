export default {
  name: "leadership",
  title: "Leadership",
  type: "document",
  fields: [
    {
      name: "positionTitle",
      title: "PositionTitle",
      type: "string",
    },
    {
      name: "orgImage",
      title: "OrgImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "organization",
      title: "Organization",
      type: "text",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },

    {
      name: "leadershipPoints",
      title: "LeadershipPoints",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
