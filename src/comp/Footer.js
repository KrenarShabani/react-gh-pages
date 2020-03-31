import React from "react"

function Footer(){
  const github = "https://github.com/KrenarShabani"
  const email = "KrenarShabani@gmail.com"
  const ryu = 'https://www.emugifs.net/wp-content/uploads/2019/02/Super-Street-Fighter-II-Turbo-Arcade-Video-Game-by-Capcom-1994-Ryu-Character-Sprite-Animated-GIF-3.gif'
  return(
    <footer className  = 'footer'>
      <a 
        className="github"
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
      > My GitHub 
        </a>
      {/*<img src={ryu} className='ryu'/>*/}
      <p
        className = "email egreen"
      >{email} </p>
    </footer>
  ) 
}
export default Footer
