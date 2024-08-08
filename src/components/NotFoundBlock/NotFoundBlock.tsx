import React from 'react';
import style from './NotFoundBlock.module.scss'
const NotFoundBlock:React.FC = () => {
    return(
        <div className={style.root}>
        <span className={style.smile}>:(</span>
        <br /> 
        <h1 className={style.title}>ничего не найдено</h1>
        </div>
    )
}
export default NotFoundBlock;