const conteudoJogo = document.querySelectorAll('.gameContent'); /* pegando links*/ 

    /* pegando cada elemento usando o argumento item */
conteudoJogo.forEach(item =>{

    /* fazendo evento click pegando o atributo do item */
    item.addEventListener('click', scrollContent);
});

/*função que pega o atributo e retorna  */
function scrollContent(event){

    const elemento = event.currentTarget;
    console.log(elemento)

    const id = elemento.getAttribute('href');
  
    console.log(id)

        const para = document.querySelector(id).offsetTop;

        console.log(para)

        para.scrollIntoView({behavior: "smooth"});
    };






    