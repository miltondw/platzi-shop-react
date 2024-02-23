import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import "./ProductDetail.css";
import { isValidURL } from "../../utils/utils";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
      id={context.productToShow.id}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeProductDetail()}
          ></XMarkIcon>
        </div>
      </div>
      <figure className="px-6 h-2/5">
        <img
          className="w-full h-full rounded-lg"
          src={
            typeof context.productToShow.images === "object" &&
            isValidURL(context.productToShow.images[0])
              ? context.productToShow.images[0]
              : "https://th.bing.com/th/id/OIP.kUqu1RoM1qn_X7B9LHZUzwAAAA?rs=1&pid=ImgDetMain"
          }
          alt={context.productToShow.title}
          title={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
