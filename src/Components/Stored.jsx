import PropContext from "../Hooks/PropContext"
import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import Store from "../Typescript_file/Store.js"
import Deleting from '../Typescript_file/Delete.js'
import Editing from '../Typescript_file/Editing.js'
function Stored(props){
    const navigate=useNavigate()
    const {edit,setEdit, setTodo}=useContext(PropContext)  
    return(
        <div className="w-[70%] mx-auto p-[20px]">
                    <div className="flex items-center justify-center border-[1px] rounded-[100px] w-[35%] pl-[40px] h-[80px] bg-white ml-[50px]"><input placeholder="Enter the title" className="text-[40px] w-full h-full outline-none" value={props.title} disabled/></div>
                    <div className="flex justify-between items-start px-[30px] border-[1px] rounded-[60px] w-full h-auto min-h-[300px] bg-white mt-[30px] pt-[50px]">
                        <textarea placeholder="Write your notes here" className="resize-none h-[100%] w-[70%] min-h-[150px] outline-none text-[35px] rounded-[10px] ml-[20px] " value={props.note} disabled></textarea>
                        <div className="flex flex-col justify-center items-center gap-[70px] w-[30%]">
                        <input type="date" className="h-[50%] text-[35px] rounded-[10px] outline-none text-[rgba(114,114,114,1)]" value={props.date} disabled/>
                        <div className="flex justify-between items-center gap-[20px] w-full">
                          <button className="bg-black text-white w-[80%] h-[80px] rounded-[40px] border-[1px] hover:bg-[rgba(203,202,202,1)] hover:text-black flex justify-center items-center text-[30px]" onClick={()=>{
                            Editing(props.id,setEdit)
                            navigate('/edit')}}>Edit</button>
                            <button className="bg-black text-white w-[80%] h-[80px] rounded-[40px] border-[1px] hover:bg-[rgba(203,202,202,1)] hover:text-black flex justify-center items-center text-[30px]" onClick={
                                ()=>{
                                    Deleting({id:props.id})
                                    setTodo([...Store])
                                }
                        }>Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
    )
}

export default Stored