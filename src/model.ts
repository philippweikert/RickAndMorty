export interface Character {
    id: number;
    name: string;
    status: string; 
    image: string;
    species?: string;
    location?: {name: string;}
    origin?: {name: string};
}

export interface Info {
    next?: string;
    prev?: string;
}

export interface ResponseBody {
    info: Info;
    results: Array<Character>;
}
