import style from './style.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../Button'

export default function Step() {

    const [appState, changeState] = useState({
        activeObject: null,
        objects: [
            {
                id: 1,
                image: <i class="fa-solid fa-pen-to-square"></i>,
                image_active: "edit_active.svg",
                text: "SCHEDULE A CLEANING SERVICE",
            },
            {
                id: 2,
                image: <i class="fa-solid fa-hand-fist"></i>,
                image_active: "edit_active.svg",
                text: "IMPROVE AIR QUALITY",
            },
            {
                id: 3,
                image: <i class="fa-solid fa-hand-sparkles"></i>,
                image_active: "edit_active.svg",
                text: "ENJOY A POLLUTION-FREE ENVIRONMENT",
            },
        ]
    })

    function toggleActive(key) {
        changeState({
            ...appState,
            activeObject: appState.objects[key]
        }) 
    }

    const [firstItemActive, setFirstItemActive] = useState(true)

    return (
        <div className={style.step}>
            
            <Image src="/img/step-1.png" alt="Step 1" width={940} height={788} />
            
            <div>
                <h1 style={{margin:0}}>
                    Simple Action,<br/>
                    Big Change
                </h1>
                <p>
                Today you can decide what kind of life you want to live with your family. Choose the best option, the one that guarantees a healthy and long life. Follow the steps below.
                </p>
                <div className={style.box_steps}>
                    {appState.objects.map((item, key) => (
                        <div className={` ${style.box} ${appState.objects[key]==appState.activeObject ? style.active : "" } ${(key==0 ? `${firstItemActive ? style.active: ""  }`: "" )} `} onMouseOver={()=>{toggleActive(key); setFirstItemActive(false)}} key={key}>
                        {item.image}
                        <p>{item.text}</p>
                        </div>
                    )
                    )}
   
                </div>
                {/* <Button text="Contact US"  /> */}
            </div>
        </div>
    )
}