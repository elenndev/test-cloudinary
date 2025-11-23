"use client"
import { useState } from "react";

export default function UploadImage() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: any) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImage(data.secure_url);
    setLoading(false);
  }

  return (
    <div className="w-full h-full">
      <h1>Fazer upload da imagem</h1>
      <input type="file" onChange={handleUpload} />

      {loading && <p>Enviando...</p>}
      {image && <>
        Última imagem enviada
        <img src={image} width={300} /> </>}
    </div>
  );
}


