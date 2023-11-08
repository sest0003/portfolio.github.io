document.addEventListener("DOMContentLoaded", function () {
    const playerListDiv = document.getElementById("player-list");
   
    //Faijk
    fetch('\manchesterUnited.json')
  .then(response => response.json())
  .then(data => {
  



    // Real Api
    // Hämta teamId från URL:en
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get("teamId");
    
    const apiKey = "b45ab56a7amshabd17719adb902fp1c449ajsn1dbc27caf0c6"; // Lägg till apiKey här

   // Hämta och visa spelarlistan baserat på teamId
   
 
    // fetch(`https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${teamId}`, {
    //     method: "GET",
    //     headers: {
    //         "X-RapidAPI-Key": apiKey,
    //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {

        console.log(data);

        if (Array.isArray(data.response) && data.response.length > 0) {
          
            const players = data.response[0].players;

            // Loopa igenom spelardata och fyll i div-elementet med spelarnamn
            players.forEach(player => {
                const playerName = player.name;
                const position = player.position;
                const photo = player.photo;

            
                const playerDiv = document.createElement("div");
                playerDiv.innerHTML = `
                    <p>${playerName}</p>
                    <p>${position}</p>
                    <img src=${photo}>
                `;
            
                playerListDiv.appendChild(playerDiv);
            });
            
} else {
    console.error("API-svaret innehåller inte en förväntad spelarlista eller inga spelare hittades.");
}
})
.catch(error => {
console.error(error);
// Hantera fel om det uppstår något
});
});