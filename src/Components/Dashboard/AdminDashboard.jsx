import React from 'react'
import Header from './components/Header'

const AdminDashboard = () => {
    return (
        <>
            <Header />


            <form action="" className='bg-[#242222]'>

                <div className='flex gap-10 p-5'>

                    <div className='w-1/2 flex flex-col items-center '>

                        <div className='w-full p-5 text-white'>
                            <h3 className='font-bold'>Task Title</h3>
                            <input type="text" className='py-1 px-2 rounded-md w-full border-2 h-8' placeholder='Enter Title Task' />
                        </div>

                        <div className='w-full p-5 text-white'>
                            <h3 className='font-bold'>Date</h3>
                            <input type="date" className='py-1 px-2 w-full border-2 rounded-md h-8' />
                        </div>

                        <div className='w-full p-5 text-white'>
                            <h3 className='font-bold'>Assing To</h3>
                            <input type="text" placeholder='Employee Name' className='py-1 px-2 w-full border-2 rounded-md h-8 ' />
                        </div>

                        <div className='w-full p-5 text-white'>
                            <h3 className='font-bold'>Categorey</h3>
                            <input type="text" placeholder='Dev,Desing,Others ' className='py-1 px-2 w-full border-2 rounded-md h-8' />
                        </div>
                    </div>

                    <div className='w-1/2 flex flex-col gap-5'>

                        <h3 className='text-xl text-white'>DESCRIPTION</h3>
                        <div className='items-center w-full'>
                            <textarea name="" id="" className='border-2 border-white text-lg h-60 w-full'></textarea>
                        </div>
                        <div className='w-full'>
                            <button className='bg-green-400 rounded-md active:scale-95 py-3 w-full'>Create Task</button>
                        </div>

                    </div>

                </div>
            </form>

        </>
    )
}

export default AdminDashboard