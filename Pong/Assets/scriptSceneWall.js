#pragma strict

//Executed once in the beginning
function Start () {
	rigidbody.constraints = RigidbodyConstraints.FreezeAll;	//freezes all motion
	collider.material.bounciness = 1;		//elastic collision
	collider.material.staticFriction = 0;	//no static friction
	collider.material.dynamicFriction = 0;	//no dynamic friction
}

//Executed every time the frame is refreshed
function Update () {

}