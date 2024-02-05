import { useParams, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Subcategory = ({ item }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const handleSubcategoryClick = (name) => {
    console.log({ searchParams });
    const sub = searchParams.get("subcategories");

    if (!sub) {
      setSearchParams({ subcategories: name });
    } else {
      let newSub = "";

      if (sub.includes(",")) {
        newSub = sub.split(",");

        const index = newSub.indexOf(name);
        console.log({ dd: index });
        if (index === -1) {
          setSearchParams({ subcategories: `${sub},${name}` });
        } else {
          const filtered = newSub.filter((i) => i !== name);
          console.log({ dd: newSub });
          newSub = filtered.join(",");
          console.log({ 22: newSub });
          setSearchParams({ subcategories: `${newSub}` });
        }
      } else {
        newSub = sub;
        if (name === sub) {
          setSearchParams({ subcategories: "" });
        } else {
          setSearchParams({ subcategories: `${newSub},${name}` });
        }
      }
      // setSearchParams({ subcategories: `${sub},${name}` });
    }
    // setSearchParams(name);
    console.log({ sub });
  };
  return (
    <botton
      className="subcategory"
      key={item.id}
      onClick={() => handleSubcategoryClick(item.name)}
    >
      {item.name}
    </botton>
  );
};

export default Subcategory;
