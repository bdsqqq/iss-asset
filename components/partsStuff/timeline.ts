interface Year {
  yearNumber: string;
  months: {
    name: string;
    longName: string;
    parts: {
      name: string;
      nationality?: string;
      role?: string;
      description: string;
    }[];
  }[];
}

const timeline: Year[] = [
  {
    yearNumber: "1998",
    months: [
      {
        name: "Nov",
        longName: "November",
        parts: [
          {
            name: "Zarya",
            nationality: "Russian",
            role: "Functional Cargo Block",
            description:
              "It provides power from the solar arrays and also propulsion for when the station needs to move. There's three docking ports in the front and one in the back, they will be used to attach other modules.",
          },
        ],
      },
      {
        name: "Dec",
        longName: "December",
        parts: [
          {
            name: "Unity",
            nationality: "American",
            role: "Node 1",
            description:
              "it has six docking ports to connect to other modules and it connects to Zarya using a special piece called PMA(pressurized Mating Adapter). Unity was launched with PMA-1 and PMA-2.",
          },
        ],
      },
    ],
  },
  {
    yearNumber: "2000",
    months: [
      {
        name: "Jul",
        longName: "July",
        parts: [
          {
            name: "Zvezda",
            nationality: "Russian",
            role: "Service module",
            description:
              "It provides life support systems and it's considered the functional center of the russian orbital segment. it also has three docking ports in the front and one in the back.",
          },
        ],
      },
      {
        name: "Oct",
        longName: "October",
        parts: [
          {
            name: "Z1 Truss",
            nationality: "American",
            description:
              "this holds equipment for the station. It's not part of the main truss but it provided a temporary mounting place.",
          },
          {
            name: "PMA-3",
            nationality: "American",
            description:
              "PMA was then added to the botton side of unity. It's aways good to have one of these around.",
          },
        ],
      },
    ],
  },
];

export default timeline;

/* Part
name: "",
nationality: "",
role: "",
description:"",
*/
