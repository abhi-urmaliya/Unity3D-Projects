#pragma strict

function OnGUI()
{
	if(GUI.Button(Rect(450,300,100,30),"Start Game"))
		Application.LoadLevel("sceneLevel1");
	if(GUI.Button(Rect(456,340,90,30),"Exit Game"))
		Application.Quit();
		//print("Quit Application called");
}