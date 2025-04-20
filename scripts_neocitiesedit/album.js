async function fetchRecentTrackAlbum() {
    const url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=soupie03&api_key=216aec7c1eb5598e43a42c593d722057&format=json";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.recenttracks && data.recenttracks.track.length > 0) {
            const track = data.recenttracks.track[0]; // Most recent track
            const albumCover = track.image[track.image.length - 1]["#text"]; // Largest album cover

            if (albumCover) {
                document.getElementById("myImg").src = albumCover;

            }
        }
    } catch (error) {
        console.error("Error fetching Last.fm data:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchRecentTrackAlbum);
