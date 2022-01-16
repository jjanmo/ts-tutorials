# Typescript Project Setup

> 타입스크립트 프로젝트 설정하기

## 타입스크립트 프로젝트 환경 설정

### tsconfig.json 생성

기본적으로 타입스크립트를 사용하기 위해선 컴파일을 진행한 후 나온 자바스크립트 파일을 사용해야한다. 또한 타입스크립트를 어느 정도 범위까지 컴퍼일할 것인지, 어떻게 컴파일할 것인지, 컴파일된 파일의 위치 등등에 대해서 설정을 해줘야한다. 이러한 타입스크립트 프로젝트 전반에 대한 환경 설정을 `tsconfig.json` 안에 설정하게 된다.

- 방법1

  직접 tsconfig.json 파일을 만들어서 각각의 설정 옵션을 지정해줄 수 있다.

- 방법2

  `tsc --init` 이라는 명령어를 통해서 해당 디렉토리를 타입스크립트 프로젝트로 설정하고 tsconfig.json 파일이 자동 생성된다. 이 때 tsconfig.json 파일은 템플릿화되어 있기 때문에 모든 필요한 옵션이 주석처리된 상태로 보여진다. 설정에 필요한 부분만 주석을 해제하면서 추가할 수 있다.

### tsconfig.json 중요 옵션 설명

```json
{
    // ✅ 어떤 파일을 선택할지 혹은 제외할지에 대한 옵션

  "files": ["app.ts", "main.ts", "types.ts"], // include 시킬 개별 파일을 지정할 수 있다. 일반적으로 아래 include 옵션을 사용하기 때문에 잘 사용하지 않을 것 같다.(개인적인 생각)
  "include": ["src/**.ts"], // 컴파일할 때 포함할 파일의 경로를 적는다. default값은  [**/*] 이다.
  "exclude": ["node_modules"] // include에 속한 파일 중에서 제외할 파일을 적는다. 단, files에서 지정한 파일은 제외되지 않는다.

  // ✅  선택된 파일을 어떻게 컴파일 할지에 대한 옵션
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./dist" /* Redirect output structure to the directory. */,
    "rootDir": "./" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,      /* Include 'undefined' in index signature results */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
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
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
}
```

## 타입스크립트 실행

1. 컴파일

- `tsc` 명령어를 통해서 타입스크립트 파일을 자바스크립트 파일로 컴파일한다. (혹은 `tsc 파일명.ts`로 설정 가능)
- tsconfig.json에서 설정한 `outDir` 공간에 타입스크립트와 같은 파일명의 자바스크립트 파일이 생성된다.

2. 실행

-

- 브라우저 환경에서는 html파일에서 컴파일된 자바스크립트 파일을 불러와서 사용한다. 노드 환경에서는 컴파일된 자바스크립트 파일을 `node` 명령어를 통해서 실행시킨다.

### 타입스크립트 실행 자동화

> 노드 환경에서의 설정

앞서 본 것처럼 타입스크립트는 컴파일 단계와 컴파일된 자바스크립트 파일의 실행 단계, 2단계를 통해서 실행이 된다. 작은 프로젝트에서는 크게 상관이 없을수도 있지만 이 과정을 매번 반복한다면 굉장히 비효율적인 과정을 경험하게 될 것이다. 그래서 이 부분을 자동화할 수 있는 설정을 하는 것이 개발 생산성 향상을 위해서 좋다.

> 브라우저 환경에서의 설정

스택 조합
