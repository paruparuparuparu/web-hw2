// data.js : 영화 10편 데이터 / 오시우(2651041)

// Part A : 내 인생 영화 5편, 박스오피스 1~5위
const titles = [
  "타짜",
  "보헤미안 랩소디",
  "악마는 프라다를 입는다 2",
  "오디세이",
  "극장판 치이카와: 인어 섬의 비밀",
  "극장판 치이카와: 인어 섬의 비밀",
  "암살자(들)",
  "실낙원",
  "타짜: 벨제붑의 노래",
  "클레이페이스"
];

const ratings = [
  6.9, 7.9, 7.0, 8.0, 7.4,
  7.4, 7.2, 8.0, 7.0, 7.6
];

const years = [
  2006, 2018, 2026, 2026, 2026,
  2026, 2026, 2026, 2026, 2026
];

const audiences = [
  0, 0, 0, 0, 0,
  2268255, 3382043, 112191, 2006478, 84196
];

// Part B : 영화 객체 10건(Part A와 같은 순서)
// 내 인생 영화 5편의 date는 한국 개봉일을 사용했습니다.
const movies = [
  {
    title: "타짜",
    year: 2006,
    date: "2006-09-28",
    rating: 6.9,
    audience: 0,
    poster: "/o1a5FULQTObsNbcgjapJtunpFzV.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "보헤미안 랩소디",
    year: 2018,
    date: "2018-10-31",
    rating: 7.9,
    audience: 0,
    poster: "/xrlVhwi6OKMyQuDebpgaqU2LGju.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "악마는 프라다를 입는다 2",
    year: 2026,
    date: "2026-04-29",
    rating: 7.0,
    audience: 0,
    poster: "/28A1VUDML1RzENYNtIU1WkBLT9V.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "오디세이",
    year: 2026,
    date: "2026-08-05",
    rating: 8.0,
    audience: 0,
    poster: "/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    year: 2026,
    date: "2026-09-30",
    rating: 7.4,
    audience: 0,
    poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    year: 2026,
    date: "2026-09-30",
    rating: 7.4,
    audience: 2268255,
    poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
    type: "boxoffice",
    rank: 1
  },
  {
    title: "암살자(들)",
    year: 2026,
    date: "2026-09-23",
    rating: 7.2,
    audience: 3382043,
    poster: "/vxLkqJHsFmrnOg78KoTvwxXDTKo.jpg",
    type: "boxoffice",
    rank: 2
  },
  {
    title: "실낙원",
    year: 2026,
    date: "2026-10-21",
    rating: 8.0,
    audience: 112191,
    poster: "/6DLBaO4pKBuEXeoHZCCpEVAqyKz.jpg",
    type: "boxoffice",
    rank: 3
  },
  {
    title: "타짜: 벨제붑의 노래",
    year: 2026,
    date: "2026-09-23",
    rating: 7.0,
    audience: 2006478,
    poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg",
    type: "boxoffice",
    rank: 4
  },
  {
    title: "클레이페이스",
    year: 2026,
    date: "2026-10-21",
    rating: 7.6,
    audience: 84196,
    poster: "/9l1NuFjel2j89hiuiJbsxfblqjy.jpg",
    type: "boxoffice",
    rank: 5
  }
];