type Ikun = "sing" | "dance" | "rap" | null | undefined;

type MNonNullable<T> = T extends null | undefined ? never : T;

type Ikun1 = NonNullable<Ikun>;
type Ikun2 = MNonNullable<Ikun>;
export {};
