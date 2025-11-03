import Store from './Store.js';
function Add({ note, title, date, id }) {
    const sets = {
        id: String(id),
        title: String(title),
        note: String(note),
        date: String(date)
    };
    Store.push({ ...sets });
}
export default Add;
//# sourceMappingURL=Add.js.map