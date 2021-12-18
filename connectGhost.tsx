import GhostContentAPI from "@tryghost/content-api";

const { BLOG_URL, CONTENT_API_KEY } = process.env;
const ghostapi = new GhostContentAPI({
  url: BLOG_URL,
  key: CONTENT_API_KEY,
  version: "v3",
});

export default ghostapi;
