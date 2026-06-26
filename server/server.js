import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "contacts.json");

app.use(cors());
app.use(express.json());

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8");
  }
}

function readContacts() {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeContacts(contacts) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), "utf-8");
}

function validateContact(body) {
  const { name, phone, email, propertyType } = body;

  if (!name?.trim()) return "Name is required";
  if (!phone?.trim()) return "Phone number is required";
  if (!email?.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email address";
  if (!propertyType?.trim()) return "Property type is required";

  return null;
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/contact", (req, res) => {
  const error = validateContact(req.body);

  if (error) {
    return res.status(400).json({ error });
  }

  const submission = {
    id: Date.now().toString(),
    name: req.body.name.trim(),
    phone: req.body.phone.trim(),
    email: req.body.email.trim(),
    propertyType: req.body.propertyType.trim(),
    message: req.body.message?.trim() || "",
    createdAt: new Date().toISOString(),
  };

  const contacts = readContacts();
  contacts.push(submission);
  writeContacts(contacts);

  console.log("[contact] New submission:", submission.name, submission.phone);

  res.status(201).json({ success: true, id: submission.id });
});

app.listen(PORT, () => {
  ensureDataFile();
  console.log(`Contact API running on http://localhost:${PORT}`);
});
