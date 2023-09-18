type Ikun = "sing" | "dance" | "rap";

type MExtract<T, U> = T extends U ? T : never;

type Ikun1 = Extract<Ikun, "sing">;
type Ikun2 = MExtract<Ikun, "sing">;
export {};
