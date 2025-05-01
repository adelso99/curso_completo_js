$(document).ready(function(){

  // 2. Este es la parte del Slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1400,
        responsive: true,
        pager: false
      });


    // 3. POSTS PARA
    var posts = [
        {
          title: 'Nombre del Titulo 1',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit eleifend erat ac consequat. Mauris dolor nulla, pharetra in porttitor at, fringilla vel mauris. Nunc eu neque nulla. Suspendisse potenti. Cras finibus cursus felis, eu tincidunt lectus fermentum at. Sed commodo id leo pharetra facilisis. Vestibulum velorci a eros fermentum fermentum. Fusce sollicitudin inlectus eget ullamcorper. Maecenas nec arcu consequat, cursus nisl id, molestie metus. In in lacus eleifend, efficitur sem eu, pellentesque magna. Integer sit ametlacinia risus. Suspendisse potenti. Etiam suscipit placerat tellus, a egestas enim eleifend vel. Sed varius tellus non ex laoreet tempor.'
        },
        {
          title: 'Nombre del Titulo 2',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit eleifend erat ac consequat. Mauris dolor nulla, pharetra in porttitor at, fringilla vel mauris. Nunc eu neque nulla. Suspendisse potenti. Cras finibus cursus felis, eu tincidunt lectus fermentum at. Sed commodo id leo pharetra facilisis. Vestibulum velorci a eros fermentum fermentum. Fusce sollicitudin inlectus eget ullamcorper. Maecenas nec arcu consequat, cursus nisl id, molestie metus. In in lacus eleifend, efficitur sem eu, pellentesque magna. Integer sit ametlacinia risus. Suspendisse potenti. Etiam suscipit placerat tellus, a egestas enim eleifend vel. Sed varius tellus non ex laoreet tempor.'
        },
        {
          title: 'Nombre del Titulo 3',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit eleifend erat ac consequat. Mauris dolor nulla, pharetra in porttitor at, fringilla vel mauris. Nunc eu neque nulla. Suspendisse potenti. Cras finibus cursus felis, eu tincidunt lectus fermentum at. Sed commodo id leo pharetra facilisis. Vestibulum velorci a eros fermentum fermentum. Fusce sollicitudin inlectus eget ullamcorper. Maecenas nec arcu consequat, cursus nisl id, molestie metus. In in lacus eleifend, efficitur sem eu, pellentesque magna. Integer sit ametlacinia risus. Suspendisse potenti. Etiam suscipit placerat tellus, a egestas enim eleifend vel. Sed varius tellus non ex laoreet tempor.'
        },
        {
          title: 'Nombre del Titulo 4',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit eleifend erat ac consequat. Mauris dolor nulla, pharetra in porttitor at, fringilla vel mauris. Nunc eu neque nulla. Suspendisse potenti. Cras finibus cursus felis, eu tincidunt lectus fermentum at. Sed commodo id leo pharetra facilisis. Vestibulum velorci a eros fermentum fermentum. Fusce sollicitudin inlectus eget ullamcorper. Maecenas nec arcu consequat, cursus nisl id, molestie metus. In in lacus eleifend, efficitur sem eu, pellentesque magna. Integer sit ametlacinia risus. Suspendisse potenti. Etiam suscipit placerat tellus, a egestas enim eleifend vel. Sed varius tellus non ex laoreet tempor.'
        },
        {
          title: 'Nombre del Titulo 5',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit eleifend erat ac consequat. Mauris dolor nulla, pharetra in porttitor at, fringilla vel mauris. Nunc eu neque nulla. Suspendisse potenti. Cras finibus cursus felis, eu tincidunt lectus fermentum at. Sed commodo id leo pharetra facilisis. Vestibulum velorci a eros fermentum fermentum. Fusce sollicitudin inlectus eget ullamcorper. Maecenas nec arcu consequat, cursus nisl id, molestie metus. In in lacus eleifend, efficitur sem eu, pellentesque magna. Integer sit ametlacinia risus. Suspendisse potenti. Etiam suscipit placerat tellus, a egestas enim eleifend vel. Sed varius tellus non ex laoreet tempor.'
        },
        {
          title: 'Nombre del Titulo 6',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit eleifend erat ac consequat. Mauris dolor nulla, pharetra in porttitor at, fringilla vel mauris. Nunc eu neque nulla. Suspendisse potenti. Cras finibus cursus felis, eu tincidunt lectus fermentum at. Sed commodo id leo pharetra facilisis. Vestibulum velorci a eros fermentum fermentum. Fusce sollicitudin inlectus eget ullamcorper. Maecenas nec arcu consequat, cursus nisl id, molestie metus. In in lacus eleifend, efficitur sem eu, pellentesque magna. Integer sit ametlacinia risus. Suspendisse potenti. Etiam suscipit placerat tellus, a egestas enim eleifend vel. Sed varius tellus non ex laoreet tempor.'
        },
        
    ];
    
    posts.forEach((item, index) => {
     var post = `
          <article class="post">
               <h2>${item.title}</h2>
               <span class="date">${item.date}</span>
               <p>
               ${item.content}
               </p>
               <a href="#" class="button-more">Leer mas</a>
         </article> 
            `;
                      
          $("#posts").append(post);

    });



});