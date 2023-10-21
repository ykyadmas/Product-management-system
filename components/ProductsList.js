import DeleteButton from '@/components/DeleteButton';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';



const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: 'no-store', 
    });

    if (!res.ok) {
      throw new Error("Couldn't get products");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log("Error loading products", error);
  }
};

export default async function ProductsList() {
  const { products } = await getProducts();

  let id = 1;

products.forEach((product) => {
  product.id = id++;
});

  return (
    <>
      {products && products.map((p) => (
        <div key={p._id} className='flex justify-between border border-slate-300 my-3'>
          <div className='flex justify-between gap-6 ml-4 mt-3'>
          {p.id}
                 
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity in Stock
                </th>
                <th scope="col" className="px-6 py-3">
                   
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="w bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {p.name}
                </th>
                <td className="px-6 py-4 mx-0">
                {p.description}
                </td>
                
                <td className="px-6 py-4">
                     {p.price}
                </td>
                <td className="px-6 py-4">
                {p.quantity > 0 ? p.quantity : "out of stock"}
                </td>
                <td className="px-6 py-4">
            
                </td>
            </tr>
           
        </tbody>
       
    </table>
</div>
      
          </div>
          <div className='flex  justify-between mt-3 gap-2'>
          <Link href={`/editProduct/${p._id}`}>
              <HiPencilAlt size={24} className='bg-blue-200'/>
            </Link>
            <DeleteButton id={p._id}/>
          </div>
        </div>
      ))}
    </>
  );
}