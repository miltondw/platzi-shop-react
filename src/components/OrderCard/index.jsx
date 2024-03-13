import { XMarkIcon } from "@heroicons/react/24/solid";
import { isValidURL } from "../../utils/utils";

// eslint-disable-next-line react/prop-types
const OrderCard = ({ id,title, imageUrl, price,handleDelete  }) => {
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
  }
  return (
    <div className="flex justify-between items-center mb-3 flex-col-reverse border-transparent border-b-gray-500 border p-1 lg:flex-row lg:border-none">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={
              isValidURL(imageUrl[0])
                ? imageUrl[0]
                : "https://th.bing.com/th/id/OIP.kUqu1RoM1qn_X7B9LHZUzwAAAA?rs=1&pid=ImgDetMain"
            }
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2 w-full justify-between lg:w-auto lg:justify-normal">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
