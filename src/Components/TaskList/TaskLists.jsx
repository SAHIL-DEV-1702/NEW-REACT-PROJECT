import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FaildTasks from './FaildTasks'
import CompletedTask from './CompletedTask'

const TaskLists = ({ data }) => {
    console.log(data)
    const TaskList = data.taskSummary
    return (
        <div id='TaskList' className='flex flex-nowrap items-center gap-5  mt-10 py-5 h-[55%] overflow-scroll'>


            {
                data.tasks.map((e, idx) => {

                    if (e.active) {
                        return <AcceptTask key={idx} />
                    }
                    if (e.newTask) {
                        return <NewTask key={idx} />
                    }
                    if (e.failed) {
                        return <FaildTasks key={idx} />
                    }
                    if (e.completed) {
                        return <CompletedTask key={idx} />
                    }
                })
            }


        </div>


    )
}

export default TaskLists