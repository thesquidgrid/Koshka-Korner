async function fetchRecentTrack() {
            const url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=soupie03&api_key=216aec7c1eb5598e43a42c593d722057&format=json";
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.recenttracks && data.recenttracks.track.length > 0) {
                    const track = data.recenttracks.track[0]; // Most recent track
                    const trackName = track.name;
                    const artistName = track.artist["#text"];
                    
                    document.getElementById("track-info").textContent = `${trackName} by ${artistName}`;
                } else {
                    document.getElementById("track-info").textContent = "No recent tracks found.";
                }
            } catch (error) {
                document.getElementById("track-info").textContent = "Error fetching track.";
                console.error("Error fetching Last.fm data:", error);
            }
        }

        fetchRecentTrack();