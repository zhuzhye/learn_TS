type Ikun = "sing" | "dance" | "rap";

type MExclude<T, U> = T extends U ? never : T;

type Ikun1 = Exclude<Ikun, "sing">;
type Ikun2 = MExclude<Ikun, "sing">;
export {};
