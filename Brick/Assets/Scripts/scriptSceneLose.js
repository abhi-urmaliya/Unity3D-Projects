#pragma strict

//Private Variables
private var finalScoreLose : int;

function Start () {
	finalScoreLose = transform.GetComponent(scriptPlayer).playerScore;	
}

function OnGUI()
{
	GUI.Label(Rect(450,250,100,200),"YOU LOSE!");
	GUI.Label(Rect(445,275,100,200),"Final Score : " + finalScoreLose);
	if(GUI.Button(Rect(440,300,100,30),"Restart Game"))
		Application.LoadLevel("sceneLevel1");
	if(GUI.Button(Rect(445,340,90,30),"Exit Game"))
		Application.Quit();
		//print("Quit Application called");
}