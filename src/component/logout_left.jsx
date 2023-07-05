import styles from './logout_left.module.css'
import {useState}  from 'react';





const Logout_left=()=>{

    const [btnstate,setbtnstate]=useState(false)

    function hendalepopup(){

      setbtnstate(!btnstate) 

    }

    function clearLS(){
        localStorage.clear();
        alert("gghgk")
        window.location.reload()
    }
    
    return(
        
        <div className={styles.Logout_left} onClick={hendalepopup} >
                <div className={styles.name_log_left}>
                    <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400" />
                    <div>
                    <p>Sarfraz</p> 
                    <p>Sarfraz ali</p>
                    </div>  
                </div>
                <div className={`${styles.logout_pop} ${btnstate ? styles.logout_pop2 : ''}`}  >
                    <div><p>add to existing account</p></div>
                    <div onClick={clearLS} ><p>vishal gupta</p></div>   
                </div>
                
        </div>
    )
}
export default Logout_left;