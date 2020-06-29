export interface post {
    id?: number,
    title: string,
    body: string,
    userId: number
}

export interface comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface photo {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface album {
    userId: number,
    id: number,
    title: string
}

export interface todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface geo {
    lat: number,
    long: number
}

export interface company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geo
}

export interface user {
    id: number,
    name: string,
    username: string,
    email: string,
    address: address,
    phone: string,
    website: string,
    company: company
}