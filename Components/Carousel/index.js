import React from 'react'
import style from './style.module.css'
import { UncontrolledCarousel } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


  
  const Carousel = () => {
    const items = [
      {
        src:"/img/project-5.png",
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "1",
      },
      {
        src: ('/img/project-6.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "2",
      },
      {
        src: ('/img/project-7.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "3",
      },
      {
        src: ('/img/project-8.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "4",
      },
      {
        src: ('/img/project-9.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "5",
      },
      {
        src: ('/img/project-10.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "6",
      },
      {
        src: ('/img/project-11.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "7",
      },
      {
        src: ('/img/project-12.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "8",
      },
      {
        src: ('/img/project-13.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "9",
      },
      {
        src: ('/img/project-14.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "10",
      },
      {
        src: ('/img/project-15.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "11",
      },
      {
        src: ('/img/project-16.png'),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "12",
      },
    ];


      return (
        <div className={style.section_projects} id="gallery">
        <h1>
            <u>Gallery</u>
        </h1>
        <div className={style.projects}>
            <UncontrolledCarousel items={items} keyboard={false} />
        </div>
    </div>
      )
  }
  
  export default Carousel;