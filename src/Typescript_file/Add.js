import Store from './Store';
function Add({ note, title, date, id }) {
    const sets = {
        id: id,
        title: title,
        note: note,
        date: date
    };
    Store.push(sets);
}
export default Add;
//# sourceMappingURL=Add.js.map