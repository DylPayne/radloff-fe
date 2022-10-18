import { getStrapiMediaURL } from "./api"

export function getStrapiMedia(media) {
  const url = media.data.attributes.url;
  const imageUrl = url.startsWith("/") ? getStrapiMediaURL(url) : url
  console.log(imageUrl)
  return imageUrl
}