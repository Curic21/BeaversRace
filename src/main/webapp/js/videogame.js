

/*  var world,
 walls = [],
 balls = [],
 canvas = document.getElementById('canvas');
 
 // Metodos de Box2D
 
 var b2Vec2 = Box2D.Common.Math.b2Vec2,
 b2BodyDef = Box2D.Dynamics.b2BodyDef,
 b2Body = Box2D.Dynamics.b2Body,
 b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
 b2World = Box2D.Dynamics.b2World,
 b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
 b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
 b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
 
 
 
 world = new b2World(new b2Vec2(0, 20), true);
 
 // Tamaño del canvas
 _cw = canvas.width;
 _ch = canvas.height;
 
 // Dimensiones del Escenario
 
 var wallsDimensions = [
 {x: _cw / 2, y: 0, w: _cw / 2, h: 1}, // Superior
 {x: _cw / 2, y: _ch, w: _cw / 2, h: 1}, // Inferior
 {x: 0, y: _ch / 2, w: 1, h: _ch}, // Izquierda
 {x: _cw, y: _ch / 2, w: 1, h: _ch}, // Derecha
 {x: 1, y: 520, w: 200, h: 10}, // plataforma
 {x: 500, y: 520, w: 200, h: 10}, // plataforma
 ];
 
 
 // Variable del jugador
 var player;
 
 // Creando Escenario(from wallsDimensions)
 
 for (var i = 0; i < wallsDimensions.length; i++) {
 
 var wallDef = new b2BodyDef;	// Creamos un cuerpo o elemento nuevo
 wallDef.type = b2Body.b2_staticBody;	// Establecemos que sea estÃ¡tico
 wallDef.position.Set(wallsDimensions[i].x / 30, wallsDimensions[i].y / 30);	// Establecemos su posiciÃ³n (1m=30px)
 
 // Creamos el muro y las plataformas
 
 var fixture = new b2FixtureDef;
 fixture.density = 10;		// Density determina el peso (irrelevante en este caso)
 fixture.friction = 0.5;		// Friction determina el roce con el resto de elementos
 fixture.restitution = 0.9;	// Capacidad de rebote (tambiÃ©n determina el de los elementos que rebotan en el)
 
 fixture.shape = new b2PolygonShape;	// Establecemos que serÃ¡ un polÃ­gono
 fixture.shape.SetAsBox(wallsDimensions[i].w / 30, wallsDimensions[i].h / 30); // Estableceos sus dimensiones (1m=30px)
 
 var wall = world.CreateBody(wallDef);	// AÃ±adimos al "mundo" el muro
 wall.CreateFixture(fixture);			// Establecemos la configuraciÃ³n del mundo
 
 walls.push(wall);	// AÃ±adimos el muro a un Array que contiene los muros (para posteriormente disponer del elemento)
 
 }
 
 /*Creando la pelota*/
/*   var ballDef = new b2BodyDef;
 ballDef.type = b2Body.b2_dynamicBody;
 ballDef.position.Set(1 / 30, 500 / 30);
 
 
 var fixture = new b2FixtureDef;
 fixture.density = 80;
 /*  fixture.friction = 0.1;
 fixture.restitution = 0.1;*/

/*  fixture.shape = new b2CircleShape(15 / 30); // Establecemos el radio (1m=30px)
 var ball = world.CreateBody(ballDef);
 ball.CreateFixture(fixture);
 
 balls.push(ball);
 
 
 // Drawing Canvas
 
 var debugDraw = new b2DebugDraw();	// Objeto de visualizaciÃ³n de depuraciÃ³n
 debugDraw.SetSprite(canvas.getContext("2d"));	// Establecemos el canvas para visualizarlo
 debugDraw.SetDrawScale(30);		// Escala de la visualizaciÃ³n
 debugDraw.SetFillAlpha(0.5);	// Transparencia de los elementos (debug)
 debugDraw.SetLineThickness(1.0);
 debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
 
 world.SetDebugDraw(debugDraw);	// Le proporcionamos al "mundo" la salida del debug
 
 
 
 var FPS = 60;	// Establecemos la tasa de refresco por segundo
 
 setInterval(function() {
 world.Step(1 / FPS, 10, 10);	// Avanzamos la escena
 world.DrawDebugData();
 world.ClearForces();
 }, 1000 / FPS);
 
 
 
 /*  canvas.addEventListener('click', function() {
 for (i = 0; i < 20; i++) {
 var ballDef = new b2BodyDef;
 ballDef.type = b2Body.b2_dynamicBody;
 ballDef.position.Set(_cw * 0.5 / 30, _ch * 0.2 / 30);
 
 /*Creando la pelota*/

/*           var fixture = new b2FixtureDef;
 fixture.density = 10;
 fixture.friction = 0.5;
 fixture.restitution = 0.8;
 fixture.shape = new b2CircleShape(15 / 30); // Establecemos el radio (1m=30px)
 
 var ball = world.CreateBody(ballDef)
 ball.CreateFixture(fixture);
 
 // Generamos una velocidad aleatoria
 var velocityFactor = 10,
 randVelocity = Math.round(Math.random() * velocityFactor * 2) - velocityFactor;
 
 ball.SetLinearVelocity(new b2Vec2(randVelocity, 0)) // Establecemos la velocidad con la que saldrÃ¡ la bola
 balls.push(ball);
 }
 });*/

// Global variables
var canvas;
var ctx;
var canvas_width;
var canvas_height;
var screen_width;
var screen_height;
var world;
var player;
//1 metre of box2d length becomes 100 pixels on canvas
var scale = 100;

$(function()
{
    //Get the canvas and the context
    canvas = $('#canvas');
    ctx = canvas[0].getContext('2d');

    
    //get canvas size
    canvas_width = canvas_width = parseInt(canvas.width());
    canvas_height = canvas_height = parseInt(canvas.height());

    screen_width = canvas_width / scale;
    screen_height = canvas_height / scale;

    // create the physics world
    world = createWorld();

    $(document).keydown(function(e)
    {
        MovePlayer(e);
        return false;
    });

    //Start the Game Loop!!!!!!!
    game_loop();

});





/*
 This method will draw the world again and again
 called by settimeout , self looped ,
 game_loop
 */
function game_loop()
{
    var fps = 60;
    var time_step = 1.0 / fps;

    //move the world ahead 
    world.Step(time_step, 8, 3);
    //Clear the forces , Box2d 
    world.ClearForces();
    
    //CONTEXTO

    // Fondo
    ctx.fillStyle = '#ffffff';	// Fondo blanco
    ctx.fillRect(0, 0, _cw, _ch);	// Rectángulo con el ancho y el alto del Canvas


    //redraw the world
    redraw_world(world, ctx);

    //call this function again 

    setTimeout('game_loop()', 1000 / 60);
}


/*
 Draw a world
 this method is called in a loop to redraw the world
 */
function redraw_world(world, context)
{
    world.DrawDebugData();

}

//Create box2d world object
function createWorld()
{
    var gravity = new b2Vec2(0, 6);
    var doSleep = true;
    world = new b2World(gravity, doSleep);

    //setup debug draw
    var debugDraw = new b2DebugDraw();
    debugDraw.SetSprite(ctx);
    debugDraw.SetDrawScale(scale);
    debugDraw.SetFillAlpha(0.9);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);

    world.SetDebugDraw(debugDraw);

    Level1();

    return world;
}


//NIVELES

function Level1() {
    //Crear Bordes del juego (lugar, x, y, anchura, altura)

    //superior e inferior

    createBox(world, 0, 0, 9, 0, {
        'type': b2Body.b2_staticBody, 'restitution': 0.5});

    createBox(world, 0, 5.5, 9, 0, {
        'type': b2Body.b2_staticBody, 'restitution': 0.5});

//lateral izquierdo y derecho

    createBox(world, 0, 0, 0, 9, {
        'type': b2Body.b2_staticBody, 'restitution': 0.5});

    createBox(world, 8.5, 0, 0, 9, {
        'type': b2Body.b2_staticBody, 'restitution': 0.5});


//Crear plataformas
    createBox(world, 0, 5.2, 9, .1, {
        'type': b2Body.b2_staticBody, 'restitution': 0.5});



    //create the letters properties
    var letters = {'restitution': .3, 'linearDamping': 1.0, 'angularDamping': 1.0, 'density': 2};
    var cube = {'restitution': .3, 'linearDamping': 1.0, 'angularDamping': 1.0, 'density': 0.1};

    var vertD = [];
    vertD[0] = new b2Vec2(0, 0);
    vertD[1] = new b2Vec2(.2, 0);
    vertD[2] = new b2Vec2(.4, .4);
    vertD[3] = new b2Vec2(.4, .7);
    vertD[4] = new b2Vec2(.2, 1.1);
    vertD[5] = new b2Vec2(0, 1.1);


    createPol(world, 2.3, .3, letters, vertD);

    /* createBox(world, 1.93, 1.4, 0.3, 0.1, letters);
     createBox(world, 1.5, 1, 0.1, 0.5, letters);
     createBox(world, 3.0, .5, .3, 0.1, letters);
     createBox(world, 2.95, .8, .12, 0.1, letters);
     createBox(world, 3.15, 1, .3, 0.1, letters);
     
     
     createBox(world, 3.2, 1.3, .12, 0.1, letters);
     createBox(world, 3.03, 1.5, .3, 0.1, letters);
     */
    player = createBox(world, 1, 3, .1, .1, cube);


}


//MOVIMIENTO JUGADOR

function MovePlayer(e)
{
    var force;
    switch (e.keyCode)
    {
        //Izquierda
        case 39:
            force = new b2Vec2(.5, 0);
            break;

            //Derecha    
        case 37:
            force = new b2Vec2(-.5, 0);
            break;

            //Arriba
        case 38:
            force = new b2Vec2(0, -.5);
            break;
    }

    player.ApplyForce(force, player.GetPosition());


}


