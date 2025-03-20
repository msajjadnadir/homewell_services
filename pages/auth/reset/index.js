// import { useRouter } from "@/routes/hooks";
// import { paths } from "@/routes/paths";

// export default function LoginPage() {
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login");
//     router.push(paths.dashboard.root);
//   };

//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center select-none">
//       <div className="flex flex-col w-full max-w-xl">
//         <h1 className="font-satoshi text-[40px] leading-[54px] font-medium">
//           Log in
//         </h1>
//         <form
//           className="mt-8 w-full flex flex-col"
//           onSubmit={(e) => handleLogin(e)}
//         >
//           <div className="relative">
//             <label
//               htmlFor="email"
//               className="block font-satoshi text-base leading-[21.6px] font-normal text-[#535353]"
//             >
//               Email Address or Username
//             </label>
//             <input
//               type="email"
//               placeholder="Email"
//               className="input-field border outline-none border-[#66666635] rounded-lg p-4 w-full mt-[9px]"
//             />
//           </div>
//           <div className="relative mt-6">
//             <label
//               htmlFor="password"
//               className="block font-satoshi text-base leading-[21.6px] font-normal text-[#535353]"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Password"
//               className="input-field border outline-none border-[#66666635] rounded-lg p-4 w-full mt-[9px]"
//             />
//           </div>
//           <div className="flex items-center gap-2 mt-2">
//             <input
//               type="checkbox"
//               id="remember"
//               className="h-5 w-5 accent-primary cursor-pointer"
//             />
//             <label
//               htmlFor="remember"
//               className="text-sm text-[#535353] cursor-pointer"
//             >
//               Remember me
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="bg-primary text-white py-4 rounded-md mt-6 font-satoshi text-[22px] leading-[29.7px] font-bold text-center"
//           >
//             Login
//           </button>
//         </form>
//         <span
//           className="text-sm text-[#111111] mt-7 font-satoshi font-medium underline text-center cursor-pointer"
//           onClick={() => router.push(paths.auth.reset)}
//         >
//           Forgot your password
//         </span>
//       </div>
//     </div>
//   );
// }


import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login");
        router.push(paths.dashboard.root);
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center select-none">
            <div className="flex flex-col w-full max-w-xl">
                <h1 className="font-satoshi text-[40px] leading-[54px] font-medium">
                    Reset Password
                </h1>
                <span className="text-gray-500 mt-6">
                    Enter your email we will send you a reset link
                </span>
                <form
                    className="mt-8 w-full flex flex-col"
                    onSubmit={(e) => handleLogin(e)}
                >
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="block font-satoshi text-base leading-[21.6px] font-normal text-[#535353]"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input-field border outline-none border-[#66666635] rounded-lg p-4 w-full mt-[9px]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-white py-4 rounded-md mt-6 font-satoshi text-[22px] leading-[29.7px] font-bold text-center"
                    >
                        Send
                    </button>
                </form>
                <span
                    className="text-sm text-[#111111] mt-7 font-satoshi font-medium underline text-center cursor-pointer"
                    onClick={() => router.push(paths.auth.login)}
                >
                    Go back
                </span>
            </div>
        </div>
    );
}

// Custom layout to remove sidebar
LoginPage.getLayout = function PageLayout(page) {
    return <>{page}</>;
};
