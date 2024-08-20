const bar = document.getElementById('bar');
const nav =document.getElementById('navbr');

if (bar) {
    bar.addEventListener('click', () => {
    nav.ClassList.add('active');
})
}