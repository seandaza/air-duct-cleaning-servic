import style from './style.module.css';
/* import Button from '../Button'; */
import { useState } from 'react';

export default function Projects() {
    const [appState, changeState] = useState({
        activeObject: null,
        objects: [
            {
                id: 1,
                image: "project-1.png",
                text: "Chimney Sweep",
            },
            {
                id: 2,
                image: "project-2.png",
                text: "Dryer Vents",
            },
            {
                id: 3,
                image: "project-3.png",
                text: "Air Ducts",
            },
            {
                id: 4,
                image: "project-4.png",
                text: "Air Ducts",
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
        <div className={style.section_projects} id="projects">
            <h1>
                <u>Projects</u>
            </h1>
            <div className={style.projects}>
                {appState.objects.map((item, key) => (
                    <div className={`${style.project} ${appState.objects[key] == appState.activeObject ? style.active : ""} ${(key == 0 ? `${firstItemActive ? style.active : ""}` : "")}`} style={{ backgroundImage: `url(/img/${item.image})` }} key={key} onMouseOver={() => { toggleActive(key); setFirstItemActive(false) }} >
                        <h2>{item.text}</h2>
                        {/* <Button text="View" /> */}
                    </div>
                ))}
            </div>
        </div>
    )
}