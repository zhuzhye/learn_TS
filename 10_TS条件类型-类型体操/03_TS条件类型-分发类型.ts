type toArray<T> = T extends any ? T[] : never;

type numberArray = toArray<number>;

type numberStrArray = toArray<number | string>;
