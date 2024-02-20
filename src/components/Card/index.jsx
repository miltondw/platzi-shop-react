import PropTypes from "prop-types";

const Card = ({ id, title, price, category,images }) => {
  return (
    <div id={id} className="bg-white cursor-pointer w-56 h-60 rounded-lg m-2">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[1]?images[1]:'https://th.bing.com/th/id/OIP.kUqu1RoM1qn_X7B9LHZUzwAAAA?rs=1&pid=ImgDetMain'}
          alt={title}
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.array.isRequired
};
export default Card;
