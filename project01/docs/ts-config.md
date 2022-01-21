# Typescript Project Setup

> 타입스크립트 프로젝트 설정하기

## 타입스크립트 프로젝트 환경 설정

### tsconfig.json 생성

기본적으로 타입스크립트를 사용하기 위해선 컴파일을 진행한 후 나온 자바스크립트 파일을 사용해야한다. 또한 타입스크립트를 어느 정도 범위까지 컴퍼일할 것인지, 어떻게 컴파일할 것인지, 컴파일된 파일의 위치 등등에 대해서 설정을 해줘야한다. 이러한 타입스크립트 프로젝트 전반에 대한 환경 설정을 `tsconfig.json` 안에 설정하게 된다.

`tsc` 명령어를 실행하면, 컴파일러는 현재 디렉토리에서부터 상위 디렉토리까지 `tsconfig.json`를 검색한 후 설정 파일의 옵션에 맞춰서 컴파일이 진행된다. `tsc index.ts`처럼 특정 파일을 검색한 후 해당 파일을 tsconfig.json의 설정 여부와 관계없이 <u>기본 설정값</u>으로 컴파일을 진행한다.

- 방법1

  직접 tsconfig.json 파일을 만들어서 각각의 설정 옵션을 지정해줄 수 있다.

- 방법2

  `tsc --init` 이라는 명령어를 통해서 해당 디렉토리를 타입스크립트 프로젝트로 설정하고 tsconfig.json 파일이 자동 생성된다. 이 때 tsconfig.json 파일은 템플릿화되어 있기 때문에 모든 필요한 옵션이 주석처리된 상태로 보여진다. 설정에 필요한 부분만 주석을 해제하면서 추가할 수 있다.

### tsconfig.json 중요 옵션 설명

> 아래 옵션은 `tsc --init`을 통해서 만들어진 `tsconfig.json` 파일의 내용 중에서 필요한 부분은 좀 더 이해하기 쉽게 한국말로 적어놓은 것이다. 영어로 적힌 옵션은 원본 그대로의 내용이다.

```json
{
  // ✅ 어떤 파일을 선택할지 혹은 제외할지에 대한 옵션

  "files": ["app.ts", "main.ts", "types.ts"], // include 시킬 개별 파일을 지정할 수 있다. 일반적으로 아래 include 옵션을 사용하기 때문에 잘 사용하지 않을 것 같다.(개인적인 생각)
  "include": ["src/**.ts"], // 컴파일할 때 포함할 파일의 경로를 적는다. default값은  [**/*] 이다.
  "exclude": ["node_modules", "**/*.spec.ts"],
  // include에 속한 파일 중에서 제외할 파일을 적는다. 단, files에서 지정한 파일은 제외되지 않는다.
  // → default: ["node_modules", "bower_components", "jspm_packages"]

  // ✅  선택된 파일을 어떻게 컴파일 할지에 대한 옵션
  // → 매우 다양한 옵션들이 존재하기 때문에 자세한 내용은 https://www.typescriptlang.org/tsconfig/ 공식문서를 참고하는걸 추천한다. 여기서는 중요하거나 대표적인 옵션에 대해서만 정리한다.
  "compilerOptions": {
    "target": "es5",
    // 최종 결과물로서 컴파일할 자바스크립트 문법 버전을 설정한다.
    // → 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT' ...

    "module": "commonjs",
    // 모듈을 어떤 방식으로 나타낼지에 대해 설정한다.(자바스크립트 파일간 모듈을 임포트할 때, 어떤 문법을 쓸지 정하는 설정)
    // → 'none', 'commonjs (default)', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'

    // "lib": [],
    // 배열형태로 사용할 라이브러리를 지정한다. 만약 지정하지 않는다면, 위 target에서 지정한 자바스크립트(ECMAScript)의 버전에 따라 기본값이 정의한다.
    // 해당 옵션에 라이브러리를 지정했다고 해서 해당 라이브러리가 추가되는 것은 아니고, 지정한 라이브러리를 사용하겠다는 의미로서 컴파일시 해당 라이브러리를 찾게 되는 것.
    // → target : ES5 - dom, es5, scripthost / ES6 - dom, dom.iterable, es6, scripthost

    "allowJs": true,
    // 자바스크립트 파일의 컴파일 허용 여부 설정

    "checkJs": true,
    // 자바스크립트 파일의 오류 검사 여부 설정, 앞서 배운 @ts-check의 역할과 유사

    "sourceMap": false,
    // .map 파일의 생성 여부 설정

    // "outFile": "./",
    // 모든 전역 (비모듈) 파일이 지정된 단일 출력 파일로서 출력된다.

    "outDir": "./dist",
    // 컴파일된 js파일이 지정한 디렉터리로 배출된다. 만약에 지정되지 않는다면, ts파일이 있는 동일한 디렉터리에 js파일이 생성된다.

    "rootDir": "./",
    // 가장 상위의 디렉토리를 설정합니다. 일반적으로 설정이 없으면, tsconfig.json파일이 존재하는 곳을 루트 디렉토리로 인식한다.
    // → 상위 디렉토리로 설정한 위치부터 그대로 컴파일되어서 디렉토리 구조를 유지한채 파일만 컴파일되어서 outDir에 위치하게 된다.

    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    // → 아래 8가지 설정은 타입을 얼마나 엄격하게 설정하는지에 대한 속성이다. 일반적으로 strict 설정이 true로 권장된다.

    "strict": true, // 모든 타입을 엄격하게 검사한다.
    "noImplicitAny": true,
    // 암묵적 any에 대한 설정이다. true인 경우, any 타입을 명시적으로 설정해줘야한다.

    "strictNullChecks": true,
    // 엄격한 null check, undefined 혹은 null이 될 수 있는 부분에 있어서 에러 메세지를 보여준다.

    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Module Resolution Options */
    // → 모듈의 path를 resolve하는 방법에 대한 설정이다. 즉, 경로 설정에 대한 부분이다.

    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,
    // CommonJS방식으로 내보낸 모듈을 ES모듈 방식으로 불러들여서 사용할 수 있게 할지에 대한 여부 설정

    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,
    // 사용하는 라이브러리의 타입 검사를 넘어갈 수 있게 하는 옵션으로서 true로 설정함으로서 컴파일하는 시간을 줄일 수 있다.

    "forceConsistentCasingInFileNames": true
    // 같은 파일에 대한 일관되지 않은 참조를 허용하지 않을지 여부를 설정
  }
}
```

## 타입스크립트 실행

1. 컴파일

- `tsc` 명령어를 통해서 타입스크립트 파일을 자바스크립트 파일로 컴파일한다. (혹은 `tsc 파일명.ts`로 설정 가능)
- tsconfig.json에서 설정한 `outDir` 공간에 타입스크립트와 같은 파일명의 자바스크립트 파일이 생성된다.

2. 실행

- 노드 환경에서는 컴파일된 자바스크립트를 `node 파일.js` 명령어를 통해서 실행시킨다.

- 브라우저 환경에서는 html파일에서 컴파일된 자바스크립트 파일을 불러와서 사용한다. 노드 환경에서는 컴파일된 자바스크립트 파일을 `node` 명령어를 통해서 실행시킨다.

### 타입스크립트 빌드 환경 구성 설정 및 자동화

> There are sample projects in config-ts directory.

앞서 본 것처럼 타입스크립트는 컴파일 단계와 컴파일된 자바스크립트 파일의 실행 단계, 2단계를 통해서 실행이 된다. 작은 프로젝트에서는 크게 상관이 없을수도 있지만 이 과정을 매번 반복한다면 굉장히 비효율적인 과정을 경험하게 될 것이다. 그래서 이 부분을 자동화할 수 있는 설정을 하는 것이 개발 생산성 향상을 위해서 좋다.

#### 노드 환경에서의 설정

- 방법1

  > 조합 : ts-node 라이브러리 + nodemone 라이브러리

  ts-node는 타입스크립트를 해석하지 못하는 노드가 타입스크립트를 해석해서 실행시킬 수 있도록 도와주는 라이브러리이다. 실제로 컴파일하지는 않고 메모리상에서 이를 컴파일하여 자바스크립트 파일을 실행하는 것으로 알고 있다.

  nodemon 라이브러리는 코드를 수정할 때마다 이를 재시작하지 않고 자동으로 서버를 재시작하여 코드를 구동할 수 있게 해주는 라이브러리이다.

  ```json
  "scripts": {
    "build": "tsc",
    "start:dev": "nodemon --exec 'ts-node' ./src/app.ts",
    "start": "node ./dist/app.js"
  }
  ```

- 방법2

  > 조합 : tsc -w (--watch) 모드 + nodemon / concurrently 라이브러리

  tsc -w 모드는 입력파일을 감시하여 파일이 변경하면, 자동으로 컴파일이 진행될 수 있도록 해주는 명령어 옵션이다.

  concurrently 라이브러리는 보통 `서버와 클라이언트를 동시에 실행`이라는 키워드로 찾아보면 마주하게되는 라이브러리이다. 이 라이브러라는 서버와 클라이언트에서만 적용되는 것은 아니다. 정확히 npm에서 두가지 이상의 명령어를 동시에 실행시키고자 할 때, 이것을 사용할 수 있다.

  ```json
  "scripts": {
    "start:run": "node ./dist/app.js",
    "build:watch": "tsc -w",
    "start": "concurrently 'npm run build:watch' 'npm run start:run'"
  }
  ```

#### 브라우저 환경에서의 설정

브라우저 환경에서는 브라우저를 실행하는 다양한 서버를 이용하면 생각보다 쉽게 환경설정을 할 수 있다. 예를 들어서 `live-server(vs-code extension)` 혹은 `lite-server` 라이브러리를 사용하여 `tsc -w`와 연결하면 소스코드가 변경되어 컴파일이 일어날 때마다 서버가 재시작되어 동기화시킬 수 있다.

```json
  "scripts": {
    "build:watch": "tsc -w",
    "start:server": "lite-server",
    "start": "concurrently 'npm run build:watch' 'npm run start:server'"
  }
```

> 위 코드는 lite-server를 이용해서 설정한 것이다. lite-server를 npm을 통해서 설치하여 사용하면 된다. 이와 비슷하게 live-server는 확장 프로그램을 설치하고 HTML에 컴파일된 js파일을 연결하고 script의 명령어는 `build:watch`만 사용하면된다.

위 방법 외에도 프런트엔드 개발환경을 구성하는 번들러(webpack or vite ...)을 이용하는 방법도 있다. webpack과 vite를 이용해서 이를 개발환경을 구성해보자.

- 방법1

  > `webpack`을 이용한 실행환경 구성

  > > ~~<b>📌 좀 더 생각해보기</b>(22.01.17) 실습 중에 오류가 뜨면서 작동함...😭 아마 추가적인 로더 설정이 필요한데 아직 그 부분을 해결하지 못함.~~ solved!!

  타입스크립트를 <u>무엇으로 번들링하는가</u>에 따라서 추가해야할 패키지가 달라진다. 각각 장단점이 존재한다.

  - `tsc + babel-loader + @babel/preset-typescript + webpack-server`

    위와 같은 조합은 tsc는 타입체킹용, babel은 타입스크립트의 트랜스파일용으로 각각 사용할 수 있다. 특히 @babel/preset-typescript를 통해서 babel이 타입스크립트를 이해할 수 있게 되었다.

  - `ts-loader + webpack-server`

    ts-loader는 webpack에서 타입스크립트를 인지할 수 있도록 해주는 로더이다. ts-loader는 내부적으로 tsc를 이용하기 때문에 tsconfig.json 설정에 따라서 컴파일을 한다. 그렇기 때문에 강력한 타입 체크가 이루어질 수 있다. 하지만 빌드 시간이 오래걸릴 수 있다는 단점이 존재한다.

  ✅ 이 외에도 좀 더 활용도 높은 기술들이 나오고 있고 무엇을 사용하든 현재 어떤 불편함을 갖고 있는지, 어떤 부분에 좀 더 초점을 맞출지에 대해서 조합/기술을 선택하면 될 것이라고 생각한다.

- 방법2

  > `vite`를 이용한 실행환경 구성

  <details>
  <summary>📌 여기서 잠깐, <b>vite</b> 가 뭐지??</summary>
  vite는 프런트엔드 빌드 시스템을 구축하는 도구이다. 브라우저에서 지원하는 ES Module 및 네이티브 언어로 작성된 자바스크립트 도구 등을 활용해서 좀 더 빠른 번들링과 다양한 기능을 제공하여 프런트엔드 개발 환경의 생산성을 향상시킬 수 있게 만들어진 도구로 점차적으로 인기를 얻어가고 있는 추세이다.([2021년 라이징 스타에서 2위 차지](https://risingstars.js.org/2021/ko))

  개인적으로 프로젝트를 vite를 이용하여 만들어본 결과, 웹팩과는 비교할 수 없을 정도의 단순하고 명료한 설정과정이 가장 마음에 들었다. 템플릿에 맞춰서 명령어만 적으면 빠르게 해당 포멧의 기본 프로젝트 셋팅이 끝나서 별다른 러닝커브없이 시작할 수 있었다. 하지만, 그 내부과정이 궁금하다면, 당연히 공식문서를 찾아보고 좀 더 탐구해볼 가치가 있다고 생각한다. 더 자세한 내용은 [공식문서](https://vitejs-kr.github.io/)로 ㄱㄱ!
  </details>

  ```shell
    # project 시작
    # npm init vite@latest [프로젝트 이름] --template [template type]
    npm init vite@latest myapp --template vanilla-ts

    # 프로젝트로 이동 후 의존성 라이브러리 설치
    npm install

    # 프로젝트 실행(서버실행)
    npm run dev
  ```

  위의 명령어 대로 실행을 하면 vite기반의 (바닐라) 타입스크립트 개발환경이 만들어진다. 웹팩과는 다르게 별로 신경써야 할 부분이 없다. 단지, 어떤 템플릿을 사용할 것인지에 대해서만 선택하면 된다. 템플릿 타입에는 `vanilla`, `vanilla-ts`, `vue`, `vue-ts`, `react`, `react-ts`, `preact`, `preact-ts`, `lit-element`, `lit-element-ts`, `svelte`, `svelte-ts` 를 제공한다.

## Ref

- [공식 tsconfig 번역](https://www.typescriptlang.org/ko/tsconfig)

- [{ tsconfig.json } 제대로 알고 사용하기](https://velog.io/@sooran/tsconfig.json-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

- [tsconfig.json 주요 설정](https://kay0426.tistory.com/69#recentComments)

- [제품 운영 잘하기](https://techblog.woowahan.com/6465/)
