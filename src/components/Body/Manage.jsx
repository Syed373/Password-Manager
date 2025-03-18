import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Manage() {

    const [form, setform] = useState({ url: "", username: "", password: "" })
    const [PasswordArray, setPasswordArray] = useState([])

    const ref1 = useRef();
    const ref2 = useRef();
    const passwordref = useRef();
    const passwordref2 = useRef();
    const showPassword = () => {
        if (ref1.current.state.includes("hover-look-around")) {
            ref1.current.state = "hover-cross"
            passwordref.current.type = "text"
        } else {
            ref1.current.state = "hover-look-around";
            passwordref.current.type = "password"
        }
    }

    const showPassword2 = (id) => {
        if (ref2.current.state.includes("hover-look-around")) {
            ref2.current.state = "hover-cross"
            passwordref2.current.type = "text"
        } else {
            ref2.current.state = "hover-look-around";
            passwordref2.current.type = "password"
        }
    }

    useEffect(() => {
        const passwords = localStorage.getItem("passwords")

        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: [e.target.value] })
    }

    const Add = () => {
        setPasswordArray([...PasswordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...PasswordArray, { ...form, id: uuidv4() }]))
        console.log([...PasswordArray, { ...form, id: uuidv4() }])
    }

    const deletePassword = (id) => {
        setPasswordArray(PasswordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(PasswordArray.filter(item => item.id !== id)))

    }

    const editPassword = (id) => {

    }


    return (
        <>
            <div className='h-fit w-screen flex justify-center item-center'>
                <div className='h-fit w-3/5 text-center'>
                    <div className='mb-5'>
                        <div className="text-cyan-500 text-[40px] font-extrabold">
                            <span className="">&lt;Pass</span>
                            <span className="text-black">OP/&gt;</span>
                        </div>
                        <div className="text-sm text-center">
                            <p> Your own Password Manager</p>
                        </div>
                    </div>

                    <input value={form.url} onChange={handleChange} name="url" type="url" placeholder='Enter the Website URL...' className='w-[680px] h-4 border-3 border-cyan-600 rounded-full px-2 py-3 focus:outline-none' />
                    <div className='flex justify-center items-center gap-20 mt-5'>
                        <input value={form.username} onChange={handleChange} name="username" type="text" placeholder='Enter the Username...' className='w-[300px] h-4 border-3 border-cyan-600 rounded-full px-2 py-3 focus:outline-none' />
                        <div className='w-[300px] h-fit border-3 border-cyan-600 rounded-full flex items-center'>
                            <input ref={passwordref} value={form.password} onChange={handleChange} name="password" type="password" placeholder='Enter the Passsword...' className='w-[300px] h-4 rounded-full px-2 py-3 focus:outline-none ' />
                            <div onClick={showPassword} className='flex justify-center'>
                                <lord-icon
                                    ref={ref1}
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    state="hover-look-around"
                                    colors="primary:#121331,secondary:#121331"
                                    className="w-7 h-6 mr-1">
                                </lord-icon>
                            </div>
                        </div>
                    </div>

                    <button onClick={Add} type='button' className=' mt-5 px-2 '>
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                            state="hover-swirl"
                            stroke='bold'
                            colors="primary:#0092b8,secondary:#000000"
                            className='w-10 h-10'>
                        </lord-icon>
                    </button>
                    <h2 className='text-sm p-0 m-[-10px] font-medium'>ADD</h2>
                </div>
            </div>
            <div className='h-fit w-screen flex justify-center item-center my-14'>
                {PasswordArray.length === 0 && <div >
                    No Passwords to show
                    <div className='flex justify-center mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                        </svg>
                    </div>
                </div>}
                {PasswordArray.length != 0 && <table className='w-3/5 '>
                    <thead>
                        <tr className='flex gap-3 items-center'>
                            <th className=' bg-cyan-400 w-92 h-8 border-3 border-cyan-400 rounded-full px-2 flex justify-center'>Url</th>
                            <th className='bg-cyan-400 w-64 h-8 border-3 border-cyan-400 rounded-full px-2 flex  justify-center'>Username</th>
                            <th className='bg-cyan-400 w-72 h-8 border-3 border-cyan-400 rounded-full px-2 flex justify-center'>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PasswordArray.map((item, index) => {
                            return <tr key={index} className='my-3 gap-3 flex'>
                                <td className='w-92 h-8 border-3 border-cyan-600 rounded-full gap-3 px-2 flex justify-between'>
                                    <div className='overflow-hidden'><a href={item.url} target='_blank'>{item.url}</a></div>
                                    <div className='flex justify-center items-center gap-2'>
                                        <button >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                            </svg>
                                        </button>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/exymduqj.json"
                                            trigger="hover"
                                            state="hover-line"
                                            colors="primary:#121331,secondary:#66d7ee"
                                            className="w-7 h-5">
                                        </lord-icon>
                                    </div>
                                </td>
                                <td className='w-64 h-8 border-3 border-cyan-600 rounded-full px-2 gap-3 flex justify-between'>
                                    <div>{item.username}</div>
                                    <div className='flex justify-center items-center gap-2'>
                                        <button >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                            </svg>
                                        </button>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/exymduqj.json"
                                            trigger="hover"
                                            state="hover-line"
                                            colors="primary:#121331,secondary:#66d7ee"
                                            className="w-7 h-5">
                                        </lord-icon>
                                    </div>
                                </td>
                                <td className='w-72 h-8 border-3 border-cyan-600 rounded-full px-2 flex justify-between'>
                                    <input ref={passwordref2} type="password" value={item.password} readOnly className='focus:outline-none' />
                                    <div className='flex justify-center items-center gap-1'>
                                        <lord-icon
                                            ref={ref2}
                                            onClick={() => {showPassword2(item.id)}}
                                            src="https://cdn.lordicon.com/dicvhxpz.json"
                                            trigger="hover"
                                            state="hover-look-around"
                                            colors="primary:#121331,secondary:#121331"
                                            className="w-7 h-5">
                                        </lord-icon>
                                        <button >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                            </svg>
                                        </button>
                                        <lord-icon
                                            onClick={() => { editPassword(item.id) }}
                                            src="https://cdn.lordicon.com/exymduqj.json"
                                            trigger="hover"
                                            state="hover-line"
                                            colors="primary:#121331,secondary:#121331"
                                            className="w-7 h-5">
                                        </lord-icon>
                                    </div>
                                </td>
                                <td className='flex justify-center items-center'>
                                    <lord-icon
                                        onClick={() => { deletePassword(item.id) }}
                                        src="https://cdn.lordicon.com/hwjcdycb.json"
                                        trigger="morph"
                                        stroke="bold"
                                        state="morph-trash-in"
                                        colors="primary:#000000,secondary:#66d7ee"
                                        className="w-7 h-7">
                                    </lord-icon>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                }
            </div>
        </>
    )
}

export default Manage