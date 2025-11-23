"use client";
import { CloudinaryImage } from "@/types/CloudinaryImage";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [imagens, setImagens] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();
        setImagens(data);
        console.log(data)
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Galeria de imagens salvas</h1>

      {loading && <p>Carregando imagens...</p>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
        marginTop: "20px"
      }}>
        {imagens.map((img) => (
          <div key={img.public_id}>
            <img
              src={img.secure_url}
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

