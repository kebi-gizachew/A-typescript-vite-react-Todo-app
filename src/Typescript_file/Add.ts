import Store from './Store.js'
type Added={
    id:string,
    title:string,
    note:string,
    date:string
}
function Add({note,title,date,id}:Added):void{
    const sets:Added={
        id:String(id),
        title:String(title),
        note:String(note),
        date:String(date)
    }
    Store.push({...sets})
}
export default Add