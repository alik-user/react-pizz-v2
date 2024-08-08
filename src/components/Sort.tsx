import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortValue, sortSelect, SortValueEnum } from "../redux/slices/filterSlice";
function Sort() {

  const sortValue = useSelector(sortSelect)
  const dispatch = useDispatch()

  const [hidden, setHidden] = React.useState(false);
  type SortList = { name: string, value: SortValueEnum }
  const sortArr: SortList[] = [
    { name: 'популярности ↑', value: SortValueEnum.RATING_DESC },
    { name: 'популярности ↓', value: SortValueEnum.RATING_ASC },
    { name: 'цене ↑', value: SortValueEnum.PRICE_DESC },
    { name: 'цене ↓', value: SortValueEnum.PRICE_ASC },
    { name: 'алфавиту ↑', value: SortValueEnum.TITLE_DESC },
    { name: 'алфавиту ↓', value: SortValueEnum.TITLE_ASC  },
  ];
  const select = (obj: any) => {
    dispatch(setSortValue(obj));
    setHidden(false)
  }


  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setHidden(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);
  const sortRef = React.useRef<HTMLDivElement>(null);
  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => setHidden(!hidden)} className="sort__label">
        <svg
          className={hidden === false ? "" : "rotate"}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{sortValue.name}</span>
      </div>
      {hidden && (
        <div className="sort__popup">
          <ul>
            {sortArr.map((obj, index) => (
              <li
                key={index}
                onClick={() => {
                  select(obj);
                }}
                className={sortValue.name === obj.name ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
