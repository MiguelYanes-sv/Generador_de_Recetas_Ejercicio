var NumeroRecetas = 1;
    const $seleccionArchivos = document.querySelector("#imagen");
    const $imagenPrevisualizacion = document.querySelector("#previewImage");

    $seleccionArchivos.addEventListener("change", () => {

        const archivos = $seleccionArchivos.files;

        if (!archivos || !archivos.length) {
            $imagenPrevisualizacion.src = "";
            return;
        }

        const primerArchivo = archivos[0];
        const objectURL = URL.createObjectURL(primerArchivo);
        $imagenPrevisualizacion.src = objectURL;
        
    });        


    $(document).ready(function(){
        $("#Añadir").click(function()
        {
            $("#myModal").modal('hide');
            NumeroRecetas++; 
            
            // Se crea en contenedor vacio, padre
            var bloque = document.createElement("div");
            bloque.className = "row rec";
            
            // Numero de la receta >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            var numero_receta = document.createElement("div");
            numero_receta.className = "encabezado col-md-12 text-center p-0";
            numero_receta.textContent = "Receta " + NumeroRecetas

            // Nombre de la receta >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            var nombre_receta = document.createElement("div");
            nombre_receta.className = "ttitulo col-md-6";
            nombre_receta.textContent = $("#titulo").val();
            
            // Imagen Agregada >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            var imagen_receta = document.createElement("div");
            imagen_receta.className = "col-md-6 p-0";
            
            var img = document.createElement("img");
            img.className = "img-fluid";
            img.setAttribute("src", $imagenPrevisualizacion.src)
            imagen_receta.appendChild(img);
            


            // Ingredientes y Procedimiento >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            var contenido_receta = document.createElement("div");
            contenido_receta.className = "recet col-md-12";

                // Lista de Ingredientes
                var ingred_encabezado = document.createElement("h2");          
                ingred_encabezado.innerText = "Ingredientes:  \n";

                var lista_ingred = document.createElement("ul");
                var lista_ingred_items = document.createElement("li");

                lista_ingred_items.innerText = $("#ingredientes \n").val();
                

                // Lista de Procedimientos
                var proced_encabezado = document.createElement("h2");          
                proced_encabezado.innerText = "Procedimientos: \n";

                var lista_proced = document.createElement("ul");
                var lista_proced_items = document.createElement("li");
                lista_proced_items.setAttribute("style","list-style:none")
                lista_proced_items.innerText = $("#procedimiento").val();
            
            
            lista_ingred.appendChild(lista_ingred_items);
            lista_proced.appendChild(lista_proced_items);

            contenido_receta.appendChild(ingred_encabezado);
            contenido_receta.appendChild(lista_ingred);
            contenido_receta.appendChild(proced_encabezado);
            contenido_receta.appendChild(lista_proced);


            bloque.appendChild(numero_receta);
            bloque.appendChild(nombre_receta);
            bloque.appendChild(imagen_receta);
            bloque.appendChild(contenido_receta);
            
            limpiar()
            document.getElementById("Fillme").appendChild(bloque);


            // Agrega la receta al menu lateral
            var menu_lateral = document.getElementById("menu-recetas");
            var nueva = document.createElement("li");
            nueva.className = "nav-item selectores";
            nueva.innerText = "Receta " + NumeroRecetas;


            menu_lateral.appendChild(nueva);

        });
    });

    function limpiar()
    {
        var formElements = document.getElementsByClassName("form-control");
        for (let index = 0; index < formElements.length; index++) {            
            formElements[index].value = "";
        }
        $imagenPrevisualizacion.src = "";
    }