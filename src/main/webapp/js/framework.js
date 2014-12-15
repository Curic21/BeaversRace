//Get the objects of Box2d Library
var b2Vec2 = Box2D.Common.Math.b2Vec2
    ,   b2AABB = Box2D.Collision.b2AABB
    ,   b2BodyDef = Box2D.Dynamics.b2BodyDef
    ,   b2Body = Box2D.Dynamics.b2Body
    ,   b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    ,   b2Fixture = Box2D.Dynamics.b2Fixture
    ,   b2World = Box2D.Dynamics.b2World
    ,   b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    ,   b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
    ,   b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    ,   b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
    ,   b2Shape = Box2D.Collision.Shapes.b2Shape
    ,   b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef
    ,   b2Joint = Box2D.Dynamics.Joints.b2Joint
    ,   b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef
    ;



//Create standard boxes of given height , width at x,y
function createBox(world, x, y, width, height, options) 
{
     //default setting
    options = $.extend(true, {
        'density' : 1.0 ,
        'friction' : .3 ,
        'restitution' : 0.2 ,
         
        'linearDamping' : 0.0 ,
        'angularDamping' : 0.0 ,
         
        'gravityScale' : 1.0 ,
        'type' : b2Body.b2_dynamicBody,
        'data': '',
        'Draw': null
    }, options);
     
    var body_def = new b2BodyDef();
    var fix_def = new b2FixtureDef;
     
    fix_def.density = options.density;
    fix_def.friction = options.friction;
    fix_def.restitution = options.restitution;
     
    fix_def.shape = new b2PolygonShape();
     
    fix_def.shape.SetAsBox( width , height );
     
    body_def.position.Set(x , y);
     
    body_def.linearDamping = options.linearDamping;
    body_def.angularDamping = options.angularDamping;
     
    body_def.type = options.type;
    if(options.data != ''){
        var img = new Image();
        img.src = options.data;
    body_def.userData = img;
     }
    var b = world.CreateBody( body_def );
    var f = b.CreateFixture(fix_def);
    if(options.Draw)
    {b.Draw = options.Draw;}
     
    return b;
}

//Create standard boxes of given height , width at x,y
function createPol(world, x, y,options,points) 
{
    

     //default setting
    options = $.extend(true, {
        'density' : 1.0 ,
        'friction' : .02 ,
        'restitution' : 0.2 ,
         
        'linearDamping' : 0.0 ,
        'angularDamping' : 0.0 ,
         
        'gravityScale' : 1.0 ,
        'type' : b2Body.b2_dynamicBody,
        'data': '',
        'Draw': null
    }, options);
     
    var body_def = new b2BodyDef();
    var fix_def = new b2FixtureDef;
     
    fix_def.density = options.density;
    fix_def.friction = options.friction;
    fix_def.restitution = options.restitution;
     
    fix_def.shape = new b2PolygonShape();
     
    fix_def.shape.SetAsArray(points, points.length);
     
    body_def.position.Set(x , y);
     
    body_def.linearDamping = options.linearDamping;
    body_def.angularDamping = options.angularDamping;
     
    body_def.type = options.type;
    if(options.data != ''){
        var img = new Image();
        img.src = options.data;
    body_def.userData = img;
     }
    var b = world.CreateBody( body_def );
    var f = b.CreateFixture(fix_def);
    if(options.Draw)
    {b.Draw = options.Draw;}
     
    return b;
}