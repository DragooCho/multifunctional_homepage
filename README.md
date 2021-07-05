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

<br />

## 3. 앞으로 추가할 서비스 📐

- 목표로하는 서비스는 책소개 페이지, 이미지텍스트에디터, 무작위동물사진생성기 입니다.  
  이전에 순수 JS로 개발 했었던 것도 있고 이 기능들을 Vue.js에서도 동작하게 만드는걸 우선으로 하고 있습니다.

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

- 여기서 `<카카오 REST API 키>`는 예로 들자면 "qwer12345" 이런식으로 입력하는 부분입니다.

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
