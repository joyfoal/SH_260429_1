# PRODOO.AI Landing Page

Vanilla HTML/CSS/JS로 만든 단일 페이지 랜딩(싱글 페이지)입니다.

## What was implemented
1. Single-page layout
   - `index.html`에 섹션(히어로, 핵심 가치, 프로세스, 사례, Why, Trust, FAQ, 하단 CAT/문의, 푸터)을 모두 포함
2. Claude 테마 기반 디자인
   - `styles.css`의 디자인 토큰(`:root` 커스텀 프로퍼티)과 카드/버튼/여백 중심 레이아웃 적용
3. Dark mode (강제 전환)
   - OS 다크 모드(`prefers-color-scheme`) 초기값 + 상단 우측 토글로 Light/Dark 직접 전환
   - 선택값은 `localStorage`에 저장
4. Multi-language (KO/EN/JA)
   - 브라우저 언어 자동 감지 + 상단 우측 언어 버튼으로 수동 전환
   - 페이지 주요 텍스트/레이블/FAQ/문의 폼/푸터/메타(Title/Description/OG)를 `data-i18n` 키 기반으로 동기화
   - 선택값은 `localStorage`에 저장
5. Scroll reveal animation
   - `script.js`에서 `IntersectionObserver`로 `.reveal` 섹션을 가시화
6. FAQ 아코디언
   - `script.js`에서 FAQ 버튼 클릭 시 패널을 열고 닫음
7. CAT 고객 문의 폼 (메일 전송)
   - 하단 문의 폼 제출 시 `mailto:joyfoal@naver.com` 링크를 생성하여 사용자의 메일 클라이언트가 열리도록 처리
   - 폼 입력값(name/email/message)을 subject/body에 포함
   - 외부 백엔드 없이 동작(로컬/정적 호스팅에 적합)

## File overview
- `index.html`
  - 전체 구조, 폼 마크업, `data-i18n` 속성 정의, 언어/테마 버튼 UI 포함
- `styles.css`
  - 라이트/다크 디자인 토큰, 컴포넌트(버튼/카드/폼) 스타일, 다크 상태(`html[data-theme="dark"]`) 처리
- `script.js`
  - i18n 사전(KO/EN/JA), 언어/테마 UI 상태 반영, meta/OG 업데이트
  - reveal, FAQ 아코디언, 문의 폼(`mailto` 전송) 처리

## How to run
- 로컬에서 브라우저로 `index.html`을 열면 됩니다.

## Notes / limitations
- 문의 전송은 `mailto:` 방식이라서 실제 서버 전송/저장/재시도 로직은 포함되어 있지 않습니다.
- 폼에서 이메일 형식 검증은 `input[type="email"]`의 브라우저 기본 검증을 사용합니다.

## Customization points
- 문의 수신 이메일: `script.js`의 `recipientEmail` 값을 수정
- 메일 subject/body에 들어가는 고정 문구: i18n의 `mail.subjectPrefix` / `mail.body`를 수정
- 언어에 따른 텍스트: `script.js`의 `i18n` 사전과 `index.html`의 `data-i18n` 키를 함께 조정

