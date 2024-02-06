import React from 'react'
import logo from '../assets/About/call.png'

// export default function HeaderOne() {
//   return (
//     <>


//       <h1>Hello</h1>
//       {/* <img src={logo} alt="" srcset="" /> */}
//       <Images src={logo} />

//     </>
//   )
// }


// pages/hello.js or pages/index.js

export default function Hello() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'blue', // Example color
    }}>
      Hello World
    </div>
  );
}
