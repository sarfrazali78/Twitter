import Sidebar from "./sidebar"

// import Footer from  './footer'
import Home_middle from './home_middle'
import styles from './home.module.css'
import Last from './last'

  
const Home = ()=>{
    return(
    <div className={styles.home}>
         <div className={styles.first} > 
           <Sidebar />
         </div>
         <div className={styles.middle} >
          <Home_middle />
         </div>
         <div className={styles.last} >
          <Last/>
         </div>
    </div>
    )
}

export default Home;