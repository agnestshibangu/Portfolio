import React from 'react'
import LetterA from '../Components/images/landingpage/letterA.svg'
import LetterG from '../Components/images/landingpage/letterG.svg'
import LetterN from '../Components/images/landingpage/letterN.svg'
import LetterE from '../Components/images/landingpage/letterE.svg'
import LetterS from '../Components/images/landingpage/letterS.svg'
import LetterT from '../Components/images/landingpage/letterT.svg'
import LetterSgradient from '../Components/images/landingpage/letterSgradient.svg'
import LetterH from '../Components/images/landingpage/letterH.svg'
import LetterI from '../Components/images/landingpage/letterI.svg'
import LetterB from '../Components/images/landingpage/letterB.svg'
import LetterNreversegradient from '../Components/images/landingpage/letterNreversegradient.svg'
import LetterU from '../Components/images/landingpage/letterU.svg'
import '../style/landingpage.scss'
import Front from '../Components/Front'
import Reactproject from '../Components/Reactproject'
import Backendproject from '../Components/Backendproject'
import Artisticproject from '../Components/Artisticproject'



export default function LandingPage() {
  return (

    <div className='page-body'>

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
              <img alt="" src={LetterSgradient} className="letter anim-8" />
              <img alt="" src={LetterH} className="letter letter-h anim-7" />
              <img alt="" src={LetterI} className="letter letter-i anim-6" />
              <img alt="" src={LetterB} className="letter anim-5" />
              <img alt="" src={LetterA} className="letter anim-4" />
              <img alt="" src={LetterNreversegradient} className="letter anim-3" />
              <img alt="" src={LetterG} className="letter anim-2" />
              <img alt="" src={LetterU} className="letter anim-1" />
            </div>

          </div>
          <div className="description-box">
            <div className='underscore-animated' />
            <p className="job-description">front-end &amp; graphic design</p>

          </div>


        </div>

        <div className='vertical-box'>

          <div className='vertical-line' />

          <div className='vertical-line-round round1' />
          <div className='vertical-line-round round2' />
          {/* } <div className='vertical-line-round round3' />
          <div className='vertical-line-round round4' />
          <div className='vertical-line-round round5' />
          <div className='vertical-line-round round6' /> */}

        </div>

      </div>


      <div className='main'>
        
        <Reactproject />

        <Front />

        <Backendproject />

        <Artisticproject />


      </div>





    </div>











  )
}
