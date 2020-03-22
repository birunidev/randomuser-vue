const navlist = document.getElementById('navlist');
const sideDrawer = document.querySelector('.side-drawer');
const backdrop = document.querySelector('.backdrop');

let navList = `<ul class="nav-ul">
                    <li><a href="$">Home</a></li>
                    <li><a href="$">Projects</a></li>
                    <li><a href="$">About</a></li>
                    <li><a href="$">Contact</a></li>
                </ul>`;
navlist.innerHTML = navList
sideDrawer.innerHTML = navList

function openDrawer() {
    sideDrawer.classList.add('show')
    backdrop.classList.add('show')
}
function closeDrawer() {
    sideDrawer.classList.remove('show')
    backdrop.classList.remove('show')
}
