import React from "react"
import style from "../header/Header.module.scss";
import {Col, Row} from "antd";

export const CarouselBlock = () => {
    return (
        <Row className={style.carouselBlock}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className={style.brandBlock}>

            </Col>
        </Row>
    )
}
