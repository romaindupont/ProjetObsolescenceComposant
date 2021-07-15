import './styles/main.scss';

const app = {
  init: function() {
    app.initElements();
    app.handleFormSubmit();
    app.waitingSvg();
  },
  initElements: function() {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit',app.handleFormSubmit);
  },
  numberChange:function(number) {
    const percent = document.querySelector('.textChange');
    percent.textContent = number;
  },
  waitingSvg:function() {
    const patience = document.querySelector('svg');
    patience.style.display = 'block';
    const percent = document.querySelector('.textChange');
    percent.style.display = 'block';
    const array = [0,25,50,75, 100]
    let delay = 7000
    for (let i=0; i < array.length;i++) {
      setTimeout(app.numberChange, delay, array[i]);
      delay += 7000
    }
  },
  handleFormSubmit:function(event) {
    event.preventDefault();
    const root = document.querySelector('#root');
    let supprimerTexas = document.querySelector('.texas');
    if ( supprimerTexas !== null ) {
      root.removeChild(supprimerTexas);
      let supprimerStm = document.querySelector('.stm');
      root.removeChild(supprimerStm);
      let supprimerAd = document.querySelector('.ad');
      root.removeChild(supprimerAd);
      let supprimerInfineon = document.querySelector('.infineon');
      root.removeChild(supprimerInfineon);
      let supprimerRenesas = document.querySelector('.renesas');
      root.removeChild(supprimerRenesas);
      let supprimerMurata = document.querySelector('.murata');
      root.removeChild(supprimerMurata);
      let supprimerMicrochip = document.querySelector('.microchip');
      root.removeChild(supprimerMicrochip);
    }

    app.waitingSvg()

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");  
    let data = {
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
            alert('Erreur de recherche, recharger la page');
          }
        }
      )
      .then(data => { 
        const root = document.querySelector('#root');
        const patience = document.querySelector('svg');
        patience.style.display='none';
        const percent = document.querySelector('.textChange');
        percent.style.display='none';
        percent.textContent=0;
        const div = document.createElement('div');
        div.className = "texas";
        root.append(div);
        let h1Texas = document.createElement('h1');
        h1Texas.className = "texasH1";
        h1Texas.textContent = "Texas Instruments";
        div.append(h1Texas);
        const tiImg = document.createElement('img');
        tiImg.src = 'https://www.ti.com/etc/designs/ti/images/ui/ic-logo.svg';
        div.prepend(tiImg);
        let pTexas = document.createElement('p');
        pTexas.textContent = `Référence trouvée : ${data.List[0].tiTitle}`;
        h1Texas.append(pTexas);
        let oTexas = document.createElement('p');
        oTexas.textContent = `Information Obso : ${data.List[0].ti}`;
        h1Texas.append(oTexas);
        
        const divSt = document.createElement('div');
        divSt.className = "stm";
        root.append(divSt);
        let h1st = document.createElement('h1');
        h1st.className = "stmH1";
        h1st.textContent = "ST Micro";
        divSt.append(h1st);
        const stImg = document.createElement('img');
        stImg.src = 'https://www.st.com/etc/clientlibs/st-site-cx/media/app/images/st-logo.svg';
        divSt.prepend(stImg);
        let pSt = document.createElement('p');
        pSt.textContent = `Référence trouvée : ${data.List[1].stTitle}`;
        h1st.append(pSt);
        let oSt = document.createElement('p');
        oSt.textContent = `Information Obso : ${data.List[1].st}`;
        h1st.append(oSt);

        const divAd = document.createElement('div');
        divAd.className = "ad";
        root.append(divAd);
        let h1Ad = document.createElement('h1');
        h1Ad.className = "adH1";
        h1Ad.textContent = "Analog Device";
        divAd.append(h1Ad);
        const adImg = document.createElement('img');
        adImg.src = 'https://assets.analog.com/images/en/ADI_Logo_AWP.png';
        divAd.prepend(adImg);
        let pAd = document.createElement('p');
        pAd.textContent = `Référence trouvée : ${data.List[2].adTitle}`;
        h1Ad.append(pAd);
        let oAd = document.createElement('p');
        oAd.textContent = `Information Obso : ${data.List[2].ad}`;
        h1Ad.append(oAd);

        const divInf = document.createElement('div');
        divInf.className = "infineon";
        root.append(divInf);
        let h1Inf = document.createElement('h1');
        h1Inf.className = "infineonH1";
        h1Inf.textContent = "Infineon";
        divInf.append(h1Inf);
        const infImg = document.createElement('img');
        infImg.src = 'https://www.infineon.com/frontend/release_2021-06-1/dist/resources/img/logo-desktop-en.png';
        divInf.prepend(infImg);
        let pInf = document.createElement('p');
        pInf.textContent = `Référence trouvée : ${data.List[3].infineonTitle}`;
        h1Inf.append(pInf);
        let oInf = document.createElement('p');
        oInf.textContent = `Information Obso : ${data.List[3].infineon}`;
        h1Inf.append(oInf);

        const divRen = document.createElement('div');
        divRen.className = "renesas";
        root.append(divRen);
        let h1Ren = document.createElement('h1');
        h1Ren.className = "renesasH1";
        h1Ren.textContent = "Renesas";
        divRen.append(h1Ren);
        const renImg = document.createElement('img');
        renImg.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Renesas_Electronics_logo.svg';
        divRen.prepend(renImg);
        let pRen = document.createElement('p');
        pRen.textContent = `Référence trouvée : ${data.List[4].renesasTitle}`;
        h1Ren.append(pRen);
        let oRen = document.createElement('p');
        oRen.textContent = `Information Obso : ${data.List[4].renesas}`;
        h1Ren.append(oRen);

        const divMur = document.createElement('div');
        divMur.className = "murata";
        root.append(divMur);
        let h1Mur = document.createElement('h1');
        h1Mur.className = "murataH1";
        h1Mur.textContent = "Murata";
        divMur.append(h1Mur);
        const murImg = document.createElement('img');
        murImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Logo_muRata.svg/1200px-Logo_muRata.svg.png';
        divMur.prepend(murImg);
        let pMur = document.createElement('p');
        pMur.textContent = `Référence trouvée : ${data.List[5].murataTitle}`;
        h1Mur.append(pMur);
        let oMur = document.createElement('img');
        oMur.src = `https://www.murata.com/${data.List[5].murata}`;
        h1Mur.append(oMur);

        const divMicro = document.createElement('div');
        divMicro.className = "microchip";
        root.append(divMicro);
        let h1Micro = document.createElement('h1');
        h1Micro.className = "microchipH1";
        h1Micro.textContent = "Microchip";
        divMicro.append(h1Micro);
        const microImg = document.createElement('img');
        microImg.src = 'https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png';
        divMicro.prepend(microImg);
        let pMicro = document.createElement('p');
        pMicro.textContent = `Référence trouvée : ${data.List[6].microchipTitle}`;
        h1Micro.append(pMicro);
        let oMicro = document.createElement('p');
        oMicro.textContent = `Information Obso : ${data.List[6].microchip}`;
        h1Micro.append(oMicro);
      })

    app.init();
  },
}


document.addEventListener('DOMContentLoaded', app.init);
