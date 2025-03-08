import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className=" h-28 w-screen flex justify-around items-center gap-96">
                <div>
                    <div className="text-cyan-500 text-[40px] font-extrabold">
                        <span className="">&lt;Pass</span>
                        <span className="text-black">OP/&gt;</span>
                    </div>
                    <div className="text-sm text-center">
                        <p> Your own Password Manager</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <a href="https://github.com/Syed373/Password-Manager" target="_blank">
                        <lord-icon
                            src="https://cdn.lordicon.com/ioihllwu.json"
                            trigger="hover"
                            className="w-15 h-15 pt-2">
                        </lord-icon></a>
                    <a href="/" className="underline text-2xl ">Login</a>
                </div>
            </nav>
        </>
    )
}