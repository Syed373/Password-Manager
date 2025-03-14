import React from 'react'

function AddNew() {
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

                    <input type="url" placeholder='Enter the Website URL...' className='w-[680px] h-4 border-3 border-cyan-600 rounded-full px-2 py-3' name='' id='' />
                    <div className='flex justify-center items-center gap-20 mt-5'>
                        <input type="text" placeholder='Enter the Username...' className='w-[300px] h-4 border-3 border-cyan-600 rounded-full px-2 py-3' />
                        <input type="text" placeholder='Enter the Passsword...' className='w-[300px] h-4 border-3 border-cyan-600 rounded-full px-2 py-3' />
                    </div>
                
                    <button type='button' className=' mt-5 px-2 '>
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
        </>
    )
}

export default AddNew