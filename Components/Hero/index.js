import Button from '../Button'
import style from './style.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'
/* import ReactPlayer from 'react-player' */
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


export default function Hero() {
    return (
        <div>
            <div className={style.hero} >
                <div className={style.col_1}>
                    <div>
                        <h1 style={{alignItems:'left'}}>
                        HEALTH COME FIRST<br/><br/>
                        Schedule a technician to clean your Air Ducts, Dryer Vent,
                         or Chimney Sweep.
                        </h1>
                        {/* <Button text="Start Now"/> */}
                    </div>
                </div>
                
                <div className={style.col_2}>
                {/* <Image src="/img/video.png" alt="Hero 1" width={940} height={788} /> */}
                    <ReactPlayer
                        url={'https://youtu.be/1bA9yYRI0V8'}
                        width="100%"
                        height="100%"
                        controls={false}
                        playing={true}
                        loop={true}
                        muted={true}
                        volume={0}
                        />
                </div>
            </div>
        </div>
    )
}