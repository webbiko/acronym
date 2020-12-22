const request = require("supertest");
const app = require("../../../server/server");

const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(app.axios);

const acronymUtils = require("../../../utils/acronym.utils");
const constantsUtils = require("../../../utils/constants.utils");

const pretty = require("js-object-pretty-print").pretty;

mock
  .onGet(
    `http://localhost:${process.env.TOKEN_SERVICE_PORT}/api/v0/auth/validateUserStatus`
  )
  .reply(200, {
    authorized: true,
  });

const Acronym = require("../../../../models/Acronym");

beforeEach(async function (done) {
  await Acronym.deleteMany({}, {});
  await Acronym.create(acronymUtils.DEFAULT_ACRONYM_TEST);
  done();
});

describe("GET /api/v0/acronyms", () => {
  test("Test that api returns success", async () => {
    const response = await request(app).get("/api/v0/acronyms");
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
  });
  test("Test that api returns success and data matches", async () => {
    const response = await request(app).get("/api/v0/acronyms");
    const acronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(acronyms)).toBeTruthy();
    expect(acronyms.length).toBe(1);
    const acronym = acronyms[0];
    expect(acronym.acronym).toBe(acronymUtils.DEFAULT_ACRONYM_TEST.acronym);
    expect(acronym.definition).toBe(
      acronymUtils.DEFAULT_ACRONYM_TEST.definition
    );
  });
  test("Test that api returns success pagination is working when first page is passed and limit is 10", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = 0;
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
  test("Test that api returns success pagination is working when second page is passed and limit is 10", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = 1;
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    var index = 10;
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[index].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[index++].definition);
    }
  });
  test("Test that api returns success pagination is working when a negative page number is passed and limit is 10", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = -1;
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    var index = 10;
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[index].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[index++].definition);
    }
  });
  test("Test that api returns success pagination is working when a negative limit number is passed", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = -10;
    const page = 1;
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(Math.abs(limit));
    var index = 10;
    for (i = 0; i < Math.abs(limit); i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[index].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[index++].definition);
    }
  });
  test("Test that api returns success pagination is working when a string is passed as limit", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = 1;
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }

    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=g2i`
    );

    console.log(response.body);
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    var index = 10;
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[index].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[index++].definition);
    }
  });

  test("Test that api returns success pagination is working when a string is passed as page", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = "g2i";
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    // values returned are from first page
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
  test("Test that api returns success pagination is working when an empty string is passed as limit", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = "";
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
  test("Test that api returns success pagination is working when an empty string is passed as page", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = "";
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    // values returned are from first page
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
  test("Test that api returns success pagination is working when an undefined string is passed as limit", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = undefined;
    const page = "";
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(10);
    for (i = 0; i < 10; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
  test("Test that api returns success pagination is working when an undefined string is passed as page", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = undefined;
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    // values returned are from first page
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
  test("Test that api returns success pagination is working when a null string is passed as limit", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = null;
    const page = "";
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(10);
    for (i = 0; i < 10; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
  test("Test that api returns success pagination is working when a null string is passed as page", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = 10;
    const page = null;
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(limit);
    // values returned are from first page
    for (i = 0; i < limit; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
  test("Test that api returns success pagination is working when an empty string is passed as page and limit", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 20;
    const limit = "";
    const page = "";
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }
    expect(acronyms.length === numberOfAcronyms);
    const response = await request(app).get(
      `/api/v0/acronyms?from=${page}&limit=${limit}`
    );
    const loadedAcronyms = response.body.results;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(Array.isArray(loadedAcronyms)).toBeTruthy();
    expect(loadedAcronyms.length).toBe(10);
    // values returned are from first page
    for (i = 0; i < 10; i++) {
      expect(loadedAcronyms[i].acronym).toBe(acronyms[i].acronym);
      expect(loadedAcronyms[i].definition).toBe(acronyms[i].definition);
    }
  });
    test("Test that api returns proper result when seach filter is passed", async () => {
      // start a clean table for this test
      await Acronym.deleteMany({}, {});
      const numberOfAcronyms = 20;
      const acronyms = [];
      for (var i = 0; i < numberOfAcronyms; i++) {
        const acronym = await Acronym.create({
          id: null,
          acronym: `g21 - ${i}`,
          definition: `Good News to the Internet - ${i}!`,
        });
        acronyms[i] = acronym;
      }
      // adding 2 extras acronyms to be filtered
      const filteredAcronym = await Acronym.create({
        id: null,
        acronym: `webbikog2i - 100`,
        definition: `Good News to the Internet filtered by query - 100!`,
      });
      const filteredAcronym2 = await Acronym.create({
        id: null,
        acronym: `webbikog2i - 101`,
        definition: `Good News to the Internet filtered by query - 101!`,
      });
      acronyms.push(filteredAcronym);
      acronyms.push(filteredAcronym2);
      expect(acronyms.length === numberOfAcronyms + 2);
      const filterKey = "biko";
      const response = await request(app).get(
        `/api/v0/acronyms?search=${filterKey}`
      );

      const loadedAcronyms = response.body.results;
      expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
      expect(Array.isArray(loadedAcronyms)).toBeTruthy();
      expect(loadedAcronyms.length).toBe(2);
      expect(loadedAcronyms[0].acronym).toBe(filteredAcronym.acronym);
      expect(loadedAcronyms[0].definition).toBe(filteredAcronym.definition);
      expect(loadedAcronyms[1].acronym).toBe(filteredAcronym2.acronym);
      expect(loadedAcronyms[1].definition).toBe(filteredAcronym2.definition);
    });
});

describe("GET /api/v0/acronyms/:acronym", () => {
  test("Test that an acronym is loaded acronym name is sent", async () => {
    const response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );

    const acronym = response.body;
    expect(acronym.acronym).toBe(acronymUtils.DEFAULT_ACRONYM_TEST.acronym);
    expect(acronym.definition).toBe(
      acronymUtils.DEFAULT_ACRONYM_TEST.definition
    );
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
  });

  test("Test that movie is not loaded when movie is not found", async () => {
    const response = await request(app).get(
      `/api/v0/acronyms/acronymThatDoesNotExist`
    );

    const acronym = response.body;
    expect(acronym.acronym).toBe(undefined);
    expect(acronym.definition).toBe(undefined);
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
  });
});

describe("POST /api/v0/acronyms", () => {
  test("Test that an acronym is created properly", async () => {
    //  start a clean table for this test
    await Acronym.deleteMany({}, {});
    const response = await request(app)
      .post("/api/v0/acronyms")
      .send(acronymUtils.DEFAULT_ACRONYM_TEST);

    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
  });

  test("Test that an acronym is not created when acronym name is not sent", async () => {
    //  start a clean table for this test
    await Acronym.deleteMany({}, {});
    const response = await request(app).post("/api/v0/acronyms").send({
      id: null,
      definition: "Good News to the Internet!",
    });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM
    );
  });

  test("Test that an acronym is not created when acronym name is empty", async () => {
    //  start a clean table for this test
    await Acronym.deleteMany({}, {});
    const response = await request(app).post("/api/v0/acronyms").send({
      id: null,
      acronym: "",
      definition: "Good News to the Internet!",
    });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM
    );
  });

  test("Test that an acronym is not created when acronym definition is not sent", async () => {
    //  start a clean table for this test
    await Acronym.deleteMany({}, {});
    const response = await request(app).post("/api/v0/acronyms").send({
      id: null,
      acronym: "g2i",
    });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM_DEFINITION
    );
  });

  test("Test that an acronym is not created when acronym definition is empty", async () => {
    //  start a clean table for this test
    await Acronym.deleteMany({}, {});
    const response = await request(app).post("/api/v0/acronyms").send({
      id: null,
      acronym: "g2i",
      definition: "",
    });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM_DEFINITION
    );
  });
});

describe("PUT /api/v0/acronyms/:acronym", () => {
  test("Test that an acronym is updated properly", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;

    expect(acronym).not.toBeNull();

    const newAcronymDefinition = "updated g2i acronym";
    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        acronym: acronym.acronym,
        definition: newAcronymDefinition,
      });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
  });

  test("Test that an acronym definition is updated properly and data matches", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;
    const newAcronymDefinition = "updated g2i acronym";
    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        acronym: acronym.acronym,
        definition: newAcronymDefinition,
      });

    response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const updatedAcronym = response.body;
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(updatedAcronym.acronym).toBe(acronym.acronym);
    expect(updatedAcronym.definition).toBe(newAcronymDefinition);
    expect(updatedAcronym.definition).not.toBe(acronym.definition);
  });

  test("Test that an acronym is updated properly and data matches", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;
    const newAcronym = "updated g2i";
    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        acronym: newAcronym,
        definition: acronym.definition,
      });

    response = await request(app).get(`/api/v0/acronyms/${newAcronym}`);
    const updatedAcronym = response.body;

    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    expect(updatedAcronym.acronym).toBe(newAcronym);
    expect(updatedAcronym.definition).toBe(acronym.definition);
    expect(updatedAcronym.acronym).not.toBe(acronym.acronym);
  });

  test("Test that an acronym is not updated when acronym name is not sent", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;

    expect(acronym).not.toBeNull();

    const newAcronymDefinition = "updated g2i acronym";
    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        definition: newAcronymDefinition,
      });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM
    );
  });

  test("Test that an acronym is not updated when acronym name is empty", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;

    expect(acronym).not.toBeNull();

    const newAcronymDefinition = "updated g2i acronym";
    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        acronym: "",
        definition: newAcronymDefinition,
      });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM
    );
  });

  test("Test that an acronym is not updated when acronym name is undefined", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;

    expect(acronym).not.toBeNull();

    const newAcronymDefinition = "updated g2i acronym";
    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        acronym: undefined,
        definition: newAcronymDefinition,
      });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM
    );
  });

  test("Test that an acronym is not updated when acronym definition is not sent", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;

    expect(acronym).not.toBeNull();

    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        acronym: acronym.acronym,
      });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM_DEFINITION
    );
  });

  test("Test that an acronym is not updated when acronym definition is empty", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;

    expect(acronym).not.toBeNull();

    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        acronym: acronym.acronym,
        definition: "",
      });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM_DEFINITION
    );
  });

  test("Test that an acronym is not updated when acronym definition is undefined", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;

    expect(acronym).not.toBeNull();

    response = await request(app)
      .put(`/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`)
      .send({
        acronym: acronym.acronym,
        definition: undefined,
      });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM_DEFINITION
    );
  });

  test("Test that an acronym is not updated when acronym parameter does not exists in database", async () => {
    var response = await request(app).get(
      `/api/v0/acronyms/${acronymUtils.DEFAULT_ACRONYM_TEST.acronym}`
    );
    const acronym = response.body;

    expect(acronym).not.toBeNull();

    const newAcronymDefinition = "updated g2i acronym";
    response = await request(app)
      .put(`/api/v0/acronyms/acronymThatDoesNotExist`)
      .send({
        acronym: acronym.acronym,
        definition: newAcronymDefinition,
      });

    expect(response.status).toBe(constantsUtils.STATUS_CODE_BAD_REQUEST);
    expect(response.body.error).toBe(
      constantsUtils.ERROR_MESSAGE_ACRONYM_DOES_NOT_EXIST
    );
  });
});

describe("DELETE /api/v0/acronyms/:acronym", () => {
  test("Test that an acronym is deleted properly", async () => {
    var response = await request(app).get(`/api/v0/acronyms`);

    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    var acronyms = response.body.results;

    expect(Array.isArray(acronyms)).toBeTruthy();
    expect(acronyms.length).toBe(1);

    response = await request(app).delete(
      `/api/v0/acronyms/${acronyms[0].acronym}`
    );

    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);

    response = await request(app).get(`/api/v0/acronyms`);
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);

    acronyms = response.body.results;

    expect(Array.isArray(acronyms)).toBeTruthy();
    expect(acronyms.length).toBe(0);
  });

  test("Test that an acronym is not deleted when acronym does not exist in database", async () => {
    var response = await request(app).get(`/api/v0/acronyms`);

    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
    var acronyms = response.body.results;

    expect(Array.isArray(acronyms)).toBeTruthy();
    expect(acronyms.length).toBe(1);

    response = await request(app).delete(
      `/api/v0/acronyms/acronymDoesNotExist`
    );

    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);

    response = await request(app).get(`/api/v0/acronyms`);
    expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);

    acronyms = response.body.results;

    expect(Array.isArray(acronyms)).toBeTruthy();
    expect(acronyms.length).toBe(1);
  });
});

describe("GET /api/v0/acronyms/random/:count", () => {
  test("Test that random acronyms are loaded properly", async () => {
    // start a clean table for this test
    await Acronym.deleteMany({}, {});
    const numberOfAcronyms = 200;
    const randomAcronymsCount = 10;
    const acronyms = [];
    for (var i = 0; i < numberOfAcronyms; i++) {
      const acronym = await Acronym.create({
        id: null,
        acronym: `g21 - ${i}`,
        definition: `Good News to the Internet - ${i}!`,
      });
      acronyms[i] = acronym;
    }

    const response = await request(app).get(
      `/api/v0/acronyms/random/${randomAcronymsCount}`
    );

    const randomAcronyms = await response.body;
    expect(randomAcronyms.length).toBe(randomAcronymsCount);

    const obj = [];
    acronyms.forEach((el1, index1) => {
      randomAcronyms.forEach((el2) => {
        if (el1.acronym === el2.acronym) {
          obj.push(index1);
        }
      });
    });

    var isAdjacent = false;
    for (i = 0; i < obj.length; i++) {
        for (var j = i + 1; j < obj.length; j++) {
          if (
            obj[j] - 1 === obj[i] ||
            obj[j] + 1 === obj[i]
          ) {
            isAdjacent = true;
            break;
          }
        }

        if (isAdjacent) {
          break;
        }
    }
    expect(isAdjacent).toBeFalsy();
  });
});

describe('GET HealthCheck', () => {

	test('Returns 200 if server is healthy', async () => {
		const response = await request(app).get(`/api/v0/acronyms/healthcheck`);
		expect(response.status).toBe(constantsUtils.STATUS_CODE_OK);
		expect(response.body.uptime).toBeGreaterThan(0);
	});
});