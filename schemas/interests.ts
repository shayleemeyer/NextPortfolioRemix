export default {
  name: "interests",
  title: "Interests",
  type: "document",
  fields: [
    {
      name: "interestTitle",
      title: "ReferenceName",
      type: "string",
    },
    {
      name: "interestsImage",
      title: "InterestsImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "interestId",
      title: "InterestId",
      type: "string",
    },
  ],
};
