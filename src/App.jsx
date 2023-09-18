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
      <div className='Container'>

        <div className='firstbatch'>
        <div className='subbatchOne'>  
       <article className='block1'>
         <div className='header'>
          <img src={imageOne} alt="image of a man"  />
          <div>
          <h4>Daniel Clifford</h4>
          <p>Verified Graduate</p>
          </div>
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
       <div className='header'>
          <img src={imageTwo} alt="image of a man"  />
          <div>
          <h4>Jonathan Walters</h4>
          <p>Verified Graduate</p>
          </div>
         </div>

         <h1>The team was very supportive and kept me motivated</h1>

         <p>"I started as a total newbie with virtually no coding skills. I now work as a mobile 
          engineer for a big company. This was one of the best investments I've made in myself."
         </p>
       </article>
        </div>
       
      <div className='subbatchTwo'>
       <article className='block4'>
       <div className='header'>
          <img src={imageFour} alt="image of a man"  />
          <div>
          <h4>Jeanette Harmon</h4>
          <p>Verified Graduate</p>
          </div>
         </div>

         <h1>An overall wonderful and rewarding experience</h1>

         <p>"Thank you for the wonderful experience! I now have a job i really enjoy, and make a good living while
          doing something i love."
         </p>
       </article>

       <article className='block5'>
       <div className='header'>
          <img src={imageFive} alt="image of a man"  />
          <div> 
          <h4>Patrick Abrams</h4>
          <p>Verified Graduate</p>
           </div>
         </div>

         <h1>Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was easy.
         </h1>

         <p>"The staff seem genuinely concerned about my progress which i find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal attention you need from an incredible
          community of smart and amazing people."
         </p>
       </article>
       </div>
      </div>

      <article className='block3'>
       <div className='header'>
          <img src={imageThree} alt="image of a man"  />
          <div>
          <h4>Kira Whittle</h4>
          <p>Verified Graduate</p>
          </div> 
         </div>

         <h1>Such a life-changing experience. Highly recommended!</h1>

         <p>"Before joining the bootcamp. I've never written a line of code. I needed 
          some structure from professionals who can help me learn programming step by step.
          I was encouraged to enroll by a former student of theirs who can only say wonderful
          things about the program. The entire curriculum and staff did not disappoint. They were
          very hands-on and i never had to wait long for assistance. The agile team project, in particular,
          was outstanding. It took my learning to the next level in a way that no tutorial could ever have.
          In fact, I've often referred to it during interviews as an example of my development experience. 
          It certainly helped me land a job as a full-stack developer after recieving multiple offers. 100% recommend!"
         </p>
       </article>

      </div>
      
    </>
  )
}

export default App;
