"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !quantity) {
      alert("name and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, description,price,quantity }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Name"
        required
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description"
        required
      />
       <input
        onChange={(e) => setPrice(e.target.value)}
        min="0"
        value={price}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Price"
        required
      />
       <input
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        min="0"
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="quantity"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 font-bold text-white py-3 px-6 w-fit hover:bg-yellow-800 rounded-full"
      >
        Save
      </button>
    </form>
  );
}
