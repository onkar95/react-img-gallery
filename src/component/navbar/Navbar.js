import React, { useContext } from 'react'
import DataContext from '../context'
import './nav.css'
import search from "../../Assets/search.png"
import close from "../../Assets/close.png"


const Navbar = () => {
    const { searchVal, setSearchVal, theme, setTheme, setreset, reset } = useContext(DataContext)

    const handelclear = () => {
        setreset(!reset)
        setSearchVal("")
    }
    return (
        <div className='navbar'>
            <div className='nav_text'>
                <h2>Image Gallery</h2>
            </div>
            <div className='input_div'>
                <img className='search' src={search} alt="loading" />
                <input className='input' type="string" value={searchVal} onChange={(a) => setSearchVal(a.target.value)} placeholder="Search images here" />
                <img onClick={() => handelclear()} className='close_nav' src={close} alt="loading" />
            </div>
            <div className='theme_box'>
                <label className='theme_txt'>{!theme ? "Dark mode" : "light mode"}</label>
                <label className="switch" >
                    <input type="checkbox" value={theme} onClick={() => setTheme(!theme)} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default Navbar