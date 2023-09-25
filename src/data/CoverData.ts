type CoverDataType = {
    id: number,
    url: string
}

export const CoverData: CoverDataType[] = [
    {
        id: 1,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695229491/a7bjdzpmaogkbk8qijvm.png'
    },
    {
        id: 2,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695229641/wh7frwjrj1lju1r9vzlm.png'
    },
    {
        id: 3,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695229886/gvmp0fhasqvxkemnvj9y.png'
    },
    {
        id: 4,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695230073/xn6hyr20w9mendkgcysh.png'
    }, {
        id: 5,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695230236/hro2wb7cxlibx2xee0ji.png'
    }, {
        id: 6,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695230464/wixvi92ycbchtsx4zafx.png'
    }, {
        id: 7,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695230674/g6pued0auc8xbi3raazg.png'
    }, {
        id: 8,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695230814/dniedt04fjkx829qrrom.png'
    }, {
        id: 9,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695231250/s4i8sqiwtye4wvvw89g4.png'
    }, {
        id: 10,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695231469/uyb3eojvgrwzyxydci7u.png'
    },
    {
        id: 11,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695231590/q5pyyn1voub8nqatmiws.png'
    },
    {
        id: 11,
        url: 'http://res.cloudinary.com/dpsr1klam/image/upload/v1695231759/vzssxammhpcomh3f7rzz.png'
    }
]

export function getRandomCover(): CoverDataType {
    return CoverData[Math.floor(Math.random() * CoverData.length)]
}