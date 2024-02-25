const conteudoJogo = document.querySelectorAll('.gameContent'); /* pegando links*/ 

console.log(conteudoJogo);


    /* pegando cada elemento usando o argumento item */
conteudoJogo.forEach(item =>{

    /* fazendo evento click pegando o atributo do item */
    item.addEventListener('click', scrollContent);

    console.log(item);
});


    /*função que pega o atributo e retorna  */
function scrollContent(event){
    event.preventDefault();
    const elemento = event.currentTarget;
    const id = elemento.getAttribute('href');
    const para = (id).offsetTop;

    window.scroll({
        top: para,
        behavior: 'smooth'
    });

    console.log(elemento)
    console.log(id)
}


    