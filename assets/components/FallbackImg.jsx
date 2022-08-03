import {useEffect, useState} from 'react';

export const FallbackImg = ({src, ...rest}) => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <img {...rest} src={imgSrc ? imgSrc : 'https://cdn.discordapp.com/embed/avatars/1.png'} onError={() => {setImgSrc('https://cdn.discordapp.com/embed/avatars/1.png')}}/>

        )
}