const main = artifacts.require("main");

require("chai").use(require("chai-as-promised")).should();

contract("main", ([deployer, uploader]) => {
  let main;
  before(async () => {
    main = await main.deployed();
  });
  describe("deployment", async () => {
    it("deploys successfully", async () => {});
  });
});
