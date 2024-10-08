import React from "react";
import styles from "./Search.module.scss";
import debounce from 'lodash.debounce'
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";


const Search:React.FC = () => {
  const dispatch = useDispatch()
  const [value,setValue] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)  
  const onClickClear = () => { 
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current?.focus()
  }

  const updateSearchValue = React.useCallback(debounce((str:string) => {
    dispatch(setSearchValue(str))
  },300),[])

  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value)
  }

  return (
    <>
      <div className={styles.root}>
        <svg
          className={styles.icon}
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
        </svg>
        <input
          value={value}
          onInput={onChangeInput}
          className={styles.input}
          placeholder="Поиск пицц..."
          ref={inputRef}
        />
        {
        value && (
          <svg
            onClick={onClickClear}
            className={styles.close}
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="grid_system" />
            <g id="_icons">
              <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
            </g>
          </svg>
        ) }
      </div>
    </>
  );
};

export default Search;
