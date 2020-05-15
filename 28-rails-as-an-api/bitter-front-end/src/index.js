// DOMContentLoaded
document.addEventListener('DOMContentLoaded',setupListeners)

function setupListeners(){
    setupMenu()
}

function setupMenu(){
 // Find the menubar
    let menu = document.querySelector('.ui.pointing.menu')
    // Add the listeners
    // Pass a callback that takes care of switching active
    menu.addEventListener('click', switchActive)
}

function switchActive(e){
    let element = e.target
    setItemClassTodefault()
    if (element.innerText === 'Users'){
        element.className += ' active'
        getAllUsers()
    } else if (element.innerText === 'Tweets'){
        element.className += ' active'
    } else if (element.innerText === 'Show Me A Profile'){
        element.className += ' active'
        getAProfile()
    }
}

function getAProfile(){
    fetch('http://localhost:3000/users/8')
    .then(function (res) {
        return res.json()
    })
    .then(function (user) {
        renderUser(user)
    })
    .catch(function(err){
        console.log(err)
    })
}

function renderUser(user){
    let maincontainer = document.querySelector('.ui.relaxed.divided.list')
    
    while(maincontainer.lastChild){
        maincontainer.removeChild(maincontainer.lastChild)
    }
    
    maincontainer.innerHTML = `<div class="ui card">
            <div class="content">
                <a class="header">${user.username}</a>
                <div class="description">
                    ${user.bio}
            </div>
            </div>
        </div >`
}

function getAllUsers(){
    fetch('http://localhost:3000/users')
    .then(function(res){
        return res.json()
    })
    .then(function(users){
        users.forEach(function(user){
            renderUsers(user)
        })
    })
}

function renderUsers(user){
    let userListParent = document.querySelector('.ui.relaxed.divided.list')
    // while (userListParent.lastChild) {
    //     userListParent.removeChild(userListParent.lastChild)
    // }

    let userItem = document.createElement('div')
    userItem.className = 'item'

    let userImg = document.createElement('i')
    userImg.className = 'large github middle aligned icon'

    let userContent = document.createElement('div')
    userContent.className = 'content'
    
    let userName = document.createElement('a')
    userName.className = 'header'
    userName.innerText = user.username

    let userBio = document.createElement('div')
    userBio.className = 'description'
    userBio.innerText = user.bio
    
    userContent.appendChild(userName)
    userContent.appendChild(userBio)

    userItem.appendChild(userImg)
    userItem.appendChild(userContent)
    
    userListParent.appendChild(userItem)
    //     <div class="item">
    //         <i class="large github middle aligned icon"></i>
    //         <div class="content">
    //             <a class="header">Semantic-Org/Semantic-UI</a>
    //             <div class="description">Updated 10 mins ago</div>
    //         </div>
    //     </div>
   
}

function setItemClassTodefault(){
    let menu = document.querySelector('.ui.pointing.menu')
    Array.from(menu.children).forEach(function (item) {
        item.className = 'item'
    })
}