const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
//require('dotenv/config');

const app = express();

morgan.token('body', req => JSON.stringify(req.body));

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1> Welcome to my application </h1>");
});

app.get("/info", (request, response) => {
  let str =
    "<p>Phonebook has info for " +
    persons.length +
    " people</p><p>" +
    new Date();
  response.send(str);
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) response.json(person);
  else response.status(404).end();
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  let id =
    persons.length > 0 ? Math.max(...persons.map((person) => person.id)) : 0;
  const person = request.body;
  person.id = id + 1;
  if (person.name || person.number) {
    const duplicatePerson = persons.find((p) => p.name === person.name);
    if (!duplicatePerson) {
      persons = persons.concat(person);
      response.json(person);
    } else response.status(404).send({ error: "name must be unique" }).end();
  } else
    response.status(400).send({ error: "name or number not entered" }).end();
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
