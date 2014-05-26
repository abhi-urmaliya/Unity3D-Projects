#pragma strict

//Private Variables
private var ball : GameObject;	//variable to store pong ball info

//Inspector Variables
static var enemyScore : int = 0;	//variable to store enemy score

//Executes once in the beginning
function Start () {
	rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotation;	//restricts motion along x and z axes, freezes all rotation
	collider.material.bounciness = 1;			//elastic collisions
	collider.material.staticFriction = 0;		//no static friction
	collider.material.dynamicFriction = 0;		//no dynamic friction
}

//Executes every time frame is refreshed
function Update () {
	ball = GameObject.FindGameObjectWithTag("Ball");	//storing ball info
	if(ball)											//if ball exists in scene
	{
		if(ball.transform.position.x > -7 && ball.rigidbody.velocity.x > 0)	//if ball is coming toward enemy paddle
		{
			if(ball.transform.position.y != transform.position.y)			//if enemy paddle is not in front of ball
			{
				if(ball.transform.position.y > transform.position.y)		//if ball is above paddle
					if(transform.position.y < 7)							//if paddle is below ceiling
						transform.Translate(0,0.25,0,Space.World);			//move paddle
				if(ball.transform.position.y < transform.position.y)		//if ball is below paddle
					if(transform.position.y > -7)							//if paddle is above floor
						transform.Translate(0,-0.25,0,Space.World);			//move paddle
			}
		}
	}
}

//Called on every collision
function OnCollisionEnter()
{
	enemyScore++;			//increments enemy score
	//print(enemyScore);
}