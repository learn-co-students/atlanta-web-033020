document.addEventListener('DOMContentLoaded',init)

function init(){    
    listenClicks()
    submitFunc()
}

function submitFunc(){

   // User submits the form
    let commentForm = document.querySelector('#comment-form')

    commentForm.addEventListener('submit',function (e){
        e.preventDefault()
        // Render a comment

        // Get the input field
        let commentInput = e.target.querySelector('#new-comment')
        // Get the value from the input field
        let comment = commentInput.value
        // Display the comment
    
        // Create an list item
        let commentItem = document.createElement('li')
        // Set the right value
        commentItem.innerText = comment
        // 🖐🏻
        let commentContainer = document.querySelector('#comments-container')
        commentContainer.appendChild(commentItem)

        e.target.reset()
    })

    
}

function listenClicks(){
    let btnParent = document.querySelector('#helicopter-parent')
    btnParent.addEventListener('click',function (e){

        if(e.target.id == 'alert'){
            alert('Hello There!')
        }else if(e.target.id == 'log'){
            console.log('Hello There!')
        }else if(e.target.id == 'errr'){
            console.error('Something went wrong..')
        }else{
            console.log('None of the buttons were clicked..')
        }
    })
}

// function alertFunc() {
//     let alertBtn = document.querySelector('#alert')
//     alertBtn.addEventListener('click', function (e) {
//         // console.log(e)
//         alert('Hello There!')
//     })
// }

// function logFunc() {
//     let logBtn = document.querySelector('#log')
//     logBtn.addEventListener('click', function (e) {
//         // console.log(e)
//         console.log('Hello There!')
//     })
// }

// function errFunc() {
//     let errBtn = document.querySelector('#errr')
//     errBtn.addEventListener('click', function (e) {
//         // console.log(e)
//         console.error('Something went wrong..')
//     })
// }