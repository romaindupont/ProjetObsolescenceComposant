import './styles/main.scss';

const app = {

  init: function() {
    app.initElements();
    app.handleFormSubmit();
  },
  initElements: function() {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit',app.handleFormSubmit);
  },
  handleFormSubmit:function(event) {
    event.preventDefault();
    console.log(event.target[0].value)
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");  
    let data ={
      "search": event.target[0].value
  }     
    let fetchOptions = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: myHeaders,
      body: JSON.stringify(data)
    };
    fetch('http://localhost:5000/obso', fetchOptions)
      .then(
          function(response) {
              if (response.status == 201) {    
                return response.json();
              }
              else {
                  alert('Modif no ok');
              }
          }
      )
      .then(data => { 
        const root = document.querySelector('#root')
/*         data.List.map((list)=> console.log(list))
        console.log(data.List[2].adTitle) */
        const div = document.createElement('div');
        root.append(div)
        let h1Texas = document.createElement('h1');
        h1Texas.className="texas";
        h1Texas.textContent="Texas Instruments"
        div.append(h1Texas)
        let pTexas = document.createElement('p');
        pTexas.textContent = `Référence cherchée : ${data.List[0].tiTitle}`;
        h1Texas.append(pTexas)
        let oTexas = document.createElement('p');
        oTexas.textContent = `Information Obso : ${data.List[0].ti}`;
        h1Texas.append(oTexas)
        const divSt = document.createElement('div');
        root.append(divSt)
        let h1st = document.createElement('h1');
        h1st.className="stm";
        h1st.textContent="ST Micro"
        divSt.append(h1st)
        let pSt = document.createElement('p');
        pSt.textContent = `Référence cherchée : ${data.List[1].stTitle}`;
        h1st.append(pSt)
        let oSt = document.createElement('p');
        oSt.textContent = `Information Obso : ${data.List[1].st}`;
        h1st.append(oSt)

        const divAd = document.createElement('div');
        root.append(divAd)
        let h1Ad = document.createElement('h1');
        h1Ad.className="ad";
        h1Ad.textContent="Analog Device"
        divAd.append(h1Ad)
        let pAd = document.createElement('p');
        pAd.textContent = `Référence cherchée : ${data.List[2].adTitle}`;
        h1Ad.append(pAd)
        let oAd = document.createElement('p');
        oAd.textContent = `Information Obso : ${data.List[2].ad}`;
        h1Ad.append(oAd)

        const divInf = document.createElement('div');
        root.append(divInf)
        let h1Inf = document.createElement('h1');
        h1Inf.className="stm";
        h1Inf.textContent="ST Micro"
        divInf.append(h1Inf)
        let pInf = document.createElement('p');
        pInf.textContent = `Référence cherchée : ${data.List[3].infineonTitle}`;
        h1Inf.append(pInf)
        let oInf = document.createElement('p');
        oInf.textContent = `Information Obso : ${data.List[3].infineon}`;
        h1Inf.append(oInf)
      })

    app.init();
    

  },
}


document.addEventListener('DOMContentLoaded', app.init);
