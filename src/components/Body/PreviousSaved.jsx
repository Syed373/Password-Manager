import React from 'react'

function PreviousSaved() {

    return (
        <>
            <div className='h-fit w-screen flex justify-center item-center my-14'>
                <div className='h-fit w-3/5 flex justify-center items-center'>
                    <div className='w-fit flex items-start gap-x-5'>
                        <div className="w-92 h-8 border-3 border-cyan-600 rounded-full px-2 flex justify-between">
                            <div>url</div>
                            <div className='flex justify-center items-center gap-2'>
                                <button >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                </button>
                                <lord-icon
                                    src="https://cdn.lordicon.com/exymduqj.json"
                                    trigger="hover"
                                    state="hover-line"
                                    colors="primary:#121331,secondary:#66d7ee"
                                    className="w-7 h-7">
                                </lord-icon>
                            </div>
                        </div>
                        <div className="w-64 h-8 border-3 border-cyan-600 rounded-full px-2 flex justify-between">
                            <div>username</div>
                            <div className='flex justify-center items-center gap-2'>
                                <button >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                </button>
                                <lord-icon
                                    src="https://cdn.lordicon.com/exymduqj.json"
                                    trigger="hover"
                                    state="hover-line"
                                    colors="primary:#121331,secondary:#66d7ee"
                                    className="w-7 h-7">
                                </lord-icon>
                            </div>
                        </div>
                        <div className="w-64 h-8 border-3 border-cyan-600 rounded-full px-2 flex justify-between">
                            <div>Password</div>
                            <div className='flex justify-center items-center gap-2'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    state="hover-look-around"
                                    colors="primary:#121331,secondary:#66d7ee"
                                    className="w-7 h-7">
                                </lord-icon>
                                <button >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                </button>
                                <lord-icon
                                    src="https://cdn.lordicon.com/exymduqj.json"
                                    trigger="hover"
                                    state="hover-line"
                                    colors="primary:#121331,secondary:#66d7ee"
                                    className="w-7 h-7">
                                </lord-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviousSaved