import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    Category: "Luxury",
    description:
      "Costly product... Loren ipsum...",
  },
  {
    _id: uuid(),
    Category:"Casual",
    description:
      "You can wear it daily.. Loren ipsum.... Loren ipsum...",
  },
  {
    _id: uuid(),
    Category: "Smartwatch",
    description:
      "For modern time and daily needs... ",
  },
];
