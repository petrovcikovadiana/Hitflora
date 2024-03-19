const categoriesData = [
  {
    name: "rostliny",
    icon: `${process.env.PUBLIC_URL}/assets/svg/plants.svg`,
    img: `${process.env.PUBLIC_URL}/assets/avif/rostliny.avif`,
    content: [
      {
        item: "okrasné dřeviny",
        subcategories: ["stálezelené", "listnaté", "jehličnaté"],
      },
      "trvalky",
      "okrasné traviny",
      "letničky",
      "popínavé rostliny",

      {
        item: "ovocné dřeviny",
        subcategories: [
          "jabloně",
          "hrušně",
          "třešně",
          "višně",
          "švestky",
          "broskvoně",
          "meruňky",
          "ořešáky",
        ],
      },
      {
        item: "drobné ovoce",
        subcategories: [
          "rybíz",
          "angrešt",
          "jahody",
          "maliny",
          "ostružiny",
          "borůvky",
          "josta",
          "aronie",
          "rakytník",
        ],
      },
      "vinná réva",
      "bylinky",
      "sadba zeleniny",
    ],
  },
  {
    name: "substráty",
    icon: `${process.env.PUBLIC_URL}/assets/svg/fertilizers.svg`,
    img: `${process.env.PUBLIC_URL}/assets/avif/substraty.avif`,
    content: [
      {
        item: "zahradnické substráty včetně speciálních",
        subcategories: [
          "pro balkonové rostliny",
          "pro růže",
          "výsevní substráty",
          "pro řízkování",
          "pro bylinky, orchideje... ",
        ],
      },
      "rašelina",
      "zahradnický kompost",
    ],
  },
  {
    name: "hnojiva",
    icon: `${process.env.PUBLIC_URL}/assets/svg/substrates.svg`,
    img: `${process.env.PUBLIC_URL}/assets/avif/hnojiva.avif`,

    content: [
      {
        item: "anorganická ",
        subcategories: ["veškeré déle i krátce působící", "prášková a kapalná"],
      },
      {
        item: "organická ",
        subcategories: [
          "granulovaná hnojiva",
          "kravský",
          "koňský",
          "slepičí",
          "králičí",
        ],
      },
    ],
  },
  {
    name: "postřiky",
    icon: `${process.env.PUBLIC_URL}/assets/svg/sprays.svg`,
    img: `${process.env.PUBLIC_URL}/assets/avif/postriky.avif`,

    content: [
      {
        item: "veškeré pesticidy ",
        subcategories: [
          "insekticidy (proti hmyzu)",
          "fungicidy (proti houbám)",
          "herbicidy (proti plísním)",
          "přírodní látky k ochraně rostlin",
          "sety zdravé jablko, zdravé rajče,...",
        ],
      },
    ],
  },
  {
    name: "truhlíky",
    icon: `${process.env.PUBLIC_URL}/assets/svg/planters.svg`,
    img: `${process.env.PUBLIC_URL}/assets/avif/truhliky.avif`,

    content: [
      "obyčejné",

      {
        item: "samozavlažovací ",
        subcategories: ["v různých velikostech a barvách"],
      },
    ],
  },
  {
    name: "Mulčovací kůra a štěpky",
    icon: `${process.env.PUBLIC_URL}/assets/svg/planters.svg`,
    img: `${process.env.PUBLIC_URL}/assets/avif/mulcovaci.avif`,

    content: [
      "mulčovací kůra 50 - 70l",
      "mulčovací kůra pro růže",
      "mulčovací kůra borovicová",
      "barevné štěpky",
      "piniová dekorační kůra",
    ],
  },
];

export default categoriesData;
