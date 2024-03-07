const categoriesData = [
  {
    name: "Rostliny",
    icon: "assets/plants.svg",
    img: "assets/water.jpg",
    content: [
      "trvalky",
      "letničky",
      "okrasné trávy",

      {
        item: "okrasné rostliny",
        subcategories: ["listnaté", "jehličnaté"],
      },
      {
        item: "ovocné stromky",
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
      "sadzba zeleniny",
    ],
  },
  {
    name: "Substráty",
    icon: "assets/substrates.svg",
    img: "assets/water.jpg",
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
      "mulčovací kůra",
      "štěpky",
    ],
  },
  {
    name: "Hnojiva",
    icon: "assets/fertilizers.svg",
    img: "assets/water.jpg",

    content: [
      {
        item: "anorganická ",
        subcategories: ["veškeré déle i krátce působící", "prášková a kapalná"],
      },
      {
        item: "organická ",
        subcategories: [
          "granulovaná hnojiva (kravský, koňský, slepičí, králičí hnůj,...) ",
        ],
      },
    ],
  },
  {
    name: "Postřiky",
    icon: "assets/sprays.svg",
    img: "assets/water.jpg",

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
    name: "Truhlíky",
    icon: "assets/planters.svg",
    img: "assets/water.jpg",

    content: [
      "obyčejné",

      {
        item: "samozavlažovací ",
        subcategories: ["v různých velikostech a barvách"],
      },
    ],
  },
];

export default categoriesData;
