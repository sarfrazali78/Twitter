import styles from './What.module.css'

// let data_what_happening=[
//     {t:"Trending in India",h:'#tea',n:"3,876 Tweets"},
//     {t:"Modi",h:'#Modi',n:"3,876 Tweets"},
//     {t:"Virat Kohali",h:'#Virat Kohli',n:"4,176 Tweets"},
//     {t:"Leo Massi",h:'#FootBall player',n:"3,553 Tweets"},
//     {t:"Salman khan ,h:'#Actor',n:"3,553 Tweets"},


    

    
    
    
// ]

const What_happeni=()=>{
    return (
        <div className={styles.What}>
            <h2>What’s happening</h2>
            <div className={styles.Whattwo}>
                <div className={styles.change}>
                <p>Trending in India</p>
                <h3>#Tea</h3>
                <p>3,553 Tweets</p>
                </div>
                <div className={styles.dot}>
                <p >...</p>
                </div>
            </div>
            <div  className={styles.Whattwo}>
                <div  className={styles.change}>
                <p>Modi</p>
                <h3>#PM of India</h3>
                <p>3,553 Tweets</p>
                </div>
                <div className={styles.dot}>
                <p>...</p>
                </div>
               
            </div>
            <div  className={styles.Whattwo}>
            <div  className={styles.change}>
                <p>Virat Kohali</p>
                <h3>#ViratKohli</h3>
                <p>3,553 Tweets</p>
                </div>
                <div className={styles.dot}>
                <p>...</p>
                </div>
            </div>
            <div  className={styles.Whattwo}>
            <div  className={styles.change}>
                <p>Leo Massi</p>
                <h3>#FootBall player</h3>
                <p>3,553 Tweets</p>
                </div>
                <div className={styles.dot}>
                <p>...</p>
                </div>
            </div>
            <div  className={styles.Whattwo}>
            <div  className={styles.change}>
                <p>Salman khan</p>
                <h3>#Actor</h3>
                <p>3,553 Tweets</p>
                </div>
                <div className={styles.dot}>
                <p>...</p>
                </div>
              
            </div>
            <button className={styles.button}>Show More</button>
        </div>
    )
}
export default What_happeni;
