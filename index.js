const RandExp = require("randexp");
const fs = require("fs");

(async () => {
  const componentAmount = 5;
  let list = "";
  for (let i = 0; i < componentAmount; i++) {
    const Component = new RandExp(/function [A-Z]+ { \n return \( <> [a-z]+ <\/> \) \n }\n /).gen();
    list +=Component;
  }
  await fs.writeFile("componentsList.txt", list, e => {
    if (e) throw new Error("something went wrong");
  });
})();
