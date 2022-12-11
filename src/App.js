import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
 
  state = {
    progress: 0
  }

  // had to make arrow func to avail this. property
  setProgress = (progress)=> {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
          color='#f11946' 
          progress={this.state.progress}/>
          {/* <News setProgress={this.setProgress}  pageSize={20} country="in" category="sports"/> */}
          <Routes>
            <Route exact path="/" element = {<News setProgress={this.setProgress}  key="general" pageSize = {20} country = "in" category = "general"/>}/>
            <Route exact path="/general" element = {<News setProgress={this.setProgress}  key="general" pageSize={20} country="in" category="general"/>}/>
            <Route exact path="/entertainment" element = {<News setProgress={this.setProgress}  key="entertainment" pageSize={20} country="in" category="entertainment"/>}/>
            <Route exact path="/bussiness" element = {<News setProgress={this.setProgress}  key="bussiness" pageSize={20} country="in" category="bussiness"/>}/>
            <Route exact path="/health" element = {<News setProgress={this.setProgress}  key="health" pageSize={20} country="in" category="health"/>}/>
            <Route exact path="/science" element = {<News setProgress={this.setProgress}  key="science" pageSize={20} country="in" category="science"/>}/>
            <Route exact path="/sports" element = {<News setProgress={this.setProgress}  key="sports" pageSize={20} country="in" category="sports"/>}/>
            <Route exact path="/technology" element = {<News setProgress={this.setProgress}  key="technology" pageSize={20} country="in" category="technology"/>}/>

          </Routes>
        </Router>
      </div>
    )
  }
}


