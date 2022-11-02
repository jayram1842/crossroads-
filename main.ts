controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Cc.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Cc.x += 16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Cc.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Cc.y += -16
})
let projectile: Sprite = null
let Cc: Sprite = null
Cc = sprites.create(img`
    . . . c c c . . . . . . c c . . 
    . . . c c c . . . . . c c c . . 
    . . c c b c c . . . c c b c . . 
    . . c c b b c . . c c b b c . . 
    . . c c c b c c c c b b b c . . 
    c c c b b b b c c c b b b c c c 
    c b b b b b b b c b b b b b b c 
    c b b b f f b b b b f f b b b c 
    c b b b f f b b b b f f b b b c 
    c b b b c b b b b b c c b b b c 
    c b b b b c b 3 3 b c b b b c . 
    c c b b b c b c b b c b b c c . 
    . c b b b c c c c c c b b c . . 
    . c c b b b b b b b b b c c . . 
    . . c c c b b b b c c c c . . . 
    . . . . c c c c c . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(13)
game.onUpdateInterval(500, function () {
    let mySprite: Sprite = null
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
    mySprite.setPosition(0, 0)
})
