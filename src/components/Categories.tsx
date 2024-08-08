import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { categoryIndexSelect, setCategoryIndex } from "../redux/slices/filterSlice";

const categoriesArr = [
  "Все",
  "Мясные",
  "Вегетерианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const Categories:React.FC = () => {
  const dispatch = useDispatch()
  const categoryIndex = useSelector(categoryIndexSelect)
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
