export interface Post {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: nameUrl,
    location: nameUrl,
    image: string,
    episode: string[],
    url: string,
    created: string
  
}

export interface nameUrl {
    name: string,
    url: string
}


export interface info {
    count: number,
    pages: number,
    next: string,
    prev: string
}