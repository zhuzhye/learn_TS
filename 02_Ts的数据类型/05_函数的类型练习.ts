// 定义一个对象类型

type lyricsType = {
  time: number;
  words: string;
};
function parseLysic(lyic: string): lyricsType[] {
  let lyrics: lyricsType[] = [];
  lyrics.push({ time: 0, words: "123" });
  return lyrics;
}

parseLysic("123");
