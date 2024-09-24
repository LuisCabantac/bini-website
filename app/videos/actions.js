const CHANNEL_ID = "UCtOcDBKgyr-f50SgbMErFkQ";
const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/";

export async function getPlaylists(maxResults) {
  try {
    const res = await fetch(
      `${YOUTUBE_API_URL}playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=${maxResults}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getMusicVideos() {
  try {
    const res = await fetch(
      `${YOUTUBE_API_URL}playlistItems?part=snippet&maxResults=50&playlistId=PL3_2Aib0pKCD_HCc1li7gSSbRI24CaQdA&key=${process.env.YOUTUBE_API_KEY}`
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getVideos(order, query, maxResults, type) {
  try {
    const res = await fetch(
      `${YOUTUBE_API_URL}search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${maxResults}&order=${order}${
        query ? `&q=${query}` : ""
      }&type=${type}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
}
