import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className=" h-28 w-screen flex justify-around items-center">
                    <div className="text-cyan-500 text-3xl font-extrabold">
                        <span className="">&lt;Pass</span>
                        <span className="text-black">OP/&gt;</span>
                    </div>
                <div className="flex justify-center items-center gap-8">
                    <a href="https://github.com/Syed373/Password-Manager" target="_blank">
                        <lord-icon
                            src="https://cdn.lordicon.com/ioihllwu.json"
                            trigger="hover"
                            className="w-13 h-13 pt-2">
                        </lord-icon></a>
                    <a href="/" className="underline text-2xl ">Login</a>
                </div>
            </nav>
        </>
    )
}