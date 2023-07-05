import Search from './search'
import What_happeni from './What_happening'
import Who_to_follow from './Who_to_follow'

import styles from './last.module.css'

const Last =()=>{
    return(
        <div className={styles.last}>
            <Search />
         <What_happeni />
        < Who_to_follow />
        </div>
    )
}
export default Last;