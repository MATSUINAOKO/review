const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const setUpServer = require("../server");

const server = setUpServer();
let request;
describe("solo_MVP test", () => {
  beforeEach(() => {
    request = chai.request(server);
  });

  it("全リストを返してください", () => {
    request.get("/api/v1/todo").end(function (err, res) {
      expect(res).to.have.status(200);
      // expect(JSON.parse(res.text).length).to.equal(10);
    });
  });

  //   it("全リストを返せない場合、statuscode400とerr Messageを返してください", () => {
  //     request.get("/api/foo").end(function (err, res) {
  //       expect(res).to.have.status(404);
  //     });
  //   });
});
