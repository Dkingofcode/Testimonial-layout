import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import imageOne from './assets/image-daniel.jpg';
import imageTwo from './assets/image-jeanette.jpg';
import imageThree from './assets/image-jonathan.jpg';
import imageFour from './assets/image-kira.jpg';
import imageFive from './assets/image-patrick.jpg';
import './App.css';

function App() {
  

  return (
    <>
      <div>
       <h1>Testimonials</h1>

       <article className='block1'>
         <div>
          <img src={imageOne} alt="image of a man"  />
          <h4>Daniel Clifford</h4>
          <p>Verified Graduate</p>
         </div>

         <h1>I recieved a job offer mid-course, and the subjects i learned were current, 
          if not more so, in the company i joined. I honestly feel i got every penny's worth.
         </h1>

         <p>"I was an EMT for many years before i joined the bootcamp. I've been looking to make a 
          transition and have heard some people who had an amazing experience here. I signed up for 
          the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 
          12 weeks was the best - and most grueling - time of my life. Since completing the course i've 
          successfully switched careers, working as a Software Engineer at a VR startup."
         </p>
       </article>

       <article className='block2'>
       <div>
          <img src={imageTwo} alt="image of a man"  />
          <h4>Jonathan Walters</h4>
          <p>Verified Graduate</p>
         </div>

         <h1>The team was very supportive and kept me motivated</h1>

         <p>"I started as a total newbie with virtually no coding skills. I now work as a mobile 
          engineer for a big company. This was one of the best investments I've made in myself."
         </p>
       </article>

       <article className='block3'>
       <div>
          <img src={imageThree} alt="image of a man"  />
          <h4>Kira Whittle</h4>
          <p>Verified Graduate</p>
         </div>

         <h1>Such a life-changing experience. Highly recommended!</h1>

         <p>"Before joining the bootcamp. I've never written a line of code. I needed 
          some structure from professionals who can help me learn programming 
         </p>
       </article>


       <article className='block4'>
       <div>
          <img src={imageFour} alt="image of a man"  />
          <h4>Jeanette Harmon</h4>
          <p>Verified Graduate</p>
         </div>
       </article>

       <article className='block5'>
       <div>
          <img src={imageFive} alt="image of a man"  />
          <h4>Patrick Abrams</h4>
          <p>Verified Graduate</p>
         </div>
       </article>
      </div>
      
    </>
  )
}

export default App;
