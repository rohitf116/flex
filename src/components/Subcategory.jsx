import React from "react";

const Subcategory = ({ item }) => {
  return (
    <div className="subcategory" key={item.id}>
      {item.name}
    </div>
  );
};

export default Subcategory;
