import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='mainBox' style={{ background: "white" }}>
        <div className='results box'>
          <p>Results</p>
          <div className='grade'>
            <div>76</div>
            <div>of 100</div>
          </div>
        </div>
        <div className='summary box'>
          <p>summary</p>
        </div>
      </div>
    </main>
  )
}
