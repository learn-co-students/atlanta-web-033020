// console.log('%c Hello, World!', 'color: red')

// let imageUrl = dankMemes[0]
// console.log(imageUrl)

dankMemes.forEach(function (imgUrl){
    // Render an image
    // create an img tag
    let imgTag = document.createElement('img')
    // change the img tag source
    imgTag.src = imgUrl
    // 🖐🏻 slap it on the DOM
    let imageParent = document.querySelector('p')
    debugger;
    imageParent.append(imgTag)
})

