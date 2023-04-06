function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64dgKfjSwuN":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbw09FKA3MhEogY5Os_jwzn9WbTS3vVSHK0Wvnyut81Q1rqsJOrkM4zA_SeePjZtu26Z6A/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

