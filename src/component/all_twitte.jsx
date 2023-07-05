import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import styles from './all_twitte.module.css'
import data from './data'

const All_twitte=()=>{
    return (
      // [1, , 3].map((x, index) => {
      //   console.log(`Visit ${index}`);
      //   return x * 2;
      // }),
      data.map((ele)=>{
        return(
          <div className={styles.user_info_main} >
          <div className={styles.user_info} >
          <img src={ele.profile_pic}alt="pro_pic" />
              <div className={styles.user_info2} >
                <p className={styles.name} >{ele.first_name} {ele.last_name}</p>
                <p>{ele.location}</p>
              </div>
          </div>
          <div className={styles.post_img} >
            <img src={ele.post} alt="post" />
          </div>
          <div className={styles.icon}>
           <MapsUgcOutlinedIcon /> <p>76</p>
           <RepeatOutlinedIcon /><p>76</p>
           <FavoriteBorderOutlinedIcon /><p>76</p>
           <LeaderboardOutlinedIcon /><p>76</p>
           <FileUploadOutlinedIcon />
          </div>
        </div>
        )
      })
        
    )
}
export default All_twitte;