const AddressBook = require("../../src/js/AddressBook");

describe("AddressBook", () => {
  subject(() => new AddressBook());

  it("is expected to be an object", () => {
    expect($subject).to.be.an("object");
  });

  it("is expected to be an instance of an AddressBokk class", () => {
    expect($subject).to.be.an.instanceOf(AddressBook);
  });
});