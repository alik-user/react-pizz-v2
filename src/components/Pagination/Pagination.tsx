import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';
const Pagination = () => {
const dispatch = useDispatch() 
return(
    <ReactPaginate
    className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => dispatch(setCurrentPage(e.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
)
}

export default Pagination;