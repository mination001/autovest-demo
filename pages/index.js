export default function Home() {
  return (
    <div style={{fontFamily:"Arial", padding:"40px", background:"#f4f6f9", minHeight:"100vh"}}>
      
      <h1 style={{fontSize:"40px"}}>AutoVest</h1>
      <p style={{color:"gray"}}>Premium Car Investment Platform (Demo)</p>

      <hr style={{margin:"30px 0"}}/>

      <h2>🔥 Featured Investment Cars</h2>

      <div style={{marginTop:"20px", padding:"20px", background:"white", borderRadius:"10px"}}>
        <h3>Lamborghini Huracán</h3>
        <p>Expected ROI: 18%</p>
        <p>Price Per Share: $250</p>
        <button style={{padding:"10px 20px"}}>Invest Now</button>
      </div>

      <div style={{marginTop:"20px", padding:"20px", background:"white", borderRadius:"10px"}}>
        <h3>Rolls-Royce Cullinan</h3>
        <p>Expected ROI: 15%</p>
        <p>Price Per Share: $300</p>
        <button style={{padding:"10px 20px"}}>Invest Now</button>
      </div>

      <div style={{marginTop:"20px", padding:"20px", background:"white", borderRadius:"10px"}}>
        <h3>Ferrari F8 Tributo</h3>
        <p>Expected ROI: 20%</p>
        <p>Price Per Share: $280</p>
        <button style={{padding:"10px 20px"}}>Invest Now</button>
      </div>

      <p style={{marginTop:"50px", color:"gray"}}>
        © 2026 AutoVest Demo Platform
      </p>

    </div>
  )
  }
