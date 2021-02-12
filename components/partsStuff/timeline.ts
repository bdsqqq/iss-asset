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
