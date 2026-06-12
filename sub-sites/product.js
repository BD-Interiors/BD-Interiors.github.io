
$(document).ready(function () {
  // kijk in de JSON file
  $.getJSON("../producten/banken.json", function (producten) {
    // zet alle procuten in de div met id het bijhorenende id
    const div = $("#banken");
    // Pak elk product en voeg het toe aan de html.
    producten.forEach(function (product) {
      div.append(`
        <div id="product">
          <img id="product-img" src="${product.afbeelding}">
          <h2>${product.naam}</h2>
          <p>${product.beschrijving}</p>
          <h3>€${product.prijs}</h3>
          <button id="koop">Voeg toe aan winkelmandje</button>
        </div>
      `);
    });
  });

  $.getJSON("../producten/bedden.json", function (producten) {
    const div = $("#bedden");

    producten.forEach(function (product) {
      div.append(`
        <div id="product">
          <img id="product-img" src="${product.afbeelding}">
          <h2>${product.naam}</h2>
          <p>${product.beschrijving}</p>
          <h3>€${product.prijs}</h3>
          <button id="koop">Voeg toe aan winkelmandje</button>
        </div>
      `);
    });
    
  });

  $.getJSON("../producten/kasten.json", function (producten) {
    const div = $("#kasten");

    producten.forEach(function (product) {
      div.append(`
        <div id="product">
          <img id="product-img" src="${product.afbeelding}">
          <h2>${product.naam}</h2>
          <p>${product.beschrijving}</p>
          <h3>€${product.prijs}</h3>
          <button id="koop">Voeg toe aan winkelmandje</button>
        </div>
      `);
    });
    
  });

  $.getJSON("../producten/uitgelicht.json", function (producten) {
    const div = $("#uitgelicht-product");

    producten.forEach(function (product) {
      div.append(`
        <div id="product">
          <img id="product-img" src="${product.afbeelding}">
          <h2>${product.naam}</h2>
          <p>${product.beschrijving}</p>
          <h3>€${product.prijs}</h3>
          <button id="koop">Voeg toe aan winkelmandje</button>
        </div>
      `);
    });
    
  });
});
