import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../public/css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div class="container" >
    <img class="blood-orange" 
      src="https://static01.nyt.com/images/2018/08/26/magazine/26mag-Hynes-slide-ZBPE/26mag-Hynes-slide-ZBPE-superJumbo.jpg" />
    <h2>Devonté Hynes</h2>
  </div>

  <div class="album-container">

    <div class="album-inner">
      <div class="album-info">
        <img class="album-cover"
        src="https://upload.wikimedia.org/wikipedia/en/9/97/Blood_Orange_Coastal_Grooves_album_cover.jpg"/>
      </div>
      <h3>Coastal Grooves &#40;2011&#41;</h3>
  
      <details> 
        <summary> See Tracklist
  
        </summary>
        1. "Forget It" 3:56 <br/>
        2. "Sutphin Boulevard" 3:33 <br/>
        3. "I'm Sorry We Lied" 4:00 <br/>
        4. "Can We Go Inside Now?" 3:51 <br/>
        5. "S'cooled" 3:10 <br/>
        6. "Complete Failure" 3:35 <br/>
        7. "Instantly Blank (The Goodness)" 2:53 <br/>
        8. "The Complete Knock" 5:03 <br/>
        9. "Are You Sure You're Really Busy?" 4:21 <br/>
        10. "Champagne Coast" 4:52 <br/>
        11. "Said No" (iTunes bonus track) 4:54
      </details>
    </div>

    <div class="album-inner">
      <div class="album-info">
        <img class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/d/d0/Negro_Swan.jpg"/>
      </div>
      <h3>Negro Swan &#40;2018&#41;</h3>
      <details>
        <summary> See Tracklist</summary>
        1.	"Orlando"	3:03 <br/>
        2.	"Saint"	3:12 <br/>
        3.	"Take Your Time" 2:51 <br/>
        4.	"Hope" (featuring Puff Daddy and Tei Shi) 4:00 <br/>
        5.	"Jewelry" 4:32 <br/>
        6.	"Family" (featuring Janet Mock)	0:42 <br/>
        7.	"Charcoal Baby" 4:02 <br/>
        8.	"Vulture Baby" 1:14 <br/>
        9.	"Chewing Gum" (featuring ASAP Rocky and Project Pat) 4:24 <br/>
        10.	"Holy Will" (featuring Ian Isiah) 4:22 <br/>
        11.	"Dagenham Dream"	2:45 <br/>
        12.	"Nappy Wonder"	2:38 <br/>
        13.	"Runnin'" (featuring Georgia Anne Muldrow) 3:55 <br/>
        14.	"Out of Your League" (featuring Steve Lacy) 2:21 <br/>
        15.	"Minetta Creek"	1:58 <br/>
        16.	"Smoke"	3:33 <br/>
      </details>
    </div>

    <div class="album-inner">
      <div class="album-info">
        <img class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/b/b4/Angel%27s_Pulse.jpg"/>
      </div>
      <h3>Angels Pulse &#40;2011&#41;</h3>
      <details>
        <summary> See Tracklist
        </summary>
        1. "Forget It" 3:56 <br/>
        2. "Sutphin Boulevard" 3:33 <br/>
        3. "I'm Sorry We Lied" 4:00 <br/>
        4. "Can We Go Inside Now?" 3:51 <br/>
        5. "S'cooled" 3:10 <br/>
        6. "Complete Failure" 3:35 <br/>
        7. "Instantly Blank (The Goodness)" 2:53 <br/>
        8. "The Complete Knock" 5:03 <br/>
        9. "Are You Sure You're Really Busy?" 4:21 <br/>
        10. "Champagne Coast" 4:52 <br/>
        11. "Said No" (iTunes bonus track) 4:54
      </details>
    </div>


  </div>
    </>
  )
}

export default App
