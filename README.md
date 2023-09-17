# 로스트아크 정보제공 플랫폼 웹 프론트엔드 repository

---

## 패키지

### node
16.15.0 보다 높은 버전을 설치해주세요.

### eslint

### prettier

### husky

- git hook에 따라 원하는 동작을 수행하는데 도움을 주는 패키지입니다.
- git add, commit, push 등등이 시행되기 전에 원하는 스크립트를 실행 할 수 있도록 도와줍니다.

```bash
# git commit
yarn lint
```

```bash
# git push
yarn lint
```

### lint-staged

- staging 된 파일에 대해서만 lint 검사를 할 수 있도록 도와주는 패키지입니다.
- husky의 pre-commit/pre-push 단계에서 스크립트를 실행하여 검사합니다.

---
