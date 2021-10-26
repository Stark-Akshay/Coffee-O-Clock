

let coffee = '{"item":[' +
'{"heading":"ESPRESSO","desc":"Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees." },' +
'{"heading":"LATTE","desc":"A latte is a classic coffee that is constructed with the two pillar ingredients: espresso and steamed milk. The word latte comes from the Italian word caffè e latte (other variants are caffeelatte and caffellatte), which simply means coffee and milk"},' +
'{"heading":"CAPPUCCINO","desc":"A cappuccino is an espresso-based coffee drink that originated in Italy, and is prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder."}]}';

const obj = JSON.parse(coffee);

let rotation = 0;
    var c = 0;
    function rotateImg() {
      rotation += 45; // add 90 degrees, you can change this as you want
      if (rotation === 360) { 
        // 360 means rotate back to 0
        rotation = 0;
      }
      document.querySelector("#coffee").style.transform = `rotate(${rotation}deg)`;
    }

    function countRoate() {
      rotation -= 45; // add 90 degrees, you can change this as you want
      if (rotation === 0) { 
        // 360 means rotate back to 0
        rotation = 360;
      }
      document.querySelector("#coffee").style.transform = `rotate(${rotation}deg)`;
    }

    document.querySelector("#right").addEventListener('click',() => {
     rotateImg();
     c += 1;
     if(c === 8){
         c = 0;
     }
     /*
     document.querySelector('.b-heading').textContent=obj.item[c].heading;
     document.querySelector('.b-desc').textContent=obj.item[c].desc;*/
     console.log(c);
    });
    

    document.querySelector("#left").addEventListener('click',() => {
     countRoate();
     c -= 1;
     if(c === 0 ){
         c=8;
     }
     /*
     document.querySelector('.b-heading').textContent=obj.item[c].heading;
     document.querySelector('.b-desc').textContent=obj.item[c].desc;*/
     console.log(c);
    });


