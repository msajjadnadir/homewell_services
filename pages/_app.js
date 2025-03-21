// import "../styles/globals.css";
// import Navbar from "@/components/layouts/navbar/navbar";
// import Header from "@/components/layouts/header/header";

// export default function App({ Component, pageProps }) {
//   return (
//     <div className="flex flex-row h-screen">
//       <Navbar />
//       <div className="flex flex-col w-full p-6 min-h-screen overflow-y-auto">
//         <Header />
//         <div className="flex p-10">
//           <Component {...pageProps} />
//         </div>
//       </div>
//     </div>
//   );
// }


import "../styles/globals.css";
import Navbar from "@/components/layouts/navbar/navbar";
import Header from "@/components/layouts/header/header";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => (
    <div className="flex flex-row h-screen">
      <Navbar />
      <div className="flex flex-col w-full p-6 min-h-screen overflow-y-auto">
        <Header />
        <div className="flex lg:px-10 px-2 py-10">
          {page}
        </div>
      </div>
    </div>
  ));

  return getLayout(<Component {...pageProps} />);
}
