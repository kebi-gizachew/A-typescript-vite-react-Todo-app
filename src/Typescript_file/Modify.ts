import Store from './Store'
type Mod={
    id:string,
    title:string,
    note:string,
    date:string
}
function Modify({id,title,note,date}:Mod){
    Store.forEach((item)=>{
        if(item.id===id){
            item.title=title
            item.note=note
            item.date=date
}})
}
export default Modify
