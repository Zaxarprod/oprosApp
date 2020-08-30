import React from "react"
import style from "./Header.module.scss";
import {Col, Row} from "antd";
import {Nav} from "../nav/Nav";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";

export const Header = () => {
    return (
        <Row className={style.header}>
            <Col xs={2} sm={4} md={2} lg={2} xl={2} className={style.brandBlock}>
                <h1>Opros</h1>
            </Col>
            <Col xs={20} sm={16} md={20} lg={20} xl={20} className={style.navBlock}>
                <Nav />
            </Col>
            <Col xs={2} sm={4} md={2} lg={2} xl={2} className={style.authBlock}>
                <UserOutlined />
            </Col>
        </Row>
    )
}