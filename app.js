const images = [
    {
        title: "Wild Forest",
        path: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
        title: "Sunny Beach",
        path: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
    },
    {
        title: "City on Winter",
        path: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
    },
    {
        title: "Mountains - Clouds",
        path: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }
]

let container = document.getElementById('container');
console.log(container)

images.forEach(image => {
    let html = '';
    html += `<div class="panel" style="background-image: url('${image.path}')">
    <h3>${image.title}</h3>
    </div>`
    container.innerHTML += html;
    // console.log(html)
})
console.log(container)
console.log('test');