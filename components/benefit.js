import {
    EmojiHappyIcon,
    ChartSquareBarIcon,
    CursorClickIcon,
    DeviceMobileIcon,
    AdjustmentsIcon,
    SunIcon,
} from "@heroicons/react/outline";
import { getStrapiURL } from "../lib/api";


export function GetIcon(iconString){
    if (iconString == "EmojiHappyIcon")
        return <EmojiHappyIcon />
    else if (iconString == "ChartSquareBarIcon")
        return <ChartSquareBarIcon />
    else if (iconString == "CursorClickIcon")
        return <CursorClickIcon />
    else if (iconString == "DeviceMobileIcon")
        return <DeviceMobileIcon />
    else if (iconString == "AdjustmentsIcon")
        return <AdjustmentsIcon />
    else if (iconString == "SunIcon")
        return <SunIcon />
    else
        return <SunIcon />
}

export function Benefit(p) {
    try {
        var imageurl = ""
        imageurl = getStrapiURL(p.Image.data[0].attributes.url)
      } catch (error) {
        imageurl = getStrapiURL(p.Image.data.attributes.url)
      }
    var benefit = {
        title: p.Title,
        desc: p.Text,
        image: imageurl,
        bullets:[]
    };
    for (let i = 0; i < p.CardItem.length; i++) {
        const e = p.CardItem[i];
        benefit.bullets.push(
            {
                title: e.Title,
                desc: e.Text,
                icon: GetIcon(e.Icon.trim()),
            }            
        )
    }
    return benefit;
}

