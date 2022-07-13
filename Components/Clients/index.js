import style from './style.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function Clients() {
    return (
        <div className={style.clients} id="testimoni">
            <div className={style.clients_section}>
                <div>
                    <h1>
                        Impact of Indoor Air Pollution on <u>Health</u> <br />
                        
                    </h1>
                    <p>Have you ever thought about how long you want to live? </p>
                </div>
                <div>
                    <Swiper className={style.MySwiper} spaceBetween={30} centeredSlides={true} loop={true} autoplay={{ delay: 3500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={false} modules={[Autoplay,Pagination,Navigation]} >
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>Air pollution is contamination of the indoor or outdoor environment by any chemical, physical or biological agent that modifies the natural characteristics of the atmosphere.</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/who.png" />
                                </div>
                                <p>-WORLD HEALTH ORGANIZATION-</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>They worked hard and showed a great attitude. They removed a large amount of dirt from the dryer vent.</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/avatar3.png" />
                                </div>
                                <p>William Jones</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>According to the U.S. Environmental Protection Agency (EPA) [9], pets can be significant asthma triggers because of dead skin flakes, urine, feces, saliva, and hair </p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/epa.png" />
                                </div>
                                <p>-ENVIRONMENTAL PROTECTION AGENCY-</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>With most Americans spending 90% of their time indoors, indoor air pollution is consistently ranked by EPA as among the top five environmental risks to public health.</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/epa.png" />
                                </div>
                                <p>-ENVIRONMENTAL PROTECTION AGENCY-</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>The technician worked quietly without disturbing our routine! Thank you!</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/avatar4.png" />
                                </div>
                                <p>Lesley Brown</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>Poor indoor air quality costs the US economy more than $10 billion a year by worsening illnesses and allergenic symptoms, and reducing productivity.
                                   Radon is the leading cause of lung cancer among nonsmokers.</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/who.png" />
                                </div>
                                <p>-WORLD HEALTH ORGANIZATION-</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>People who are often most susceptible to the adverse effects of pollution
                                ( the very young, older adults, people with cardiovascular or respiratory disease) tend to spend even more time indoors</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/epa.png" />
                                </div>
                                <p>-ENVIRONMENTAL PROTECTION AGENCY-</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>The service was punctual and specific to my needs. Before and after photos are provided for each vent and units. Highly recommended.</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/avatar3.png" />
                                </div>
                                <p>Ryan Dodson</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>Indoor concentrations of some pollutants have increased in recent decades due to such factors as energy-efficient building construction
                                (when it lacks sufficient mechanical ventilation to ensure adequate air exchange) and increased use of synthetic building materials, 
                                furnishings, personal care products, pesticides, and household cleaners.</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/epa.png" />
                                </div>
                                <p>-ENVIRONMENTAL PROTECTION AGENCY-</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>They handle specialized cleaning material to take care of us and protect themselves. 
                                I appreciate the punctuality and the results.</p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/avatar2.png" />
                                </div>
                                <p>Chloe Peterson</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </div>
    )
}
