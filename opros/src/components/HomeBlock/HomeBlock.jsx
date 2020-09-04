import React from "react"
import style from './HomeBlock.module.scss'
import {Col, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getCarouselSelector} from "../../redux/home-selector";
import {nextCarouselSlideTC} from "../../redux/home-reducer";

export const HomeBlock = () => {
    let carousel = useSelector(getCarouselSelector)
    let dispatch = useDispatch()
    let nextSlide = () => {
        debugger
        dispatch(nextCarouselSlideTC())
    }
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className={style.homeBlock}>
                    <div className={style.carousel} onClick={nextSlide}>
                        {
                            carousel.map((slide)=>{
                                return (
                                    <div>
                                        <img src={slide.imgSrc} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Col>
        </Row>
    )
}