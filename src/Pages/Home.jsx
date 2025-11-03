import TakeNote from '../Components/TakeNote'
import Plus from '../Components/PlusSec'
import Stored from '../Components/Stored'
import {useContext} from 'react'
import PropContext from '../Hooks/PropContext'
function Home() {
    const {todo,setTodo}=useContext(PropContext)
    return (
        <div className="relative w-screen h-screen overflow-x-hidden p-[30px] flex flex-col gap-[30px]">
            <h1 className="absolute index-0 flex justify-center items-center text-[35vw] font-extrabold text-gray-300/30 z-[-100]">
                Notes
            </h1>
            <TakeNote />
            <Plus setTodo={setTodo}/>
            {todo.map((item)=>{
                return(
                    <Stored key={item.id} id={item.id} title={item.title} note={item.note} date={item.date}/>
                
                )
            })}
        </div>
    )
}

export default Home
