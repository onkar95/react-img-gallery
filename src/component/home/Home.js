import React, { useContext } from 'react'
import DataContext from '../context'
import './home.css'
import like from '../../Assets/like.png'
import likew from '../../Assets/likew.png'

const Home = () => {
    const { Data, setSingleData, setpopup, popup, theme } = useContext(DataContext)

    const handelImgClick = (val) => {
        setSingleData(val)
        setpopup(!popup)

    }

    return (
        <>
            {
                Data.length === 0 ?
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ textAlign: "center" }}>NO Result Found</h3>
                    </div>
                    : ""
            }
            <div className={popup ? ' home blur' : " home "}>

                {
                    Data?.map((image, key) => (
                        <div className={theme ? 'img_div_dark' : "img_div_light"}>
                            <img className='image_div_img' src={image.urls.small} alt={image.alt_description} key={image.id} onClick={() => handelImgClick(image)} />
                            <div className='popup_info mobile_popup_info'>
                                <div className='user_side'>
                                    <img src={image?.user.profile_image?.large} alt="user loading" />
                                    <div>
                                        <p className={theme ? "user_side_p_dark" : "user_side_p_light"}>{image?.user.first_name} {image?.user.last_name}</p>
                                        {/* <h6 className=' mobile_user_insta'>{image?.user.instagram_username ? "@" + image?.user.instagram_username : ""} </h6> */}
                                    </div>
                                </div>
                                <div className='user_side_right'>
                                    <p>{image?.likes > 1000 ? image?.likes % 100 + "K" : image?.likes}</p>
                                    {!theme ? <img src={like} alt="user loading" /> : <img src={likew} alt="user loading" />}
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Home