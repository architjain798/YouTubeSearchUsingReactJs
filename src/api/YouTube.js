import axios from "axios";

const KEY = "AIzaSyABZH4VLhsyGKS4G1C7MInhQFW6QDjP0ns";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
