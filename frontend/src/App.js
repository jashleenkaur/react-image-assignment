import { useState } from "react";

function App() {
  const [searchName, setSearchName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const searchImage = async () => {
    const res = await fetch(`http://localhost:3000/api/getImage?name=${searchName}`);
    const data = await res.json();
    setImageUrl(`http://localhost:3000${data.url}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Image</h1>

      <input
        type="text"
        placeholder="Enter name (tom, jerry, dog)"
        onChange={(e) => setSearchName(e.target.value)}
      />

      <button onClick={searchImage}>Search</button>

      <div style={{ marginTop: "20px" }}>
        {imageUrl && <img src={imageUrl} alt="Character" width="200" />}
      </div>
    </div>
  );
}

export default App;
