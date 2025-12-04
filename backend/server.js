const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// allow frontend to call backend
app.use(cors());

// serve static files like tom.jpg, jerry.jpg, dog.jpg from /public
app.use(express.static("public"));
app.use(express.json());

/*  ORIGINAL SEARCH FEATURE */

app.get("/api/getImage", (req, res) => {
    const name = req.query.name?.toLowerCase(); // e.g. "tom"

    if (!name) {
        return res.json({ url: "/default.jpg" });
    }

    let image = "default.jpg";

    if (name.includes("tom")) image = "tom.jpg";
    if (name.includes("jerry")) image = "jerry.jpg";
    if (name.includes("dog")) image = "dog.jpg";

    // frontend will use this URL
    res.json({ url: "/" + image });
});

/* NEW: UPLOAD FEATURE WITH MULTER  */

// storage: save to /public with fixed names like tom.jpg, jerry.jpg, dog.jpg
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public"),
    filename: (req, file, cb) => {
        const name = req.query.name?.toLowerCase(); // e.g. "tom"
        if (!name) return cb(new Error("Missing ?name= parameter"));

        // keep original extension (.jpg, .png)
        const ext = path.extname(file.originalname);
        cb(null, name + ext); // tom.jpg, jerry.jpg, dog.jpg
    },
});

const upload = multer({ storage });

// POST /api/upload?name=tom  with form-data field: image
app.post("/api/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    res.json({
        message: "Image uploaded successfully!",
        file: req.file.filename,
    });
});

/*  START SERVER */

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
