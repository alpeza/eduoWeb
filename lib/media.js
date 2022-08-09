import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

export function getStrapiMediaByFormat(media,format) {
    var url = media.data.attributes.formats[format].url;
    return getStrapiURL(url);
  }