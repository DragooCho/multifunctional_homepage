import axios from "axios";

const config = {
  baseUrl: "https://dapi.kakao.com/v3/",
  // noImageUrl:
  //   "https://raw.githubusercontent.com/DragooCho/TIL/main/image/test_thumbnail.png",
  bookSize: 10,
};

function fetchBookinfo() {
  return axios.get(`${config.baseUrl}search/book?target=title`, {
    params: { query: "베스트셀러", size: config.bookSize },
    headers: {
      Authorization: `KakaoAK ${process.env.VUE_APP_KAKAOAK_KEY}`,
    },
  });
}

export { fetchBookinfo, config };
