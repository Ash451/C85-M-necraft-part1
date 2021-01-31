var canvas= new fabric.Canvas("myCanvas")
var playerX=100
var playerY=100
var blockheight=30
var blockwidth=30
var playerobject=""
var blockobject=""

function updatePlayer() {
    fabric.Image.fromURL("player.png",function (img) {
    playerobject=img
    playerobject.scaleToWidth(150)
    playerobject.scaleToHeight(150)
    playerobject.set({
        top:playerY,
        left:playerX
    }) ;
    canvas.add(playerobject)   
    })


}
function blockUpdate(block) {
    fabric.Image.fromURL(block,function (img) {
        blockobject=img
        blockobject.scaleToWidth(blockwidth)
        blockobject.scaleToHeight(blockheight)
        blockobject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockobject)
    })
} 