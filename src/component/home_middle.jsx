import Top_home from './top_home'
import Add_twitte from './add_twitte'
import All_twitte from './all_twitte'
import styles from './Home_middle.module.css'





const Home_middle=()=>{
    return (
        <div className={styles.middle} >
          <Top_home />
          <Add_twitte />
          <All_twitte/>
        </div>
    )
}
export default Home_middle;