#pragma strict

//Inspector Variables
static var playerScore : int = 0;		//Global Variable to keep Player Score
var objB = Array();						//Array to store Brick information

//Executes in once in the beginning
function Start () {
	collider.material.bounciness = 0.9;	//Setting collider material bounciness <1 (inelastic collisions)
	rigidbody.constraints = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotation; //Restricting movement along Y and Z axes and rotation about all three axes
	collider.material.staticFriction = 1;	//Setting static friction to 1 - to get grip on ball for maneuverability
}

function Update () {
	if(Input.GetKey("left"))								//Checks if left arrow key is pressed
		if(transform.position.x > -10.2)					//Checks boundary (wall) positions
			transform.Translate(-0.25,0,0,Space.World);		//Moves the player paddle
	if(Input.GetKey("right"))								//Works same as for left arrow key
		if(transform.position.x < 10.2)
			transform.Translate(0.25,0,0,Space.World);
	objB = Array(GameObject.FindGameObjectsWithTag("Brick"));	//Storing all bricks information currently in scene in objB array
	playerScore = 15 - objB.length;								//Calculating score (Total bricks - present bricks)
	//print(playerScore);
}

function OnGUI() //handles GUI elements
{
	GUI.Label(Rect(50,630,100,200),"Score : " + playerScore); //displays score on HUD
}