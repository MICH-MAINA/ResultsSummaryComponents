'use client'
import { useState } from 'react';
import data from './data.json';

export default function Home() {
  const [buttonStyle, setButtonStyle] = useState({});

  const handleClick = () =>{
    setButtonStyle({
      backgroundColor:'hsl(224, 30%, 27%)',
      transition:'1s ease-out'
    })
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='mainBox' style={{ background: "white" }}>
        <div className='results box'>
          <p style={{ color: '#D3D3F5', textAlign: "center", fontSize: 20 , fontWeight:900}}>Your Result</p>
          <div className='grade'>
            <div className='value1'>76 <span></span></div>
            <div className='value2' style={{ color: '#A9A9A9', fontSize: 15 }}>of 100</div>
          </div>
          <div className='gradeDes'>
            <div><p style={{ fontSize: 20, fontWeight: 600 }}>Great</p></div>
            <div><p style={{ color: '#D3D3F5', fontSize: 15 }}>You scored higher than 65% of the people who have taken this test</p></div>
          </div>
        </div>
        <div className='summary box'>
          <p style={{ fontSize: 20, fontWeight:900 }}>Summary</p>

          {data.map((item) =>
            <div className='resultsSummary' key={item.category} style={item.background}>

              <div className='reaction left'>
                <img src={item.icon} />
                <div><p style={item.color}>{item.category}</p></div>
              </div>
              <div className='reaction right'>
                <div>{item.score}<span className='mark' style={{ paddingLeft: 8, color: '#A9A9A9' }}>  /100</span></div>
              </div>
            </div>
          )}
          <div>
            <button onClick={handleClick} style={buttonStyle}>Continue</button>
          </div>
        </div>
      </div>
    </main>
  )
}
