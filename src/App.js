import React,{Component} from "react"
import "./App.scss"
import Footer from "./comp/Footer"
import Header from "./comp/Header"
import AboutMe from "./comp/AboutMe"
import Home from "./comp/Home.js"
import BodyStuff from "./comp/BodyStuff"
import {Helmet} from 'react-helmet'
import Unity, {UnityContent} from 'react-unity-webgl'
const TITLE = 'Krenar\'s webpage' 

class App extends Component {
  constructor(){
    super()
    this.state = {
      page: 'Home',
      prevPage: 'h',
      transition:false
    }
  }

  Handler = (e,p) => {
    if(p===this.state.page) 
      return;
    this.setState({
      page:p,
      transition:true,
      prevPage:this.GetPrevPage()
    })
  } 
  GetPrevPage = () => {
   return (
      this.state.page==='About'?
        'a': this.state.page==='Projects'?
        'p': this.state.page==='Home'?
        'h': null 
   ) 
  }

  render(){
    const unityContent = new UnityContent(
		"Build/web7.json",
		"Build/UnityLoader.js"
	)
    let aniState = 'tape-ani' + this.state.prevPage
    aniState += this.GetPrevPage() 

    return( 
        <div className='webbackground'> 
          <Helmet>
            <title> {TITLE} </title>
          </Helmet>

        <Header handle={this.Handler}/>
        <div 
          className = { this.state.transition ?
            'tape-animation ' + aniState 
            : 'tape ' + this.state.page}
          onAnimationEnd={() => this.setState({
            transition:false
          })}
        >
          <Home />
          <AboutMe />
          <BodyStuff content={this.state.page === "Projects" ? <Unity unityContent={unityContent}/> : null}/>
        </div>
        
        <Footer />
      </div>
    )

  }

}
export default App
