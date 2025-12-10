export type TopBarMenuItem = {
  nameKey: string;
  link: string;
  icon?: string;
  subMenu?: TopBarMenuItem[];
};

export const topBarItems: TopBarMenuItem[] = [
  {
    nameKey: "bodyarmor",
    link: "/products/body-armor",
    subMenu: [
      {
        nameKey: "bulletproof-vest",
        link: "/products/body-armor/bulletproof-vest",
        icon: "/assets/topbar/ico-bulletproof.svg",
      },
      {
        nameKey: "stabproof-vest",
        link: "/products/body-armor/stabproof-vest",
        icon: "/assets/topbar/ico-stabproof.svg",
      },
      {
        nameKey: "plate",
        link: "/products/body-armor/plate",
        icon: "/assets/topbar/ico-plate.svg",
      },
    ],
  },
  {
    nameKey: "thermal",
    link: "/products/thermal",
    subMenu: [
      {
        nameKey: "garment",
        link: "/products/thermal/garment",
        icon: "/assets/topbar/ico-garment.svg",
      },
      {
        nameKey: "glove",
        link: "/products/thermal/glove",
        icon: "/assets/topbar/ico-glove.svg",
      },
      {
        nameKey: "hood",
        link: "/products/thermal/hood",
        icon: "/assets/topbar/ico-hood.svg",
      },
    ],
  },
  {
    nameKey: "equipment",
    link: "/products/equipment",
    subMenu: [
      {
        nameKey: "ev-tank",
        link: "/products/equipment/ev-tank",
        icon: "/assets/topbar/ico-ev-tank.svg",
      },
      {
        nameKey: "washer",
        link: "/products/equipment/washer",
        icon: "/assets/topbar/ico-washer.svg",
      },
    ],
  },
];