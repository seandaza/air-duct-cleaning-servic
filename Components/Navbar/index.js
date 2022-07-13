import style from './style.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { AppBar } from '@material-ui/core';

export default function Navbar() {

    const [offCanvas, setOffCanvas] = useState(false)
   
    const link = {
        whatsapp: "https://wa.me/17186967796?text=Hi!,%20I'%20am%20interested%20in%20your%20services.",
        instagram: "https://www.instagram.com/airductcleaningservicesnewyork/?igshid=YmMyMTA2M2Y%3D",
        facebook: "https://www.facebook.com/Airductcleaningservicesnewyork-104968245496070"
    }

/*     const hideHeader = () => {
        if (window.scrollY > 66) {
            setShow(true);
        } else {
            setShow(false);
        }
    } */
 
/*     useEffect(() => { 
        window.addEventListener("scroll",hideHeader);
        return () => {
            window.removeEventListener("scroll",hideHeader);
        }
    }, []) */

    return (
        <>
            <AppBar className={`${style.navbar}`}>
            <nav elevation={0} className={style.nav}>
                {/* <a href="">Air Duct Cleaning</a> */}
                <Image src="/img/logo.png" alt="Airduct Logo" width={100} height={100}/>                            
                <div id="icon-menu">
                    <i style={{ cursor: "pointer", color: "black" }} onClick={() => setOffCanvas(!offCanvas)} className={`${style.icon} ${offCanvas ? style.active : ""}`}><i className="fa-solid fa-bars"></i></i>
                </div>
            </nav>
            </AppBar>
            <div className={`${style.canvas_menu} ${offCanvas ? style.active : ""}`}>
{/*                 <div className={style.close_icon}>
                    <i onClick={() => setOffCanvas(false)} className="fa-solid fa-xmark"></i>
                </div> */}
                <div className={style.canvas_content}>
                    <div className={style.social}>
                        <h4>Social</h4>
                        <div className={style.icons}>
                            <p className={style.instagram}><i onClick={() => window.open(link.instagram) && setOffCanvas(!offCanvas)}  className="fa-brands fa-instagram"></i><span onClick={() => window.open(link.instagram) && setOffCanvas(!offCanvas)} >&nbsp; Instagram</span></p><br/>
                            <p className={style.facebook}><i onClick={() => window.open(link.facebook) &&  setOffCanvas(!offCanvas)} className="fa-brands fa-facebook-f"></i><span onClick={() => window.open(link.facebook) &&  setOffCanvas(!offCanvas)}>&nbsp; Facebook</span></p><br/>
                            <p className={style.whatsapp}><i onClick={() => window.open(link.whatsapp) && setOffCanvas(!offCanvas)} className="fa-brands fa-whatsapp"></i><span onClick={() => window.open(link.whatsapp) && setOffCanvas(!offCanvas)}>&nbsp; WhatsApp</span></p><br/>
                        </div>
                    </div>
                    <div className={style.menu}>
                        <h4>Menu</h4>
                        <div className={style.menu_items}>
                            <p style={{marginTop: 0}}><a onClick={() => setOffCanvas(!offCanvas)} href="#home">Home</a></p>
                            <p><a onClick={() => setOffCanvas(!offCanvas)} href="#featured">Featured</a></p>
                            <p><a onClick={() => setOffCanvas(!offCanvas)} href="#projects">Projects</a></p>
                            <p><a onClick={() => setOffCanvas(!offCanvas)} href="#gallery">Gallery</a></p>
                            <p><a onClick={() => setOffCanvas(!offCanvas)} href="#contact us">Contact Us</a></p>
                        </div>
                    </div>
                </div>
                <div className={style.email}>
                    <p>Get in touch</p>
                    <h2><u style={{fontSize:"15px"}}>airductcleaningservicesnewyork@gmail.com</u></h2>
                </div>
            </div>
        </>
    )
}
