#pragma strict

var target : Transform;
var distance = -10;
var lift = 1.5;
var distanceE = 10;

function Update () 
{
	transform.position = target.position + Vector3 (0, lift, distance);

	transform.LookAt (target);

	if (Input.GetKeyDown(KeyCode.E)
	)
		transform.position = target.position + Vector3 (0, lift, distanceE);

}

