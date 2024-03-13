import { useContext } from "react";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { useAutoFocus } from "../../hooks/useAutoFocus";
export default function Home() {
  // const currentPath = window.location.pathname;
  // let category = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  const context = useContext(ShoppingCartContext);
  const autoFocusRef = useAutoFocus();

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          images={item.images}
          description={item.description}
        />
      ));
    } else {
      // eslint-disable-next-line react/no-unescaped-entities
      return <div>We don't have anything :(</div>;
    }
  };
  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
        ref={autoFocusRef}
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderView()}
      </div>
      <ProductDetail />
    </>
  );
}
