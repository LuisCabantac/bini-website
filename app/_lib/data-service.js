export async function getPlaylists() {
  try {
    const res = await fetch(
      `${process.env.YOUTUBE_URL}/playlists?part=snippet&channelId=UCtOcDBKgyr-f50SgbMErFkQ&maxResults=6&key=${process.env.YOUTUBE_API_KEY}`
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
      `${process.env.YOUTUBE_URL}/playlistItems?part=snippet&maxResults=100&playlistId=PL3_2Aib0pKCD_HCc1li7gSSbRI24CaQdA&key=${process.env.YOUTUBE_API_KEY}`
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getLatestVideos() {
  try {
    const res = await fetch(
      `${process.env.YOUTUBE_URL}/search?part=snippet&channelId=UCtOcDBKgyr-f50SgbMErFkQ&order=date&key=${process.env.YOUTUBE_API_KEY}`
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
}
