#pragma strict

//Executes once in the beginning
function Start () {
	rigidbody.constraints = RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotation;	//freezes movement along z axis, freezes all rotation
	rigidbody.AddForce(Vector2(-1,1)*16, ForceMode.Impulse);	//adds an impulse when created
	collider.material.bounciness = 1;		//elastic collision
	collider.material.staticFriction = 0;	//no static friction
	collider.material.dynamicFriction = 0;	//no dynamic friction
}

//Executes every time frame is refreshed
function Update () {
	if(transform.position.x > 13 || transform.position.x < -13)	//ball goes out of window
		Destroy(this.gameObject);			//destroy ball
}