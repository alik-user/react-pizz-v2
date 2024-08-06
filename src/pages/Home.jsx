import React from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/Sceleton";
import Pagination from "../components/Pagination/Pagination";
import { useSelector ,useDispatch } from "react-redux";
import {  fetchPizzas, pizzaSliceSelector } from "../redux/slices/pizzaSlice";
import { filterSliceSelect } from "../redux/slices/filterSlice";

function Home() {
  const {sort,categoryIndex,currentPage,searchValue} = useSelector(filterSliceSelect);
  const {items,status} = useSelector(pizzaSliceSelector);
  const dispatch = useDispatch()



  const category = categoryIndex > 0 ? `&category=${categoryIndex}` : "";
  const sorts = sort.value.replace("-", "");
  const order = sort.value.includes("-") ? "asc" : "desc";
  const search = searchValue ? `${searchValue}` : "";

  React.useEffect(() => {
    const getPizza = async () => {
      dispatch(fetchPizzas({
        category,
        sorts,
        order,
        search,
        currentPage
      }))
      
    };
    getPizza();
  }, [categoryIndex, sort, searchValue, currentPage]);

  const item = items.map((item) => <PizzaBlock key={item.id} {...item} />);
  const sceleton = [...new Array(8)].map((_, i) => <Sceleton key={i} />);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === "error" ? (
          <div>не удалось получить пиццы</div>
        ) : <div className="content__items">{status === "loading" ? sceleton : item}</div>
      }

      <Pagination />
    </>
  );
}

export default Home;
