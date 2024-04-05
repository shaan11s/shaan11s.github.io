# resumeGame
Resume Game V1.0

This is a game created with Phaser3 to promote myself through an interactive resume experience!

This game allows the user to use keyboard keys 'WASD' and 'space' to navigate a small world and interact with NPCs that each know a little about Shaan.

A world was created with a tilemap featuring two layers, one which formed the background, and one which formed the structures (houses, plants, terrain). 
The player was allowed to walk on layer 1, the background, but not layer 2. This created a realistic experience like feeling for the user. 

The player object was animated using a series of frames. A JSON file as well as a standard set of PNGs were used together to create the animation. 
NPC's for version 1 all have the same appearance as the player object just because of the sheer time it would take to design each frame for each NPC. 
Expect this update to come along shortly.

Dialogue boxes were essential for the game to be of any use, each featuring a small bit of information about the main character.
The dialogue boxes reveal themselves when the player is a certain distance from the NPC, and dissapears once the player has left that range, 3 seconds after.
It is possible using Phaser 3 matter physics to move the NPCs themselves with the character. 
Dialogue boxes still work on the moved player, and even follow the NPC as it is being moved. 

Expect design updates before function updates, including an easy to read font, more pleasing dialogue box styles, as well as unique NPC sprites. 
Following, an implementation of buildings interiors would be priority. 
