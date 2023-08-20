const request = require("supertest");
const app = require("../app");
const jwt = require("jsonwebtoken");

describe("Note API Endpoints", () => {
  let testNoteId;

  let authToken;

  beforeAll(() => {
    const payload = { userId: "root" };
    authToken = jwt.sign(payload, process.env.LOGIN_KEY);
  });

  test("POST /api/notes", async () => {
    const newNote = {
      title: "Test Note",
      content: "This is a test note.",
    };

    const response = await request(app)
      .post("/api/notes")
      .set("Authorization", `Bearer ${authToken}`)
      .send(newNote);

    expect(response.status).toBe(201);
    testNoteId = response.body.data.insertId;
  });

  test("GET /api/notes", async () => {
    const response = await request(app).get("/api/notes");
    expect(response.status).toBe(200);
  });

  test("GET /api/notes/:id", async () => {
    const response = await request(app).get(`/api/notes/${testNoteId}`);
    expect(response.status).toBe(200);
  });

  test("PUT /api/notes/:id", async () => {
    const updatedNote = {
      title: "Updated Test Note",
      content: "This is the updated content.",
    };

    const response = await request(app)
      .put(`/api/notes/${testNoteId}`)
      .send(updatedNote);

    expect(response.status).toBe(200);
  });

  test("DELETE /api/notes/:id", async () => {
    const response = await request(app)
      .delete(`/api/notes/${testNoteId}`)
      .set("Authorization", `Bearer ${authToken}`);
    expect(response.status).toBe(204);

    const fetchResponse = await request(app).get(`/api/notes/${testNoteId}`);
    expect(fetchResponse.status).toBe(404);
  });
});
