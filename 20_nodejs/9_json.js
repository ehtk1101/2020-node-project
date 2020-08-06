// JSON
const singer = {
  name: "BTS",
  member: ["정국", "뷔", "RM"],
  songs: [
    {
      title: "ON",
      year: 2020,
    },
    {
      title: "IDOL",
      year: 2019,
    },
  ],
};

// json object -> string
const str = JSON.stringify(singer);
console.log(str);

// string -> json object
const obj = JSON.parse(str);
console.log(obj);

// RM 출력
console.log(obj.member[2]);
// IDOL 출력
console.log(obj.songs[1].title);
