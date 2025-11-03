import Store from './Store'
type sets={
    id:string,
    title:string,
    note:string,
    date:string
}
function Editing(id:string, setEdit:(item:sets|undefined)=>void):void{
        const items=Store.find((item)=>{
            return item.id===id})
        setEdit(items)
}
export default Editing


