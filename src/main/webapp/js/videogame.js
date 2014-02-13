(function() {

    var world,
            walls = [],
            balls = [],
            canvasDebug = document.getElementById('canvasDebug');

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
    _cw = canvasDebug.width,
            _ch = canvasDebug.height;

// Dimensiones del Escenario

    var wallsDimensions = [
        {x: _cw / 2, y: 0, w: _cw / 2, h: 1}, // Superior
        {x: _cw / 2, y: _ch, w: _cw / 2, h: 1}, // Inferior
        {x: 0, y: _ch / 2, w: 1, h: _ch}, // Izquierda
        {x: _cw, y: _ch / 2, w: 1, h: _ch}, // Derecha
        {x: _cw / 2, y: 520, w: 800, h: 10}	// plataforma
    ];



// Creando Escenario(from wallsDimensions)

    for (var i = 0; i < wallsDimensions.length; i++) {

        var wallDef = new b2BodyDef;	// Creamos un cuerpo o elemento nuevo
        wallDef.type = b2Body.b2_staticBody;	// Establecemos que sea estÃ¡tico
        wallDef.position.Set(wallsDimensions[i].x / 30, wallsDimensions[i].y / 30);	// Establecemos su posiciÃ³n (1m=30px)

// Creamos un objeto nuevo

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

// Drawing Canvas

    var debugDraw = new b2DebugDraw();	// Objeto de visualizaciÃ³n de depuraciÃ³n
    debugDraw.SetSprite(canvasDebug.getContext("2d"));	// Establecemos el canvas para visualizarlo
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



    canvasDebug.addEventListener('click', function() {
        for (i = 0; i < 20; i++) {
            var ballDef = new b2BodyDef;
            ballDef.type = b2Body.b2_dynamicBody;
            ballDef.position.Set(_cw * 0.5 / 30, _ch * 0.2 / 30);

            /*Creando la pelota*/

            var fixture = new b2FixtureDef;
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
    });

}(jQuery, Box2D));