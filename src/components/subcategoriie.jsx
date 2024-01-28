import Subcategory from "./Subcategory";

const Subcategories = ({ subcategories }) => {
  return (
    <div className="subcategories">
      {subcategories.map((item) => (
        <Subcategory key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Subcategories;
