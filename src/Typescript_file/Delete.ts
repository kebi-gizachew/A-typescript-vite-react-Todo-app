import Store from './Store.js'
type Sets={
    id:string,
    title:string,
    note:string,
    date:string

}
type Del={
    id:string
}
function Deleting({id}:Del):void{
    let saved=Store.filter((item:Sets)=>{
        return item.id!=id
    })
    Store.length=0
    Store.push(...saved)

}
export default Deleting