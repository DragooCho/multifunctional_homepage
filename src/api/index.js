import axios from "axios";

const config = {
  baseUrl: "https://dapi.kakao.com/v3/",
  animals: {
    catUrl: "https://aws.random.cat/meow",
    dogUrl: "https://random.dog/woof.json",
    foxUrl: "https://randomfox.ca/floof/",
  },
  bookIndexLength: 20,
};

function fetchBookinfo() {
  return axios.get(`${config.baseUrl}search/book?target=title`, {
    params: { query: "javascript", size: config.bookIndexLength },
    headers: {
      Authorization: `KakaoAK ${process.env.VUE_APP_KAKAOAK_KEY}`,
    },
  });
}

function fetchCatsInfo() {
  return axios.get(`${config.animals.catUrl}`);
}
function fetchDogsInfo() {
  return axios.get(`${config.animals.dogUrl}`);
}
function fetchFoxsInfo() {
  return axios.get(`${config.animals.foxUrl}`);
}

// export { fetchBookinfo, fetchCatsInfo, config };
export { fetchBookinfo, fetchCatsInfo, fetchDogsInfo, fetchFoxsInfo, config };
