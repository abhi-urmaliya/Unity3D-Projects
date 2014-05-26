#pragma strict

//Inspector Variables
var radius = 5.0;			//defines collision radius
var brickPoint : int = 1;	//defines points for brick
var explosion : Transform;	//variable to store explosion prefab

function Start () {
	collider.isTrigger = true;	//makes the collider material a trigger
	rigidbody.constraints = RigidbodyConstraints.FreezeAll;	//freezes all translation and rotation (makes the brick fixed)
}

function Update () {
	
}

//defines when the trigger is activated what should happen
 function OnTriggerEnter (other : Collider) {
        // Applies an explosion force to all nearby rigidbodies
        var explosionPos : Vector3 = transform.position;
        var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);	//creates a field where the force would be felt
        
        for (var hit : Collider in colliders) {		//checks if any brick is hit
            if (!hit)
                continue;
            
            if (hit.rigidbody) {					//if a brick is hit
                hit.rigidbody.AddForce(Random.Range(-10,10),Random.Range(-10,10),0.0,ForceMode.Impulse);	//applies a random force to the ball
                Instantiate(explosion,transform.position,Quaternion.identity);	//instantiates explosion prefab at brick position
                Destroy(this.gameObject);			//destroys the brick
            }
        }
}