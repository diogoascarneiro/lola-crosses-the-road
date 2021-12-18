# Intro
**WELCOME TO LOLA CROSSES THE ROAD!**

*A game about a good girl (who knows how to cross the road).*

*by Diogo Carneiro (https://github.com/diogoascarneiro)*

![A gameplay gif of LCTR](https://github.com/diogoascarneiro/lola-crosses-the-road/blob/master/LCTR.gif)

---
# Play it here!
[LOLA CROSSES THE ROAD ON GITHUB](https://diogoascarneiro.github.io/lola-crosses-the-road/)
---

# About

This game was created while studying at Ironhack Lisbon in under two weeks, and was the first individual project developed there. The requirements were to use JS, DOM Manipulation and HTML Canvas to create a game of our choosing. Since I happen to be the happy pet parent of a four-legged princess / drama queen that I taught not to cross any road without permission, the choice was clear. 

I mean, just look at her. :dog2: 	:sparkling_heart:

![This is Lola!](https://raw.githubusercontent.com/diogoascarneiro/lola-crosses-the-road/master/Lola.jpg)

Soon the ideas came flooding into my brain - game mechanics, easter eggs, concentration bars, a dog treat-based score system... but alas, I only had two weeks to do this. So the multi-title franchise that would catapult my dog into the homes and hearts of gamers everywhere suddenly became...a Frogger clone. And you know what? That's pretty cool too.

# Controls :joystick:
Use the arrow keys to move! Simple as that. 

---

## Technologies used
"Lola Crosses The Road" is written in vanilla Javascript, and uses HTML Canvas and CSS to present it as a browser game. It follows OOP (Object Oriented Programming) principles (for the most part), and makes extensive use of 16x16 image assets arranged in a tileset. To make working with them easier, I've created a few ways to add new assets to the game and then draw them (without using that gigantic ctx.drawImage function). Some examples:

### Adding an image asset (tileset or sprite)
```
const carSprites = new ImgAsset("./assets/cars.png", 16, 16, 0, 0);
carSprites.register();
```

ImgAsset is a new class extending the default Image() that takes the following arguments: 
- src = link to the image;
- frameWidth = width of the frame (typically 16x16 or a multiple);
- frameHeight = same as above but for the height;
- wOffset = extra pixels, width-wise, that need to be added to reach the desired part of the tileset or sprite. It's best to just format your tilesets or sprites so that they are neatly arranged in multiples of 16, but if you can't for some reason, you can use this.
- hOffset = same as above, but for height.

register() adds the image to an asset array, which is then checked on window load to make sure all images are loaded before starting the game.

### Identifying individual assets within a tileset/sprite
```
cityTileset.bigTree = {
  frameWidth: 48,
  frameHeight: 48,
  spriteSX: 8 * 16,
  spriteSY: 11 * 16,
};
```
Coordinates for the individual assets are stored as an object within the ImgAsset object.
- frameWidth = width of the frame (typically 16x16 or a multiple);
- frameHeight = same as above but for the height;
- spriteSX & spriteSY - the position of the asset within the tileset/sprite. I list them in multiples of 16/32 to make them easier to identify, but you do you! These can be standalone values within the main object, or can be inside a different object like this:

```
carSprites.red = {
  frameWidth: 48,
  frameHeight: 32,
  up: { spriteSX: 0, spriteSY: 2 * 32 },
  down: { spriteSX: 0, spriteSY: 3 * 32 },
  left: { spriteSX: 0, spriteSY: 1 * 32 },
  right: { spriteSX: 0, spriteSY: 0 },
}
```

### Drawing the assets
Tired of writing these incredibly long ctxdrawImage functions? Use my patented solution, the simpleDraw function!

Simply feed the function the following arguments:

- imgObject = the imgAsset object aka tileset/sprite;
- assetName = a string with the name of the specific item we want to draw. These are defined in assets.js
- dx & dy = start coordinates to place the item
- widthMultiplier & heightMultiplier = use these to make items smaller or bigger. E.g. 2 will double the width or height;
- direction = the direction of the asset

Try simpleDraw() for all your map drawing needs today! *(note: solution not actually patented)*

```
simpleDraw(carSprites, this.type, this.x, this.y, 1.5, 1.5, this.direction);
```

## Known Issues
* Due to starting the project by sizing the canvas to my own laptop's height, it can be sort of off on some other screens. An attempt was made to fix this by changing the zoom depending on the player's screen size, but some further adjustment in terms of zooming might be needed for an optimal experience.

# Some features I'd like to add in the future
* Animations - I have assets to animate Lola's movement but sadly did not have time to implement this - same with the people walking around randomly;
* Better person AI - People walk a bit like headless chickens at the moment. I have made them susceptible to being run over by cars as punishment for their digital sins, but it is I as their creator who is to blame. As a benevolent deity, I at least ought to make them cross roads faster and have a more steady, determined walk (while keeping it somewhat random).
* A map generator - there's a function to generate roads with different numbers of crosswalks and I'd like to do the same for other objects
* An "Owner" npc that tells Lola when to cross or stay! Following instructions would earn her "treats" (points) while failing to do so would make her lose them. 
* ...and a million other things

---
# License
This code is under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/#) license.

# Credits
**Music:** [Mimimic](https://mimimic.bandcamp.com/) (Diogo Carneiro aka me)

**Image Assets:**
- [City Pack - Top Down - Pixel Art by NYKNCK](https://nyknck.itch.io/citypackpixelart)
- [Pixel Dogs by Benvictus (modified by me)](https://benvictus.itch.io/pixel-dogs) 
- [Modern City Top-Down Tileset by Exuin](https://emily2.itch.io/modern-city) 
