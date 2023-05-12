

/* 
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('https://picsum.photos/list') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(datos) {
    
    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach( perfil => {
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;

---------------------------------------------------------------------------


const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})




function buscarClima(e) {
    e.preventDefault();
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value

    console.log(ciudad);
    console.log(pais);

    if(ciudad === '' || pais === '') {
        // Hubo un error
        mostrarError('Ambos campos son obligatorios')

        return;
    }
    consultarAPI(ciudad, pais );
}

function mostrarError(mensaje) {
  const alerta = document.querySelector('.bg-red-100');
  if(!alerta) {
      const alerta = document.createElement('div');

      alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center" );

      alerta.innerHTML = `
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline">${mensaje}</span>
      `;

      container.appendChild(alerta);
      setTimeout(() => {
          alerta.remove();
      }, 3000);
  }
}

function consultarAPI(ciudad, pais ) {
        // Consultar la API e imprimir el Resultado...

    // leer la url  y agregar el API key
    const appId = '31b33df22fe2b492d9b74843003438fe';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner();

    // query con fetch api
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        console.log(datos);
        limpiarHTML();
        if(datos.cod === "404") {
          mostrarError('Ciudad No Encontrada')
        } else {
          mostrarClima(datos)
        }
      })
      .catch(error => {
        console.log(error)
      });
}

function mostrarClima(datos) {

  // Formatear el Clima...

  const { name, main: { temp, temp_max, temp_min } } = datos;
    
} */


const boton = document.querySelector('#dame_opis');

window.addEventListener('load', () => {

    boton.addEventListener('click', traerOpis);

})

async function traerOpis() {

    // TRAEMOS LOS DATOS

    let url = `http://localhost:9999/api/v1/pruebas`;

    const rta = fetch(url)
      .then(respuesta => {
        //console.log(respuesta)
            return respuesta.json();
      })
      .then(respuesta => {console.log(respuesta)
            return respuesta
        })
      .catch(error => {
        console.log(error)
      });

      console.log(rta)

      // ARMAMOS EL BODY

      const row = document.querySelector('#tabla_opis')

      row.innerHTML = `
        <tr>
            <th>FIN DE TABLA</th>
            <th>FIN DE TABLA</th>
            <th>FIN DE TABLA</th>
            <th>FIN DE TABLA</th>
            <th>FIN DE TABLA</th>
            <th>FIN DE TABLA</th>
        </tr>
      `;
      
  }


