import { useEffect } from "react";
import Card from "../../components/Card";
import { useState } from "react";

export default function Home() {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-4">Home</h1>
      <div className=" grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {Items.length > 0 &&
          Items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              images={item.images}
            />
          ))}
      </div>
    </div>
  );
}
