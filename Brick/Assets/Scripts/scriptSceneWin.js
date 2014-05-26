#pragma strict

//Private Variables
private var finalScoreWin : int;

function Start () {
	finalScoreWin = transform.GetComponent(scriptPlayer).playerScore;	
}

function OnGUI()
{
	GUI.Label(Rect(455,250,100,200),"YOU WIN!");
	GUI.Label(Rect(445,275,100,200),"Final Score : " + finalScoreWin);
	if(GUI.Button(Rect(440,300,100,30),"Restart Game"))
		Application.LoadLevel("sceneLevel1");
	if(GUI.Button(Rect(445,340,90,30),"Exit Game"))
		Application.Quit();
		//print("Quit Application called");
}