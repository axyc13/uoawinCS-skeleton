function Card({ title, description, image }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {image && <img src={image} alt={title} className="w-full h-60 object-cover" />}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 flex-1">{description}</p>
      </div>
    </div>
  );
}

export default Card;
