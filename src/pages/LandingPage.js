import React from 'react'
import LetterA from '../Components/images/landingpage/letterA.svg'
import LetterG from '../Components/images/landingpage/letterG.svg'
import LetterN from '../Components/images/landingpage/letterN.svg'
import LetterE from '../Components/images/landingpage/letterE.svg'
import LetterS from '../Components/images/landingpage/letterS.svg'
import LetterT from '../Components/images/landingpage/letterT.svg'
import LetterH from '../Components/images/landingpage/letterH.svg'
import LetterI from '../Components/images/landingpage/letterI.svg'
import LetterB from '../Components/images/landingpage/letterB.svg'
import LetterNreversegradient from '../Components/images/landingpage/letterNreversegradient.svg'
import LetterU from '../Components/images/landingpage/letterU.svg'
import '../style/landingpage.scss'
import Front from '../Components/Front'
import Reactproject from '../Components/Reactproject'
// import Artisticprojects from '../Components/Artisticprojects'
import Contact from '../Components/Contact'



// scroll bar animation //

const scrollProgressElement = document.querySelector("#scroll-progress");

function scrollProgress() {
  const totalheightOfWebPAge = document.body.scrollHeight; 
  const currentDistanceFromTop = document.documentElement.scrollTop;

  const windowHeight = document.documentElement.clientHeight;

  const scrolledPercentage = 
  (currentDistanceFromTop / (totalheightOfWebPAge - windowHeight )) * 100; 

  scrollProgressElement.style.width = Math.round(scrolledPercentage) + '%';

}

document.addEventListener("scroll", scrollProgress);

// rounds animation //


window.addEventListener('scroll', reveal);

function reveal(){
  let reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
      reveals[i].classList.remove('unactive');
    } else {
      reveals[i].classList.remove('active');
      reveals[i].classList.add('unactive');
      
    }

  }

}


export default function LandingPage() {
  return (

    <div className='page-body'>

           {/* scroll bar animation */}

      <div class="scroll-progress" id="scroll-progress"></div> 
      
      


      <div className='top-page'>

    


        <div className="name-presentation-box">
          <div className="letter-container">
            <div className='first-name group-name'>
              <img alt="" src={LetterA} className="letter anim-14" />
              <img alt="" src={LetterG} className="letter anim-13" />
              <img alt="" src={LetterN} className="letter anim-12" />
              <img alt="" src={LetterE} className="letter anim-11" />
              <img alt="" src={LetterS} className="letter anim-10" />
            </div>

            <div className='last-name group-name'>
              <img alt="" src={LetterT} className="letter anim-9" />
              <img alt="" src={LetterS} className="letter anim-8" />
              <img alt="" src={LetterH} className="letter letter-h anim-7" />
              <img alt="" src={LetterI} className="letter letter-i anim-6" />
              <img alt="" src={LetterB} className="letter anim-5" />
              <img alt="" src={LetterA} className="letter anim-4" />
              <img alt="" src={LetterN} className="letter anim-3" />
              <img alt="" src={LetterG} className="letter anim-2" />
              <img alt="" src={LetterU} className="letter anim-1" />
            </div>

          </div>
          <div className="description-box">
            <div className='underscore-animated' />
            <p className="job-description">Tech driven career portfolio</p>

          </div>


        </div>

        <div className='vertical-box'>

          <div className='vertical-line' />

          <div className='vertical-line-round reveal round1' />
          <div className='vertical-line-round reveal round2' />
          <div className='vertical-line-round reveal round3' />
          <div className='vertical-line-round reveal round4' />
        

        </div>

      </div>


      <div className='main'>

        <Reactproject />

        <Front />
 
        {/* <Artisticprojects /> */}
 
        <Contact />

      </div>

    </div>

  )
}
