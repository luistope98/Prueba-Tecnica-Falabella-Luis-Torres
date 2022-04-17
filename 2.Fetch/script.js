let url = 'https://jsonplaceholder.typicode.com/users/'; // Definicion de una variable que trae una url de Api de testeo para traer datos con Fetch;
          fetch(url) //Se realizo la solicitud a la API con fetch, por defecto la solicitud es GET(Existe otras como post, put, delete, patch);
            .then( response => response.json() ) //Se resuelve la promesa y la parsea a formato json.
            .then( data => mostrarData(data) ) //realizamos la funcion mostrarData enviando como parametro el objeto creado
            .catch( error => console.log(error) ) // si hay un error se utiliza la palabra reservada catch y envia un mensaje de consola con el error

        const mostrarData = (data) => {
            console.log(data) //mostrar data en consola
            let body = ""; 
            for (var i = 0; i < data.length; i++) {   //creación de html con los datos de la API   
               body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].website}</td></tr>`
            }
            document.getElementById('datos').innerHTML = body //enviar variable creada a html para que el usuario lo pueda visualizar
        }

