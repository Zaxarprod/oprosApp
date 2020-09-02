import React from "react"
import style from "./CarouselBlock.module.scss"
import {Col, Row} from "antd"
import { Carousel } from 'antd'
import { Button} from 'antd'
import {useSelector} from "react-redux";
import {getSliders, getSlidersSelector} from "../../redux/home-selector";

export const CarouselBlock = () => {
    const sliders = useSelector(getSliders)
    return (
        <Row className={style.carouselBlock}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className={style.brandBlock}>
                <Carousel autoplay>
                    {
                        sliders.map((slide)=>{
                            return (
                                <div>
                                    <div className={style.slide}>
                                        <h1>
                                            {slide.header}
                                        </h1>
                                        <p>
                                            Равным образом консультация с широким активом требуют определения и<br/>
                                            уточнения модели развития. Повседневная практика показывает, что укрепление и<br/>
                                            развитие структуры обеспечивает широкому кругу (специалистов) участие в<br/>
                                            формировании дальнейших направлений развития.<br/>
                                        </p>
                                        <Button size={'large'}>Default</Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </Col>
        </Row>
    )
}
