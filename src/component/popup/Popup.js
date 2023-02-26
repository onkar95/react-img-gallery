import React, { useContext } from 'react'
import DataContext from '../context'
import '../../App.css'
import './popup.css'
import close from "../../Assets/close.png"
import like from '../../Assets/like.png'
import likew from '../../Assets/likew.png'


const Popup = () => {
    const { singleData, popup, setpopup, theme } = useContext(DataContext)

    return (
        <div className=" popup_main" >

            <div id="popup" className={theme ? 'popup popup_main_dark' : "popup popup_main_light"} >
                <div className='close' onClick={() => setpopup(!popup)}>
                    <img className='close_img' src={close} alt="close" />
                </div>
                <div className='popup_img'>
                    <img src={singleData?.urls.full} alt={singleData?.alt_description || "loading"} />
                </div>
                <div className='popup_info mobile_popup_info'>
                    <div className='user_side'>
                        <img src={singleData?.user.profile_image?.medium} alt="user loading" />
                        <div>
                            <p className={theme ? "user_side_p_dark" : "user_side_p_light"}>{singleData?.user.first_name} {singleData?.user.last_name}</p>
                            <h6>{singleData?.user.instagram_username ? "@" + singleData?.user.instagram_username : ""} </h6>
                        </div>
                    </div>
                    <p className=' mobile_img_desc'>{singleData?.alt_description}</p>
                    <div className='user_side_right'>
                        <p>{singleData?.likes > 1000 ? singleData?.likes % 100 + "K" : singleData?.likes}</p>
                        {!theme ? <img src={like} alt="user loading" /> : <img src={likew} alt="user loading" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup