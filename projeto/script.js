function toggleMode(){ //cria um função
    const html = document.documentElement // dentro do index.html eu acesso o html
    
    html.classList.toggle('light') // faz o if e else abaixo
    
    //if(html.classList.contains('light')){
        //html.classList.remove('light')
    //}else{
        //html.classList.add('light')}

//--------------Troca de imagem----------------
    
    //pegar a tag img 
    const img = document.querySelector("#profile img") 
    const alt = document.querySelector("#profile img") 

    //substituir a imagem 
    if (html.classList.contains("light"))  {
    //se tiver light mode, adicinar a img-light
        img.setAttribute("src", "./assets/Avatar-light.png")
        alt.setAttribute("alt", "Um rapaz com casaco azul e o celular tampando o rosto")
    } else {
    // se tiver sem light mode, manter img normal
        img.setAttribute("src", "./assets/avatar.png")
        alt.setAttribute("alt", "Foto de perfil, com um emoji tampando o rosto.")
    }
}


