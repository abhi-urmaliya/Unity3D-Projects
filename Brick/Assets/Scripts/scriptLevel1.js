#pragma strict

//Inspector variables
var newBall : Transform;				//variable to store the ball prefab
var newBrick : Transform;				//variable to store brick prefab

//Private variables
private var ball : GameObject;			//variable to store info of current ball object
private var brick = Array(GameObject);	//variable to store info of current bricks on scene
private var brickLen : int;				//variable to store the number of bricks
private var paddle : GameObject;		//variable to store the info of player paddle
private var playerLife : int = 3;		//variable to store player attempts/lives

function Start () {
	paddle = GameObject.FindGameObjectWithTag("Paddle");	//stores paddle info in paddle
	var i : int;											//instantiate loop counter
	var j : int;											//instantiate loop counter
	var rowy : float = 8.0;									//variable to store row value
	var colx : float = -8.0;								//variable to store column value
	var inc : float = 0.0;									//variable to store gap between bricks
	for( i = 5 ; i > 0 ; i-- )								//inverted pyramid pattern instantiating loop
	{
		colx += inc;
		for( j = i ; j > 0 ; j-- )
		{
			Instantiate(newBrick,Vector3(colx,rowy,18.30872),newBrick.transform.rotation);
			colx += 4;
		}
		rowy -= 2.0;
		colx = -8.0;
		inc += 2.0;
	}
	brick = Array(GameObject.FindGameObjectsWithTag("Brick"));	//stores information of all bricks in brick array
	brickLen = brick.length;									//calculates and stores initial number of bricks from array
}

function Update () {
	ball = GameObject.FindGameObjectWithTag("Ball");			//stores ball info
	brick = Array(GameObject.FindGameObjectsWithTag("Brick"));	//stores current brick info
	if(brickLen > brick.length)									//if current number of bricks > previous number of bricks
	{
		audio.Play();											//play explosion audio
		brickLen = brick.length;								//update initial number of bricks value
	}
	if(brick.length == 0)										//if all bricks destroyed, show sceneWin
		Application.LoadLevel("sceneWin");						
	if(ball == null)											//if ball is detsroyed, reduce player life
	{
		playerLife--;
		if(playerLife == 0)										//if player life is zero, show sceneLose
			Application.LoadLevel("sceneLose");
		paddle.transform.position = Vector3(0,-8.135515,18.30872);		//move paddle to start position
		Instantiate(newBall,Vector3(0,-8.135515,18.30872),Quaternion.identity);	//instantiate new ball at start position
	}
}

function OnGUI ()
{
	GUI.Label(Rect(50,650,100,200),"Lives left : " + playerLife); //displays time on HUD
}