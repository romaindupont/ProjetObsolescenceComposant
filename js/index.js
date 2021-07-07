/* let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");       
  // On consomme l'API pour ajouter en DB
  let fetchOptions = {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      // On ajoute les headers dans les options
      headers: myHeaders,
      // On ajoute les données, encodée en JSON, dans le corps de la requête
      body: JSON.stringify(data)
  };
  
  // Exécuter la requête HTTP via XHR
  fetch(app.apiBaseUrl+'tasks/'+taskId, fetchOptions)
  .then(
      function(response) {
          // console.log(response);
          // Si HTTP status code à 201 => OK
          if (response.status == 204) {
              alert('Modif ok');
  
              //return response.json();
          }
          else {
              alert('Modif no ok');
          }
      }
  ) */