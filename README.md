# 다기능 툴 모음 웹 어플리케이션

> 브라우저에서 쓸만한 기능을 갖춘 웹페이지를 배포하는 목적으로 개발 중인 프로젝트입니다.

<br />

## 1. 제작 기간 & 참여 인원 👨‍🔧🕑

- 2021년 7월 2일 ~ 개발 진행중
- 개인 프로젝트

<br />

## 2. 사용 기술 📱

#### `Front-end`

- **Vue.js 2.6.11**

#### `Back-end API`

- 카카오 API(책검색) https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book
- RandomCat https://github.com/dl0312/open-apis-korea#%EB%8F%99%EB%AC%BC
- RandomDog https://github.com/dl0312/open-apis-korea#%EB%8F%99%EB%AC%BC
- RandomFox https://github.com/dl0312/open-apis-korea#%EB%8F%99%EB%AC%BC

<br />

## 3. 완성된 웹 페이지 소개

<br />

### `📘추천하는 자바스크립트 서적 목록📚`

<img src="https://github.com/DragooCho/TIL/blob/main/image/image_024.png?raw=true" width="600px"  title="px(픽셀) 크기 설정" alt="베스트셀러 목록"></img>

- 카카오 API에서 응답 받은 데이터를 활용해 특정 키워드의 책을 소개하는 웹페이지입니다.

<br />

<img src="https://github.com/DragooCho/TIL/blob/main/image/image_026.png?raw=true" width="600px"  title="px(픽셀) 크기 설정" alt="베스트셀러 목록"></img>

- 웹반응형을 적용해 페이지 가로 폭이 700px이하로 줄어들면 모바일의 가독성에 맞게 변화됩니다.

<br /><br />

### `🐶무작위동물사진생성기😸`

<img src="https://github.com/DragooCho/TIL/blob/main/image/image_027.png?raw=true" width="600px"  title="px(픽셀) 크기 설정" alt="무작위동물사진"></img>

- 보고싶은 동물의 버튼을 누르면 API에게 요청하고 이미지웹주소를 응답받아  
  이미지겍체에 대입되어 동물이미지가 브라우저에 출력되는 웹페이지입니다.

- 보통은 img 테그노드가 차례대로 생성되지만 video테그노드가  
  항상 코드 아랫줄에 우선적으로 생성되는 현상이 있어서 개선할 예정입니다.

<br />

## 4. 앞으로 추가할 서비스 📐

- 현재 완성된 서비스는 책소개 페이지, 무작위동물사진생성기 입니다.  
  이미지텍스트에디터는 업데이트 예정입니다.
- 그 외에도 쓸 만한 페이지를 기획 중 입니다.

<br />

## 프로젝트 설정

```
npm install
```

<br />

## 환경변수 설정

- 최상단 루트에 `.env.local`파일을 생성하고 다음과 같이 작성합니다.

```
VUE_APP_KAKAOAK_KEY=<카카오 REST API 키>

```

- 카카오 REST API 키는 [Kakao Developers 홈페이지](https://developers.kakao.com/)에서 "애플리케이션 추가하기"를 설정해 얻을 수 있습니다.  
  여기서 `<카카오 REST API 키>`는 예로 들자면 "qwer12345" 이런식으로 입력하는 부분입니다.

<br />

### 개발을 위한 컴파일 및 핫 재로드

```
npm run serve
```

<br />

### 운영 환경에 맞게 컴파일 및 축소

```
npm run build
```

<br />

### ‎파일을 린트 및 수정

```
npm run lint
```

<br />

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
