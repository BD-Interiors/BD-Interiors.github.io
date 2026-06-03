$(document).ready(function () {
  $.getJSON("banken.json", function (producten) {
    const container = $("#banken");

    producten.forEach(function (product) {
      container.append(`
        <div class="product">
          <img src="${product.afbeelding}">
          <h2>${product.naam}</h2>
          <p>${product.beschrijving}</p>
          <h3>€${product.prijs}</h3>
          <button>Voeg toe aan winkelmandje</button>
        </div>
      `);
    });
    
  });

  $.getJSON("bedden.json", function (producten) {
    const container = $("#bedden");

    producten.forEach(function (product) {
      container.append(`
        <div class="product">
          <img src="${product.afbeelding}">
          <h2>${product.naam}</h2>
          <p>${product.beschrijving}</p>
          <h3>€${product.prijs}</h3>
          <button>Voeg toe aan winkelmandje</button>
        </div>
      `);
    });
    
  });

  $.getJSON("kasten.json", function (producten) {
    const container = $("#kasten");

    producten.forEach(function (product) {
      container.append(`
        <div class="product">
          <img src="${product.afbeelding}">
          <h2>${product.naam}</h2>
          <p>${product.beschrijving}</p>
          <h3>€${product.prijs}</h3>
          <button>Voeg toe aan winkelmandje</button>
        </div>
      `);
    });
    
  });
});