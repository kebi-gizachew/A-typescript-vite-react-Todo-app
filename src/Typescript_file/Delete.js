import Store from './Store.js';
function Deleting({ id }) {
    let saved = Store.filter((item) => {
        return item.id != id;
    });
    Store.length = 0;
    Store.push(...saved);
}
export default Deleting;
//# sourceMappingURL=Delete.js.map