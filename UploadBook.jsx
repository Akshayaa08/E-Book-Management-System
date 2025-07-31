import { useState } from "react";
import axios from "axios";

export default function UploadBook() {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    author: "",
    isbn: "",
    type: "Free",
    description: "",
    image: "",
    bookFile: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "bookFile") {
      setFormData({ ...formData, bookFile: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    await axios.post("/api/books/add", data);
    alert("Book Uploaded Successfully");
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
      <input type="text" name="isbn" placeholder="ISBN" onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
      <input type="file" name="bookFile" onChange={handleChange} required />
      <button type="submit">Upload</button>
    </form>
  );
}
