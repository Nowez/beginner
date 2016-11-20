#pragma strict

//Var = Visable to Unity

var rotationSpeed = 100;
var jumpHeight = 8;

//Private var = not visable to Unity

private var isFalling = false;

function Update ()
{
	//Handle ball rotation
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);

	//Handle ball jumping
	if (Input.GetKeyDown(KeyCode.Space) && isFalling == false)
	{
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;

	}
	isFalling = true;

}

function OnCollisionStay ()
{
	isFalling = false;
}
