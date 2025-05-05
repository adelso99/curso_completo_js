$(document).ready(function(){

  // 2. Este es la parte del Slider
  if(window.location.href.indexOf('index') > -1){

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1400,
        responsive: true,
        pager: false
      });
    }

    // 3. POSTS PARA
    if(window.location.href.indexOf('index') > -1){

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

  }

    // Selector de Temas
    //Creacion de variable para una mejor optimicion
    var theme = $("#theme");

    // Tema Principal blue: Azul
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Tema red: Rojo
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    // Tema purple: Morado
    $("#to-purple").click(function(){
        theme.attr("href", "css/purple.css");
    });

    //Scroll arriba de la web
    $('.subir').click(function(e){
      e.preventDefault();

        $('html, body').animate({
           scrollTop: 0
        }, 500);

        return false;

    });

    //Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);

    });
    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
      var about_parrafo = $("#about p");

      about_parrafo.html("<li><br><strong>Bienvenido "+form_name+"</strong> ");
      about_parrafo.append("<button href='#' id='logout' style='background: blue; color: white;'>Cerrar Sesion</button>");
            
      $("#login").hide();

      $("#logout").click(function(){
        localStorage.clear();
        location.reload();
      });
    }

    //Esto es el apartado para el acordeon 
    if(window.location.href.indexOf('about') > -1){
      $("#acordeon").accordion();
    
    }

    // Este sera el apartado para el reloj 
    if(window.location.href.indexOf('index') > -1){
      $("#reloj").reloj();
    }

});