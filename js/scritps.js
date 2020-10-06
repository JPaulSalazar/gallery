//Variables que obtinenen los enlaces de miniaturas y divs contenedores con las imagenes grandes
const links = document.querySelectorAll('.gallery-list-img');

const content = document.querySelectorAll('.gallery-content-img');

//for que recorre el img-content y  oculta las imagenes en grande y solo deja visible una
for(let i = 0 ; i < content.length; i++){
    content[i].classList.add('js-content-hidden');
}

//CODIGO Inicialmente se muestra la primera imagen en grande y miniaturas de todas las imágenes de la galería

// muestra la primera imagen en grande y la miniatura seleccionada
content[0].classList.remove('js-content-hidden');
links[0].classList.add('js-active');

//CODIGO Al hacer click en una miniatura, la imagen grande cambia
//CODIGO Se destaca la imagen actual en la lista de miniaturas

// funcion con un for   que recorre todas las minaturas, al darle clik (evento) 
//pueda vizualizarse solo una imagen en grande que coincide con el id  de las miniaturas
//por eso lo hicimos con href

for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').substring(1);
        for(let i = 0 ; i < content.length; i++){
            content[i].classList.add('js-content-hidden');
            if (content[i].getAttribute('id') == id){
                content[i].classList.remove('js-content-hidden');
            }
        }
        for(let i = 0; i < links.length; i++){
            links[i].classList.remove('js-active');
    
        }
    
        event.currentTarget.classList.add('js-active');
    });
}



