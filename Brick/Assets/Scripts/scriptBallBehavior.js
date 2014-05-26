#pragma strict

//Inspetor Variables
var paddle : GameObject;		//Variable to store player information

//Executes once in the beginning
function Start () {
	rigidbody.constraints = RigidbodyConstraints.FreezePositionZ;	//Freezing position on Z axis
	collider.material.bounciness = 1;								//Setting bounciness to 1 (elastic collisions)
	collider.material.staticFriction = 1;							//Setting friction 1 (maneuverability)
	paddle = GameObject.FindGameObjectWithTag("Paddle");			//Storing playr information in paddle
}

function Update () {
	if(transform.position.y > -8.0 && transform.position.y < -6.5 && transform.position.x >= (paddle.transform.position.x - 2) && transform.position.x <= (paddle.transform.position.x + 2))	//Field around paddle where player can apply force
	{
		if(Input.GetKey(KeyCode.Space))								//Checks for Space key input
			rigidbody.AddForce(Vector2.up*4,ForceMode.Impulse);		//If space is pressed, applies an impulse to the ball
		if(Input.GetKey("left"))									//If left key is pressed, applies an impulse left to maneuver ball
			rigidbody.AddForce(-0.5,0,0,ForceMode.Impulse);
			//transform.Translate(-0.25,0,0,Space.World);
		if(Input.GetKey("right"))									//Same as for left key
			//transform.Translate(0.25,0,0,Space.World);
			rigidbody.AddForce(0.5,0,0,ForceMode.Impulse);
	}
	if(transform.position.x < -13.0)								//Checks for wall conditions, if goes beyond, applies a force back
		rigidbody.AddForce(1,0,0,ForceMode.Impulse);
	if(transform.position.x > 13.0)
		rigidbody.AddForce(-1,0,0,ForceMode.Impulse);
	if(transform.position.y < -9)									//Checks for paddle miss, destroys ball on miss
		Destroy(this.gameObject);
}