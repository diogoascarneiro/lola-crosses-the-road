let assetsArray = [];

let lolaSprite = new Image();
lolaSprite.src = "assets/lola-sprite.png";
lolaSprite.addEventListener('load', e => {ctx.drawImage(lolaSprite,0,0)});
assetsArray.push(lolaSprite);


function checkAssetsLoaded() {
    let counter = 0;
    assetsArray.forEach(img => {
        // img.addEventListener('load', e => {
        //     console.log(e);
        //     counter++;
        // });
        lolaSprite.addEventListener('load', e => {ctx.drawImage(lolaSprite,0,0); counter++});
    });
    console.log(counter);
    return counter === assetsArray.length ? true : false;

}


// image.addEventListener('load', e => {
//     ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
//   });