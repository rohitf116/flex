/* eslint-disable react/prop-types */
import Subcategory from "./Subcategory";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

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
