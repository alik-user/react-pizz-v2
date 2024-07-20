import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { setCategoryIndex } from "../redux/slices/filterSlice";

function Categories() {
  const dispatch = useDispatch()
  const categoryIndex = useSelector((state) => state.filterSlice.categoryIndex)
  const categoriesArr = [
    "Все",  
    "Мясные",  
    "Вегетерианская",  
    "Гриль",  
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              dispatch(setCategoryIndex(index));
            }}
            className={categoryIndex === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
