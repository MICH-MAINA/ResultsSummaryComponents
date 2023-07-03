import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='mainBox' style={{ background: "white" }}>
        <div className='results box'>
          <p style={{color:'#D3D3F5'}}>Your Result</p>
          <div className='grade'>
            <div className='value1'>76 <span></span></div>
            <div className='value2' style={{color:'#A9A9A9', fontSize:15}}>of 100</div>
          </div>
          <div className='gradeDes'>
            <div><p style={{fontSize: 20, fontWeight:600}}>Great</p></div>
            <div><p style={{color:'#D3D3F5', fontSize:15}}>You scored higher than 65% of the people who have taken this test</p></div>
          </div>
        </div>
        <div className='summary box'>
          <p>Summary</p>
        </div>
      </div>
    </main>
  )
}
