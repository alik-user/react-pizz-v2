import style from './NotFoundBlock.module.scss'
function NotFoundBlock() {
    return(
        <div className={style.root}>
        <span className={style.smile}>:(</span>
        <br /> 
        <h1 className={style.title}>ничего не найдено</h1>
        </div>
    )
}
export default NotFoundBlock;