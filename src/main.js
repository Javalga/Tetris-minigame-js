const grid = document.querySelector('.grid')
const cols = 10
const rows = 20

// for (let i = 1; i <= numItems; i++) {
//     const item = document.createElement('div');
//     item.classList.add('border-1', 'border-black', 'text-center');
//     grid.appendChild(item);
// }

for (let i = 0; i < rows * cols; i++) {
    const item = document.createElement('div');
    item.classList.add('border', 'border-gray')
    item.id = `cell${i}`
    grid.appendChild(item)
    console.log(`item created: ${item}`);
};