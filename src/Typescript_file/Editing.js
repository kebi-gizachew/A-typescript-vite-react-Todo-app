import Store from './Store.js';
function Editing(id, setEdit) {
    const items = Store.find((item) => {
        return item.id === id;
    });
    setEdit(items);
}
export default Editing;
//# sourceMappingURL=Editing.js.map