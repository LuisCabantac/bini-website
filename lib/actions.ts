"use server";

export interface VideosId {
  playlistId?: string;
  videoId?: string;
}

export interface VideosItemsType {
  id?: VideosId | string;
  title?: string;
  snippet: {
    title: string;
    resourceId?: { videoId: string };
    thumbnails: {
      maxres?: { url: string; width: number; height: number };
      high: { url: string };
    };
  };
}

interface VideosType {
  items: VideosItemsType[];
}

export async function getPlaylists(
  maxResults: number,
): Promise<VideosItemsType[]> {
  try {
    const res = await fetch(
      `${process.env.YOUTUBE_API_URL}playlists?part=snippet&channelId=${process.env.CHANNEL_ID}&maxResults=${maxResults}&key=${process.env.YOUTUBE_API_KEY}`,
    );
    const result: VideosType = await res.json();
    return result.items.filter(
      (item) => item.snippet.thumbnails.maxres !== undefined,
    );
  } catch (err) {
    throw new Error("Unable to retrieve playlists. Please try again later.");
  }
}

export async function getMusicVideos(): Promise<VideosItemsType[]> {
  try {
    const res = await fetch(
      `${process.env.YOUTUBE_API_URL}playlistItems?part=snippet&maxResults=50&playlistId=PL3_2Aib0pKCD_HCc1li7gSSbRI24CaQdA&key=${process.env.YOUTUBE_API_KEY}`,
    );
    const result = await res.json();
    return result.items;
  } catch (err) {
    throw new Error("Unable to retrieve music videos. Please try again later.");
  }
}

export async function getVideos(
  order: string,
  query: string,
  maxResults: number,
  allVideosId: string,
): Promise<VideosItemsType[]> {
  try {
    const res = await fetch(
      `${process.env.YOUTUBE_API_URL}search?part=snippet&channelId=${process.env.CHANNEL_ID}&maxResults=${maxResults}&order=${order}${
        query ? `&q=${query}` : ""
      }&type=${allVideosId === "all-videos" ? "video" : "playlist"}&key=${
        process.env.YOUTUBE_API_KEY
      }`,
    );
    const result = await res.json();
    return result.items;
  } catch (err) {
    throw new Error("Unable to retrieve videos. Please try again later.");
  }
}
