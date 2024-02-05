
// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
// //       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
// //         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
// //           Get started by editing&nbsp;
// //           <code className="font-mono font-bold">src/app/page.js</code>
// //         </p>
// //         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
// //           <a
// //             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
// //             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             By{" "}
// //             <Image
// //               src="/vercel.svg"
// //               alt="Vercel Logo"
// //               className="dark:invert"
// //               width={100}
// //               height={24}
// //               priority
// //             />
// //           </a>
// //         </div>
// //       </div>

// //       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
// //         <Image
// //           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
// //           src="/next.svg"
// //           alt="Next.js Logo"
// //           width={180}
// //           height={37}
// //           priority
// //         />
// //       </div>

// //       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
// //         <a
// //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Docs{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Find in-depth information about Next.js features and API.
// //           </p>
// //         </a>

// //         <a
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Learn{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Learn about Next.js in an interactive course with&nbsp;quizzes!
// //           </p>
// //         </a>

// //         <a
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Templates{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Explore starter templates for Next.js.
// //           </p>
// //         </a>

// //         <a
// //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Deploy{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
// //             Instantly deploy your Next.js site to a shareable URL with Vercel.
// //           </p>
// //         </a>
// //       </div>
// //     </main>
// //   );
// // }


// // pages/hello.js or pages/index.js

// // export default function Hello() {
// //   return (
// //     <div style={{
// //       display: 'flex',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       height: '100vh',
// //       fontSize: '24px',
// //       fontWeight: 'bold',
// //       color: 'red', // Example color
// //     }}>
// //       Hello World
// //     </div>
// //   );
// // }



// // export default function HomePage() {
// //   return (

// // <header>


// //   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
// //     <div className="sm:flex sm:items-center sm:justify-between">
// //       <div className="text-center sm:text-left">
// //         <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Barry!</h1>

// //         <p className="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
// //       </div>

// //       <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
// //         <button
// //           className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
// //           type="button"
// //         >
// //           <span className="text-sm font-medium"> View Website </span>

// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-4 w-4"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //             strokeWidth="2"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
// //             />
// //           </svg>
// //         </button>

// //         <button
// //           className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
// //           type="button"
// //         >
// //           Create Post
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // </header>

// // );
// // } 


// // pages/hello.js or pages/index.js

  
  
//   // -----------------------------
  
//   import React, { useEffect, useRef } from 'react';
//   import img1 from './assets/pasrtner1.png';
//   import img2 from './assets/About/call.png';
//   <>{
//   // import img2 from '../images/company2.png';
//   // import img3 from '../images/company3.png';
//   // import img4 from '../images/company4.png';
//   // import img5 from '../images/company5.png';
//   // import img6 from '../images/company6.png';
//   // import img7 from '../images/company7.png';
//   // import img8 from '../images/company8.png'; 
//   } </>
  
  
//   const LogoSlider = () => {
//     const sliderRef = useRef();
  
//     useEffect(() => {
//       const slider = sliderRef.current;
//       let isSliding = true;
  
//       const slide = () => {
//         if (isSliding) {
//           isSliding = false;
//           const firstChild = slider.firstElementChild;
//           const lastChild = slider.lastElementChild;
//           slider.style.transition = 'transform 0.5s';
//           slider.style.transform = `translateX(-100%)`;
  
//           setTimeout(() => {
//             slider.insertBefore(lastChild, firstChild);
//             slider.style.transition = 'none';
//             slider.style.transform = 'translateX(0)';
//             isSliding = true;
//           }, 500);
//         }
//       };
  
//       const interval = setInterval(slide, 3000);
  
//       return () => {
//         clearInterval(interval);
//       };
//     }, []);
  
//     return (
//       <div
//         style={{
//           display: 'flex',
//           overflow: 'hidden',
//           width: '100%',
//           height: 'auto',
//         }}
//         ref={sliderRef}
//       >
//         <div
//           style={{
//             display: 'flex',
//             width: '200%',
//             height: 'auto',
//             transition: 'transform 0.5s',
//           }}
//         >
//           <img src={img1} alt="partner1" />
//           <img src={img2} alt="call" />
//          <> {/* <img src={img3} alt="company3" />
//           <img src={img4} alt="company4" />
//           <img src={img5} alt="company5" />
//           <img src={img6} alt="company6" />
//           <img src={img7} alt="company7" />
//           <img src={img8} alt="company8" /> */}</>
//         </div>
//       </div>
//     );
//   };
  
//   export default function IndexPage() {
//     return (
//       <div>
//         <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
//           Takaful Products Marketplace
//         </h1>
//         <LogoSlider />
//       </div>
//     );
//   }



export default function Hello() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'red', // Example color
      }}>
        noooooooooo
      </div>
    );
  }
  
  