import React from 'react'
import style from './App.module.scss'
import { Row, Col } from 'antd'
import {Header} from "./components/header/Header";
import Route from "react-router-dom/es/Route";
import {Home} from "./pages/home/Home";

const App = () => {
  return (
      <div className={style.app}>
          <Header />
          <Route path={'/'} component={Home}/>
      </div>
  )
}

export default App
