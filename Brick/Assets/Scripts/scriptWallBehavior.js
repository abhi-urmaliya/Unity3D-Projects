#pragma strict

function Start () {
	collider.material.bounciness = 1;
	rigidbody.constraints = RigidbodyConstraints.FreezePosition | RigidbodyConstraints.FreezeRotation;
}

function Update () {

}