const url = "https://restcountries.com/v3.1/name/azerbaijan"; 
 
const container = document.getElementById("container"); 
 
const fetched = () => { 
  fetch(url).then((res) => 
    res.json().then((data) => { 
 
      console.log(data); 
       
      const olkeAdi = data[0].name.common; 
      const paytaxt = data[0].capital; 
      const bayraq = data[0].flags.png; 
      const gerb = data[0].coatOfArms.png; 
      const erazi = data[0].area; 
      container.innerHTML += ` 
      <div id="country"> 
      <h1>${olkeAdi}</h1> 
      <img src="${bayraq}" alt=""> 
      <span>${erazi}</span> 
      <img style="width:100px" src="${gerb}" alt=""> 
      <p>${paytaxt}</p> 
  </div>`; 
    }) 
  ); 
}; 
 
fetched();