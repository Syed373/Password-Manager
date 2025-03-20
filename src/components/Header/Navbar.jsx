import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className=" h-24 w-screen">
                <div className=" h-24 w-screen flex justify-around items-center">
                    <div className=" text-3xl font-extrabold cursor-pointer">
                        <a href="/">
                            <span className="text-cyan-500">&lt;Pass</span>
                            <span className="text-black">OP/&gt;</span>
                        </a>
                    </div>
                    <div className="flex justify-center items-center gap-8">
                        <a href="https://github.com/Syed373/Password-Manager" target="_blank">
                            <lord-icon
                                src="https://cdn.lordicon.com/ioihllwu.json"
                                trigger="hover"
                                colors="primary:#4dd0e1,secondary:#121331"
                                className="w-13 h-13 pt-2">
                            </lord-icon>
                        </a>
                        <a href="/" className="underline pt-2 text-2xl font-bold cursor-pointer">
                            <span className="text-cyan-500">Log</span>
                            <span className="text-black">in</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}