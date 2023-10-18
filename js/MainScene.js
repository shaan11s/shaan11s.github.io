import Player from "./Player.js";
export default class MainScene extends Phaser.Scene {
    constructor(){
        super("MainScene");
    }

    preload() {
       Player.preload(this);
       this.load.image('tiles','assets/images/[Base]BaseChip_pipo.png');
       this.load.tilemapTiledJSON('map','assets/images/resume-map.json')
    }

    create(){
        const map = this.make.tilemap({key:'map'})

        //sanity check
        //this.add.image(0,0,'tiles');
        const tileset = map.addTilesetImage('[Base]BaseChip_pipo', 'tiles', 32,32,0,0);
        const floorLayer = map.createLayer('Tile Layer 1', tileset, 0,0); 
        const worldLayer = map.createLayer('Tile Layer 2', tileset, 0,0); 
        //create collision bounds on tilemap
        worldLayer.setCollisionByProperty({ collides: true });
        this.matter.world.convertTilemapLayer(worldLayer);
        //COLOR AND COLLLIDER DEBUG LINE BELOW
        const debugGraphics = this.add.graphics().setAlpha(0.75);
        // worldLayer.renderDebug(debugGraphics, {
        //   tileColor: null, // Color of non-colliding tiles
        //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        //   faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        // })
        
        //test
        // map.createStaticLayer('Tile Layer 2', tileset, 0,0);
        //console.log("create");
        this.player = new Player({scene:this, x:70,y:70, texture:'main-character', frame:'merchant_idle_1'});
        this.player.setFixedRotation();
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
        //HERE
        //this.physics.add.collider(player, floorLayer);
    }
    update(){
        this.player.update();
    }
    }

    //46 min!!
    //https://www.youtube.com/watch?v=fdXcD9X4NrQ