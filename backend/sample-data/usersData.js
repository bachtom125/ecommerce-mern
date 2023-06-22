import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Bach",
    email: "bachtom@gmail.com",
    password: bcrypt.hashSync("5588", 10),
    isAdmin: true,
  },
  {
    name: "John Wick",
    email: "john@gmail.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Tom Cruise",
    email: "tommy@gmail.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Henry Carvil",
    email: "henry@gmail.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
