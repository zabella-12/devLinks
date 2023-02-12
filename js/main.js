function toggleMode(){
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
       img.setAttribute('src', './assets/avatar-black.png')
       img.setAttribute('alt', 'Avatar de colhinho preto')
    }else {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Avatar de colhinho branco')
    }

}