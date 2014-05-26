#pragma strict

//Private variables
private var newBall : GameObject; //variable to store new ball info

//Inspector variables
var ball : Transform;		//variable to create ball
var player : Transform;		//variable to create player paddle
var enemy : Transform;		//variable to create enemy paddle
var wall : Transform;		//variables to create florr, ceiling
var attempts : int = 5;		//variable to store attempts

//Executes once in the beginning
function Start () {
	Instantiate(ball,Vector3.zero,Quaternion.identity);				//creates ball
	Instantiate(player,Vector3(-13,0,0),player.transform.rotation);	//creates player paddle
	Instantiate(enemy,Vector3(13,0,0),enemy.transform.rotation);	//creates enemy paddle
	Instantiate(wall,Vector3(0,9.75,0),wall.transform.rotation);	//creates ceiling
	Instantiate(wall,Vector3(0,-9.75,0),wall.transform.rotation);	//creates floor
}

//Executes every time frame is refreshed
function Update () {
	newBall = GameObject.FindGameObjectWithTag("Ball");	//stores new ball info
	if(newBall == null)									//if no ball present
	{
		attempts--;										//decrements attempts left
		RespawnWaitTime();								//calls delay
		Instantiate(ball,Vector3.zero,Quaternion.identity);	//creates a new ball
	}
	//else
		//Application.Quit;
}

//creates a delay
function RespawnWaitTime()
{
	print("Respawn Wait Time called");
	yield WaitForSeconds(1.0);
}
