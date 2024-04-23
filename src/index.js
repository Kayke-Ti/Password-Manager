const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3306;

app.use(express.json());
app.use(cors());

// Função para inserir dados nas tabelas Name, Email e Password
const insertData = async (name, email, password) => {
  try {
    const nameData = await prisma.name.create({
      data: { name, password },
    });

    const emailData = await prisma.email.create({
      data: { email },
    });

    const passwordData = await prisma.password.create({
      data: { password },
    });

    return { nameData, emailData, passwordData };
  } catch (error) {
    throw new Error("Error inserting data: " + error.message);
  }
};

app.post("/Password-Manager/insert-data", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const insertedData = await insertData(name, email, password);
    res.send("Password inserted into all tables successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error inserting data");
  }
});

app.get("/Password-Manager/get-data", async (req, res) => {
  try {
    const names = await prisma.name.findMany();
    const emails = await prisma.email.findMany();
    const passwords = await prisma.password.findMany();
    res.json({ names, emails, passwords });
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).send("Error retrieving data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
