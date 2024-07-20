import React from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/Sceleton";
import Pagination from "../components/Pagination/Pagination";
import { SearchContext } from "../App";
import { useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const categoryIndex = useSelector((state) => state.filterSlice.categoryIndex);
  const sortValue = useSelector((state) => state.filterSlice.sort);
  const currentPage = useSelector(state => state.filterSlice.currentPage)

  const {searchValue} = React.useContext(SearchContext);

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  const category = categoryIndex > 0 ? `&category=${categoryIndex}` : "";
  const sort = sortValue.value.replace("-", "");
  const order = sortValue.value.includes("-") ? "asc" : "desc"
  const search = searchValue ? `${searchValue}` : '';
  
  React.useEffect(() => {
    axios.get(`https://6687fb7d0bc7155dc01a0423.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sort}&order=${order}&search=${search}`)
      .then(res => {
        setPizzas(res.data)
        setIsLoading(false);
      })
      window.scrollTo(0, 0);
  }, [categoryIndex, sortValue , searchValue , currentPage ]);
      
  const items = pizzas.map((item) => <PizzaBlock key={item.id} {...item} />);
  const sceleton = [...new Array(8)].map((_, i) => <Sceleton key={i} />);

  return (
    <>
      <div className="content__top">
        <Categories/>
        <Sort/>
      </div>
      {isLoading && "Loading..."}
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceleton : items}</div>
       <Pagination/>
    </>
  );
}

export default Home;
