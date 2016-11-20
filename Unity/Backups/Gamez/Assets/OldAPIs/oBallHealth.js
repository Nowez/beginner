#pragma strict

var maxFallDistance = -10;

function Update () {

  if (transform.position.y <= maxFallDistance)
  {
    RestartLevel();
  }
}

function RestartLevel () {
  GetComponent.<AudioSource>().play();
  yield WaitForSeconds (GetComponent.<AudioSource>().clip.lenght);
  Application.LoadLevel("Level01");
}
