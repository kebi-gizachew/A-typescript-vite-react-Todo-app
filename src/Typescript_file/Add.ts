import Store from './Store.js'
type Added={
    id:string,
    title:string,
    note:string,
    date:string
}
function Add({note,title,date,id}:Added):void{
    const sets:Added={
        id:id,
        title:title,
        note:note,
        date:date
    }
    Store.push(
        sets
    )
}
export default Add