import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Logout_left from "./logout_left"
import styles from './sidebar.module.css'


const Sidebar=()=>{
    return(
        <div className={styles.sidebar}>
            <TwitterIcon fontSize='large' color="primary"  style={{marginLeft:"50px",marginTop:"10px",marginBottom:"20px"}} /> <br/>
        <div className={styles.sidebar2}> 
        <button className={styles.icon} style={{fontWeight:"bold"}}  ><HomeIcon fontSize='medium' />Home</button><br />
        <button className={styles.icon}><TagIcon fontSize='medium' />Explor</button><br />
        <button className={styles.icon} style={{width: "200px"}}  ><NotificationsNoneIcon fontSize='medium' /> Notification </button><br />
        <button className={styles.icon} style={{width: "180px"}}  ><MailOutlineIcon fontSize='medium' />message</button> <br />
        <button className={styles.icon}> <ListAltIcon fontSize='medium' />List</button><br />
        <button className={styles.icon} style={{width: "200px"}} ><BookmarkBorderIcon fontSize='medium' />Bookmarks</button><br />
        <button className={styles.icon} style={{width: "200px"}} ><TwitterIcon fontSize='medium' />Twitter blue</button><br />
        <button className={styles.icon}><PersonOutlineOutlinedIcon fontSize='medium' />Profile</button> <br />
        <button className={styles.icon}><PendingOutlinedIcon fontSize='medium' />More</button> <br />
        <button className={styles.icon} style={{backgroundColor: "rgb(29,155,240)", color:"white", fontWeight:"bold",paddingLeft:"80px",width:"217px", marginLeft:"40px"}}>Twitter</button>
        </div>
        <Logout_left />
        </div>
    )
}
export default Sidebar 