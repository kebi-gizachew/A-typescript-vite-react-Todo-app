import {AiOutlinePlus} from "react-icons/ai";
import {useState} from "react"
import Add from "../Typescript_file/Add.js"
import Store from "../Typescript_file/Store.js"
function Plus(props){
    const [note,setNote]=useState("")
    const [title,setTitle]=useState("")
    const [date,setDate]=useState("")
    const [id,setId]=useState(crypto.randomUUID())
    return(
        <div className="w-[70%] mx-auto p-[20px]">
            <div className="flex items-center justify-center border-[1px] rounded-[100px] w-[35%] pl-[40px] h-[80px] bg-white ml-[50px]"><input placeholder="Enter the title" className="text-[40px] w-full h-full outline-none" onChange={e=>setTitle(e.target.value)} value={title}/></div>
            <div className="flex justify-between items-start px-[30px] border-[1px] rounded-[60px] w-full h-auto min-h-[300px] bg-white mt-[30px] pt-[50px]">
                <textarea placeholder="Write your notes here" className="resize-none h-[100%] w-[75%] min-h-[150px] outline-none text-[35px] rounded-[10px] ml-[20px]" onChange={e=>setNote(e.target.value)} value={note}></textarea>
                <div className="flex flex-col justify-center items-center gap-[70px]">
                <input type="date" className="h-[50%] text-[35px] rounded-[10px] outline-none text-[rgba(114,114,114,1)]" onChange={e=>setDate(e.target.value)} value={date}/>
                <div className="flex justify-center items-center gap-[20px] bg-black w-[35%] h-[70px] rounded-[50px] text-[40px] border-[1px] hover:bg-[rgba(114,114,114,1)]">
                    <button onClick={()=>{
                        Add({note,title,date,id})
                        props.setTodo([...Store])
                        setId(crypto.randomUUID())
                        setNote("")
                        setTitle("")
                        setDate("")
                        
                        }}><AiOutlinePlus className="text-white"/></button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Plus