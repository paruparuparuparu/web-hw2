// ===== Part A =====

let sumA = 0;
let maxA = 0;
let countA = 0;
let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countBeforeA = 0;
let bigA = "";

for (let iA = 0; iA < titles.length; iA++) {
  sumA += ratings[iA];

  if (ratings[iA] > ratings[maxA]) {
    maxA = iA;
  }

  if (ratings[iA] >= 8) {
    countA++;
  }

  const decadeA = years[iA] - (years[iA] % 10);

  switch (decadeA) {
    case 2020:
      count2020A++;
      break;
    case 2010:
      count2010A++;
      break;
    case 2000:
      count2000A++;
      break;
    default:
      countBeforeA++;
      break;
  }

  if (audiences[iA] >= 1000000) {
    bigA += titles[iA] + " ";
  }
}

if (bigA === "") {
  bigA = "없음";
}

console.log("A1 평균 평점:", sumA / ratings.length);
console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);
console.log("A3 8점 이상:", countA + "편");

console.log(
  "A4 2020년대 " + count2020A + "편, " +
  "2010년대 " + count2010A + "편, " +
  "2000년대 " + count2000A + "편, " +
  "그 이전 " + countBeforeA + "편"
);

console.log("A5 관객 100만 이상:", bigA);

// ===== Part B =====

// average : 배열 ⇒ 평균 평점(숫자)
function average(list) {
  return averageBy(list, "rating");
}

// best : 배열 ⇒ 최고 평점 객체
function best(list) {
  let bestMovie = list[0];

  for (const movie of list) {
    if (movie.rating > bestMovie.rating) {
      bestMovie = movie;
    }
  }

  return bestMovie;
}

// filterByRating : 배열, 숫자 ⇒ 새 배열
function filterByRating(list, min) {
  return list.filter(movie => movie.rating >= min);
}

// sortBy : 배열, 키 이름, 참이면 내림차순 ⇒ 새 배열
function sortBy(list, key, desc) {
  const sign = desc ? -1 : 1;

  return [...list].sort((a, b) => {
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]) * sign;
    }

    return (a[key] - b[key]) * sign;
  });
}

// search : 배열, 문자열 ⇒ 새 배열
function search(list, keyword) {
  const searchWord = keyword.trim().toLowerCase();

  return list.filter(movie =>
    movie.title.toLowerCase().includes(searchWord)
  );
}

// formatNumber : 숫자나 숫자 문자열 ⇒ 쉼표로 구분한 문자열
function formatNumber(n) {
  return Number(n).toLocaleString("ko-KR");
}

// yearsSince : 날짜 문자열 ⇒ 올해까지 몇 년(숫자)
function yearsSince(dateStr) {
  return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

const bestMovie = best(movies);
const audienceMovie = sortBy(movies, "audience", true)[0];

document.getElementById("out").textContent =
  "전체 " + movies.length + "편, 평균 평점 " +
  average(movies).toFixed(1) + "점\n" +
  "최고 평점 " + bestMovie.title +
  " (" + bestMovie.rating + "점, 개봉한 지 " +
  yearsSince(bestMovie.date) + "년)\n" +
  "관객 1위 " + audienceMovie.title +
  " (누적 " + formatNumber(audienceMovie.audience) + "명)";

// ===== Part C =====

// getList : 응답 객체 ⇒ 영화 배열
function getList(data) {
  return data.results;
}

// averageBy : 배열, 키 이름 ⇒ 그 키 값의 평균(숫자)
function averageBy(list, key) {
  let sum = 0;

  for (const movie of list) {
    sum += movie[key];
  }

  return sum / list.length;
}

console.log(
  "C1 페이지:", TMDB.page,
  "전체 페이지:", TMDB.total_pages,
  "전체 결과:", TMDB.total_results,
  "이번 응답 영화 수:", getList(TMDB).length
);

console.log(
  "C2 상영작 평균 평점:",
  averageBy(getList(TMDB), "vote_average").toFixed(1)
);

console.table(
  sortBy(getList(TMDB), "vote_average", true).slice(0, 5),
  ["title", "release_date", "vote_average"]
);

console.log(
  "C4 검색 결과:",
  search(getList(TMDB), "하트").length
);