export default function handler(req, res) {
  const dogs = [
    {
      id: 1,
      slug: "henry",
      title: "Henry",
      content: {
        heading: "Here's Henry",
        text: "His favorite color is yellow.",
        image: {
          src: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
          alt: "Henry likes yellow",
          width: "3042",
          height: "4032",
        },
      },
    },
    {
      id: 2,
      slug: "bufas",
      title: "Bufas",
      content: {
        heading: "Here's Bufas",
        text: "His favorite color is blue.",
        image: {
          src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
          alt: "Bufas likes blue",
          width: "2688",
          height: "3360",
        },
      },
    },
    {
      id: 3,
      slug: "steve",
      title: "Steve",
      content: {
        heading: "Here's Steve",
        text: "His favorite color is yellow.",
        image: {
          src: "https://images.unsplash.com/photo-1625316708582-7c38734be31d",
          alt: "Steve likes yellow",
          width: "2831",
          height: "4243",
        },
      },
    },
    ,
    {
      id: 4,
      slug: "snoopy",
      title: "Snoopy",
      content: {
        heading: "Here's Snoopy",
        text: "His favorite color is hotpink.",
        image: {
          src: "https://images.unsplash.com/photo-1625316708582-7c38734be31d",
          alt: "Snoopy likes hotpink",
          width: "2831",
          height: "4243",
        },
      },
    },
  ];

  if (!req.query.slug) return res.status(200).json(dogs);
  // if (req.query.slug.length < 1) return res.status(204);
  if (req.query.slug.length > 1) return res.status(204).end();

  console.log(req.query.slug[0]);
  if (req.query.slug[0] === "henry") return res.status(200).json(dogs[0]);
  if (req.query.slug[0] === "bufas") return res.status(200).json(dogs[1]);
  if (req.query.slug[0] === "steve") return res.status(200).json(dogs[2]);
  if (req.query.slug[0] === "snoopy") return res.status(200).json(dogs[3]);

  // console.log(req.query);
  return res.status(204).end();
}
