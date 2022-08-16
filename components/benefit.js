import { getStrapiURL } from "../lib/api";
import { getIcon } from "../lib/iconlib";

export function Benefit(p) {
    try {
        var imageurl = ""
        var size = { height: 40, width: 40 }
        imageurl = getStrapiURL(p.Image.data[0].attributes.url)
        size.height = p.Image.data[0].attributes.height
        size.width = p.Image.data[0].attributes.width
      } catch (error) {
        imageurl = getStrapiURL(p.Image.data.attributes.url)
        size.height = p.Image.data.attributes.height
        size.width = p.Image.data.attributes.width
      }
    var benefit = {
        title: p.Title,
        desc: p.Text,
        image: imageurl,
        imageSize: size,
        bullets:[]
    };
    for (let i = 0; i < p.CardItem.length; i++) {
        const e = p.CardItem[i];
        benefit.bullets.push(
            {
                title: e.Title,
                desc: e.Text,
                icon: getIcon(e.Icon.trim()),
            }            
        )
    }
    return benefit;
}

