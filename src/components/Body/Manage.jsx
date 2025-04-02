import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

function Manage() {

    const [form, setform] = useState({ url: "", username: "", password: "" })
    const [PasswordArray, setPasswordArray] = useState([])

    const showPassword = (id) => {
        const passToggle = document.getElementById(id)
        const eyeToggle = document.getElementById(id + "a")
        if (eyeToggle.state === "hover-look-around") {
            eyeToggle.state = "hover-cross"
            passToggle.type = "text"
        } else {
            eyeToggle.state = "hover-look-around";
            passToggle.type = "password"
        }
    }

    useEffect(() => {
        const passwords = localStorage.getItem("passwords")

        if (passwords) {
            setTimeout(()=>{
                setPasswordArray(JSON.parse(passwords))
            },500)
        }
    }, [])

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const AddPassword = () => {
        if (!form.url || !form.username || !form.password) {
            toast.error("Please fill all fields!");
            return;
        }

        const newPassword = { ...form, id: uuidv4() };
        const updatedPasswords = [...PasswordArray, newPassword];

        setPasswordArray(updatedPasswords)
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords))
        console.log(updatedPasswords)
        setform({ url: "", username: "", password: "" })
    }

    const DeletePassword = (id) => {
        if (window.confirm("Are you sure you want to delete this password?")) {
            const updatedPasswords = PasswordArray.filter(item => item.id !== id);
            setPasswordArray(updatedPasswords);
            localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
        }
    }

    const EditPassword = (id) => {
        setform(PasswordArray.filter(i => i.id === id)[0])
        setPasswordArray(PasswordArray.filter(item => item.id !== id))
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast.success('copied', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="absolute z-[-2] bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_-30%_-100px,#00ffff,transparent)]"></div>
            <div className="absolute z-[-2] bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_130%_-100px,#00ffff,transparent)]"></div>

            <div className='mt-8 w-screen min-h-138 max-h-full md:container '>
                <div className='h-fit w-full flex flex-col md:flex-row justify-center item-center'>
                    <div className='h-fit w-3/5 text-center'>
                        <div className='mb-5'>
                            <div className="text-cyan-500 text-4xl font-extrabold">
                                <span className="">&lt;Pass</span>
                                <span className="text-black">OP/&gt;</span>
                            </div>
                            <div className="text-sm text-center">
                                <p> Your own Password Manager</p>
                            </div>
                        </div>

                        <input value={form.url} onChange={handleChange} name="url" type="url" placeholder='Enter the Website URL...' className='w-4/5 h-4 border-3 border-cyan-600 rounded-full px-2 py-3 focus:outline-none' required />
                        <div className='flex flex-col md:flex-row justify-center items-center gap-[8vw] mt-5'>
                            <input value={form.username} onChange={handleChange} name="username" type="text" placeholder='Enter the Username...' className='w-1/3 h-4 border-3 border-cyan-600 rounded-full px-2 py-3 focus:outline-none' required />
                            <div className='w-1/3 h-fit border-3 border-cyan-600 rounded-full flex items-center'>
                                <input value={form.password} onChange={handleChange} name="password" type="password" placeholder='Enter the Passsword...' className='w-[300px] h-4 rounded-full px-2 py-3 focus:outline-none ' id='show' required />
                                <div className='flex justify-center'>
                                    <lord-icon
                                        id='showa'
                                        onClick={() => { showPassword('show') }}
                                        src="https://cdn.lordicon.com/dicvhxpz.json"
                                        trigger="hover"
                                        stroke="bold"
                                        state="hover-look-around"
                                        colors="primary:#121331,secondary:#00acc1"
                                        className="w-7 h-6 cursor-pointer">
                                    </lord-icon>
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-5 flex justify-center item-center'>
                            <button onClick={AddPassword} type='button' className=' w-fit '>
                                <lord-icon
                                    src="https://cdn.lordicon.com/sbnjyzil.json"
                                    trigger="hover"
                                    state="hover-swirl"
                                    stroke='bold'
                                    colors="primary:#00acc1,secondary:#000000"
                                    className='w-12 h-12 cursor-pointer'>
                                </lord-icon>
                                <h2 className='text-lg h-fit font-medium text-center'>Add</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='h-fit w-screen flex justify-center items-center my-10 overflow-x-hidden'>
                    {PasswordArray.length === 0 && <div >
                        No Passwords to show
                        <div className='flex justify-center mt-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                            </svg>
                        </div>
                    </div>}
                    {PasswordArray.length != 0 && <table className='w-fit'>
                        <thead >
                            <tr className='flex gap-3 items-center'>
                                <th className=' bg-cyan-400 w-92 h-8 border-3 border-cyan-400 rounded-full px-2 flex justify-center'>Url</th>
                                <th className='bg-cyan-400 w-64 h-8 border-3 border-cyan-400 rounded-full px-2 flex  justify-center'>Username</th>
                                <th className='bg-cyan-400 w-72 h-8 border-3 border-cyan-400 rounded-full px-2 flex justify-center'>Password</th>
                                <th className='bg-cyan-400 w-12 h-8 border-3 border-cyan-400 rounded-full px-2 flex justify-center'></th>
                            </tr>
                        </thead>
                        <tbody >
                            {PasswordArray.map((item, index) => {
                                return <tr key={index} className='w-fit my-3 gap-3 flex'>
                                    <td className='w-92 h-8 border-3 border-cyan-600 rounded-full gap-3 px-2 flex justify-between'>
                                        <div className='overflow-hidden'><a href={item.url} target='_blank'>{item.url}</a></div>
                                        <button onClick={() => { copyText(item.url) }} className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td className='w-64 h-8 border-3 border-cyan-600 rounded-full px-2 gap-3 flex justify-between'>
                                        <div>{item.username}</div>
                                        <button onClick={() => { copyText(item.username) }} className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td className='w-72 h-8 border-3 border-cyan-600 rounded-full px-2 flex justify-between'>
                                        <input type="password" value={item.password} readOnly className='focus:outline-none' id={index} />
                                        <div className='flex justify-center items-center gap-1'>
                                            <lord-icon
                                                id={index + "a"}
                                                onClick={() => { showPassword(index) }}
                                                src="https://cdn.lordicon.com/dicvhxpz.json"
                                                trigger="hover"
                                                stroke="bold"
                                                state="hover-look-around"
                                                colors="primary:#121331,secondary:#00acc1"
                                                className="w-7 h-5 cursor-pointer">
                                            </lord-icon>
                                            <button onClick={() => { copyText(item.password) }} className='cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className='h-8 w-12 flex justify-center items-center'>
                                        <lord-icon
                                            onClick={() => { EditPassword(item.id) }}
                                            src="https://cdn.lordicon.com/exymduqj.json"
                                            trigger="hover"
                                            stroke="bold"
                                            state="hover-line"
                                            colors="primary:#121331,secondary:#00acc1"
                                            className="w-7 h-7 cursor-pointer">
                                        </lord-icon>
                                        <lord-icon
                                            onClick={() => { DeletePassword(item.id) }}
                                            src="https://cdn.lordicon.com/hwjcdycb.json"
                                            trigger="morph"
                                            stroke="bold"
                                            state="morph-trash-in"
                                            colors="primary:#000000,secondary:#00acc1"
                                            className="w-7 h-7 cursor-pointer">
                                        </lord-icon>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manage