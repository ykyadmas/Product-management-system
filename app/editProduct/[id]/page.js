import EditProductForm from "@/components/EditProductForm";

const getProductById= async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Products");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { name, description,price,quantity } = product;

  return <EditProductForm id={id} name={name} description={description} price={price} quantity={quantity}/>;
}
