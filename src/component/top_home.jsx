import styles from './top_home.module.css'

const Top_home=()=>{
    return (
        <div className={styles.top_home}>
            <div className={styles.top_home2} >
              <h2>Home</h2>
            </div>
            
            <div className={styles.h2_div} >
                <div className={styles.h3_div}>
                    <p>For you</p>
                </div>
                <div className={styles.h3_div} ><p>Following</p></div>  
            </div>
        </div>
    )
}
export default Top_home;

