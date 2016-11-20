#pragma strict

var maxFallDistance = -10;
private var isRestarting = false;

function Update () {

  if (transform.position.y <= maxFallDistance)
  {
    if (isRestarting == false)
    {
      RestartLevel();
    }

  }
}

function RestartLevel () {
  GetComponent.<AudioSource>().Play();
  yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
  Application.LoadLevel("Level01");
}
