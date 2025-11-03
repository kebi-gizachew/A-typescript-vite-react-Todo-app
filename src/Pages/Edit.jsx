import TakeNote from '../Components/TakeNote'
import PropContext from '../Hooks/PropContext'
import {useContext} from 'react'
import EditComp from '../Components/EditComp'
function Edit() {
    const {edit,setEdit,setTodo}=useContext(PropContext)
    return (
        <div className="relative w-screen h-screen overflow-x-hidden p-[30px] flex flex-col gap-[30px]">
            <h1 className="absolute index-0 flex justify-center items-center text-[35vw] font-extrabold text-gray-300/30 z-[-100]">
                Notes
            </h1>
            <TakeNote />
            <EditComp id={edit.id} title={edit.title} note={edit.note} date={edit.date} setEdit={setEdit} setTodo={setTodo}/>
        </div>
    )
}
export default Edit