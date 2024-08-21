import React from 'react'
import './footer.css'

const Footer = () => {

  const sectionCount = 5;
  const subsectionCount = 4;

  return (
    <div className='footer-background'>
      <div className='container-div'>
        <div className='section-container'>
          {[...Array(sectionCount)].map((_, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="section">SECTION {sectionIndex + 1}</h2>
              {[...Array(subsectionCount)].map((_, subsectionIndex) => (
                <p className='subsections' key={subsectionIndex}>Subsection</p>
              ))}
            </div>
          ))}
        </div>
        <div className='logo'>THIS IS THE <div className='large-logo'>LOGO</div></div>
      </div>
      <div className='container-div'>
        <span className='company'>2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
        <div className='socials'>
          <img src='Images/facebook-icon.svg' className='social-icons'/>
          <img src='Images/twitter-icon.svg' className='social-icons'/>
          <img src='Images/instagram-icon.svg' className='social-icons'/>
          <img src='Images/Linkedin-icon.svg' className='social-icons'/>
        </div>
      </div>
    </div>
  )
}

export default Footer



const Sections = () => {
  return (
    <div>
      
    </div>
  )
}