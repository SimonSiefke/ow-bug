import ow from "ow";

const unicorn = (input) => {
  ow(input, ow.string.minLength(5));
};

unicorn(3);
