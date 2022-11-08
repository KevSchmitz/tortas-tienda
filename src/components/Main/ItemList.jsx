import Item from "./Item.jsx";

const ItemList = ({ items }) => {
  return (
    <div className="items-list">
      {items.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ItemList;
