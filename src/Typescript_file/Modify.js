import Store from './Store.js';
function Modify({ id, title, note, date }) {
    Store.forEach((item) => {
        if (item.id === id) {
            item.title = title;
            item.note = note;
            item.date = date;
        }
    });
}
export default Modify;
//# sourceMappingURL=Modify.js.map