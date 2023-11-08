document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "b45ab56a7amshabd17719adb902fp1c449ajsn1dbc27caf0c6";
    const apiUrl = "https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=113";
    const teamList = document.getElementById("teamList");
    const errorMess = document.getElementById("error");
   
    //real api
    // Fetch API
    // fetch(apiUrl, {
    //     method: "GET",
    //     headers: {
    //         "X-RapidAPI-Key": apiKey,
    //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    //     }
    // })

    fetch('\PremierL.json')
        .then(response => response.json())
        .then(data => {
            const standings = data.response[0].league.standings[0];

            // Loopa igenom API-data och skapa en lista med lagdata
            standings.forEach(standing => {
                const teamData = standing.team;
                const rank = standing.rank;
                const teamName = teamData.name;
                const points = standing.points;

                // Skapa en klon av mallen för varje lag
                const teamElement = document.createElement("div");
                teamElement.classList.add("team");
                teamElement.dataset.teamid = teamData.id; // Lägg till team-id i data-attribut

                // Fyll i lagdatan i den klonade mallen
                teamElement.innerHTML = `
                    <div class="rank">${rank}</div>
                    <div class="name">${teamName}</div>
                    <div class="points">${points}</div>
                `;

                // Lägg till det nya laget i listan
                teamList.appendChild(teamElement);
            });

            // Lägg till en klickhändelse för varje lag efter att de har skapats
            const teamElements = document.querySelectorAll(".team");

            teamElements.forEach(team => {
                team.addEventListener("click", function () {
                    const teamId = team.dataset.teamid; // Hämta team-id från data-attribut
                    // Navigera till spelarlistan för det valda laget
                    window.location.href = `players.html?teamId=${teamId}`;
                });
            });
        })
        .catch(error => {
            console.error(error);
            errorMess.textContent = "Ett fel uppstod vid hämtning av ställning från API:et.";
        });
});
