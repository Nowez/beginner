#pragma strict

var maxFallDistance = -10;

function Update () {

  if (transform.position.y <= maxFallDistance)
  {
    RestartLevel();
  }
}

function RestartLevel () {
  GetComponent.<AudioSource>().Play();
  yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
  Application.LoadLevel("Level01");
}
