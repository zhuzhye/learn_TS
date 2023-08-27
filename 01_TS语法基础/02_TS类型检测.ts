function getLength(args: { length: number } | string | any[]) {
  return args.length;
}
getLength("aaa");
getLength(["abc", "caba", "nba", 123]);

const info = {
  length: 100,
};
getLength(info);
export {};
