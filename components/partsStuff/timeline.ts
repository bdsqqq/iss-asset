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
              "it has six docking ports to connect to other modules and it connects to Zarya using a special piece called PMA (pressurized Mating Adapter). Unity was launched with PMA-1 and PMA-2.",
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
      {
        name: "Nov",
        longName: "November",
        parts: [
          {
            name: "P6 Truss",
            nationality: "American",
            description:
              "The first part of the Integrated truss structure was temporarely mounted to the top of the z1 truss. This includes the first solar array wings, which provided the much needed power to the growing station. Radiator pannels were also added help remove excess heat from the station.",
          },
          {
            name: "Humans!",
            description:
              "At this point, there was enough functionality that astronauts can start living aboard the station, instead of just temporary visits. From November 2000 until now, there has been a continuous human presence on board the station.",
          },
        ],
      },
    ],
  },
  {
    yearNumber: "2001",
    months: [
      {
        name: "Feb",
        longName: "February",
        parts: [
          {
            name: "Destiny",
            nationality: "American",
            role: "US Laboratory",
            description:
              "This is a place where a lot of scientific research happens.",
          },
        ],
      },
      {
        name: "Mar",
        longName: "March",
        parts: [
          {
            name: "ESP 1",
            nationality: "American",
            role: "External Stowage Platform",
            description:
              "This is a place to store spare parts for the station.",
          },
        ],
      },
      {
        name: "Apr",
        longName: "April",
        parts: [
          {
            name: "Canadarm2",
            nationality: "Canadian",
            description:
              "It's a robotic arm that can help around the outside of the station. It's usually controlled by an astronaut who's on the inside of the station. Either end of the arm can be attached to one of the grapple fixtures that you'll find on various modules.",
          },
        ],
      },
      {
        name: "Jul",
        longName: "July",
        parts: [
          {
            name: "Quest",
            role: "joint airlock",
            nationality: "American",
            description:
              "allows the astronauts to safely step outside for a few hours to perform an EVA, also known as a spacewalk.",
          },
        ],
      },
      {
        name: "Sep",
        longName: "September",
        parts: [
          {
            name: "Pirs",
            nationality: "Russian",
            role: "Docking Compartment 1 (DC-1)",
            description:
              "It can be used as an airlock for spacewalks or as a docking port to allow visiting spacecraft to attach to the station.",
          },
        ],
      },
    ],
  },
  {
    yearNumber: "2002",
    months: [
      {
        name: "Apr",
        longName: "April",
        parts: [
          {
            name: "S0 Truss",
            nationality: "American",
            role: "",
            description:
              "It's time to start building the integrated truss structure. the first piece get's attached to the top of the Destiny module.",
          },
        ],
      },
      {
        name: "Jun",
        longName: "June",
        parts: [
          {
            name: "MBS",
            nationality: "Canadian",
            role: "Mobile remote servicer Base System",
            description:
              "This platform can move along the truss. It's especially useful when the Canadarm2 is attached.",
          },
        ],
      },
      {
        name: "Nov",
        longName: "November",
        parts: [
          {
            name: "S1 Truss and P1 Truss",
            nationality: "American",
            role: "",
            description:
              "The S stands for starboard and the P stands for port. This way, you know on which side of the station it's on. Each side has room for three more radiator panels, but for now, only the center ones will be installed.",
          },
        ],
      },
    ],
  },
  {
    yearNumber: "2005",
    months: [
      {
        name: "Jul",
        longName: "July",
        parts: [
          {
            name: "ESP-2",
            nationality: "American",
            role: "External Stowage Platform",
            description:
              "This is a place to store spare parts for the station.",
          },
        ],
      },
    ],
  },
  {
    yearNumber: "2006",
    months: [
      {
        name: "Sep",
        longName: "September",
        parts: [
          {
            name: "P3, P4 and P5 Truss",
            nationality: "American",
            role: "",
            description: "with solar arrays and another radiator panel.",
          },
        ],
      },
    ],
  },
  {
    yearNumber: "2007",
    months: [
      {
        name: "Aug",
        longName: "August",
        parts: [
          {
            name: "S3, S4 and S5 Truss",
            nationality: "American",
            role: "",
            description: "with solar arrays and another radiator panel.",
          },
          {
            name: "ESP-3",
            nationality: "American",
            role: "External Stowage Platform",
            description:
              "This is a place to store spare parts for the station.",
          },
        ],
      },
      {
        name: "Oct",
        longName: "October",
        parts: [
          {
            name: "P6 Truss",
            nationality: "American",
            role: "",
            description:
              "This was not an addition, but ratter a move. The p6 Truss was resting on top of the z1 truss since 2000 and now it could finally be moved to its final resting place.",
          },
          {
            name: "Radiator panels",
            nationality: "",
            role: "",
            description:
              "It's time to add a few radiator pannels to the S1 and P1 Truss.",
          },
          {
            name: "Harmony ",
            nationality: "American",
            role: "Node 2",
            description:
              "has six docking ports which will allow for further expansion of the station.",
          },
        ],
      },
    ],
  },
  {
    yearNumber: "2008",
    months: [
      {
        name: "Feb ",
        longName: "February",
        parts: [
          {
            name: "Columbus ",
            nationality: "European",
            role: "Laboratory",
            description:
              "Is the largest single contribution to the ISS made by the European Space Agency (ESA).",
          },
        ],
      },
      {
        name: "Mar",
        longName: "March",
        parts: [
          {
            name: "Dextre",
            nationality: "Canadian",
            role: "Special Purpose Dexterous Manipulator",
            description:
              "It can attach to the same grapple fixtures that are used by the Canadarm2. In fact, Dextre is most useful when it's attached to the end of the Canadarm2.",
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
