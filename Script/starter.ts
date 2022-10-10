const Users = [
  {
    userID: "1",
    name: "Joao",
    companyID: "3"
  },
  {
    userID: "2",
    name: "Lucas",
    companyID: "1"
  },
  {
    userID: "3",
    name: "Camilo",
    companyID: "2"
  },
  {
    userID: "4",
    name: "Gabriel",
    companyID: "3"
  }
];

const Companies = [
  {
    _id: "1",
    name: "Empresa 1"
  },
  {
    _id: "2",
    name: "Empresa 2"
  },
  {
    _id: "3",
    name: "Empresa 3"
  }
];

const Stations = [
  {
    stationID: "1",
    name: "Shopping",
    ltg: -1,
    lng: -2,
    companyID: "1"
  },
  {
    stationID: "2",
    name: "Hotel",
    ltg: -1,
    lng: -2,
    companyID: "1"
  },
  {
    stationID: "3",
    name: "BR 115",
    ltg: -1,
    lng: -2,
    companyID: "2"
  },
  {
    stationID: "2",
    name: "Parque",
    ltg: -1,
    lng: -2,
    companyID: "3"
  }
];

export { Users, Stations, Companies };
