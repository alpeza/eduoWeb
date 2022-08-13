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


export function getStrapiMediaInfo(media) {
  try {
    const { url,width,height,alternativeText  } = media.data?.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return {
      url: imageUrl,
      width: width,
      height: height,
      alt: alternativeText
    };
  } catch (error) {
    console.error(error)
  }
  return {}
}
  