#pragma strict

//Inspector variable
static var playerScore : int = 0;	//variable to store player score

//Executes once in the beginning
function Start () {
	rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotation; //freezes movement along x and z axes, freezes all rotation
	collider.material.bounciness = 1;		//elastic collision
	collider.material.staticFriction = 0;	//no static friction
	collider.material.dynamicFriction = 0;	//no dynamic friction
}

//Executes every time frame is refreshed
function Update () {
	if(Input.GetKey("up"))		//checks player input up
		if(transform.position.y < 7)	//checks ceiling condition
			transform.Translate(0,0.25,0,Space.World);	//moves paddle
	if(Input.GetKey("down"))	//checks player input down
		if(transform.position.y > -7)	//checks floor condition
			transform.Translate(0,-0.25,0,Space.World);	//moves paddle
}

//executes on every collision
function OnCollisionEnter()
{
	playerScore++;		//increments player score
	//print(playerScore);
}