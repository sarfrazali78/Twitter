import styles from './search.module.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Search=()=>{
    return (
        <div className={styles.searchbar}>
            <SearchOutlinedIcon/>
             <input type="search" placeholder="Search Twitter" />  

        </div>
    )
}
export default Search;