import { useState } from "react";

function App() {
  // ---------- SEARCH (Day 2 Morning) ----------
  const [searchName, setSearchName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const searchImage = async () => {
    if (!searchName) {
      alert("Please enter a name (tom, jerry, dog)");
      return;
    }

    const res = await fetch(
      `http://localhost:3000/api/getImage?name=${searchName}`
    );
    const data = await res.json();
    // backend returns { url: "/tom.jpg" }
    setImageUrl(`http://localhost:3000${data.url}`);
  };

  // ---------- UPLOAD (Day 2 Evening) ----------
  const [uploadName, setUploadName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const uploadFile = async () => {
    if (!uploadName) {
      alert("Please enter a name for upload (tom, jerry, dog)");
      return;
    }

    if (!selectedFile) {
      alert("Please choose a file first.");
      return;
    }

    const formData = new FormData();
    // field name MUST be "image" because backend uses upload.single("image")
    formData.append("image", selectedFile);

    const res = await fetch(
      `http://localhost:3000/api/upload?name=${uploadName}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setUploadMessage(data.message || "Upload complete");
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* SEARCH SECTION */}
      <h1>Search Image</h1>

      <input
        type="text"
        placeholder="Enter name (tom, jerry, dog)"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />

      <button onClick={searchImage} style={{ marginLeft: "8px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {imageUrl && (
          <img src={imageUrl} alt="character" width="200" />
        )}
      </div>

      <hr style={{ margin: "30px 0" }} />

      {/* UPLOAD SECTION */}
      <h2>Upload New Image</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Name for image (tom, jerry, dog)"
          value={uploadName}
          onChange={(e) => setUploadName(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </div>

      <button onClick={uploadFile}>Upload</button>

      <div style={{ marginTop: "10px", color: "green" }}>
        {uploadMessage}
      </div>
    </div>
  );
}

export default App;
