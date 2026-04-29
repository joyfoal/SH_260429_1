(function () {
  const i18n = {
    ko: {
      meta: {
        title: "PRODOO.AI | AI 에이전트 기반 현대적 앱 빌드",
        description:
          "PRODOO.AI는 바이브코딩 입문자를 위해 AI 에이전트를 활용한 현대적인 애플리케이션 빌드를 제공합니다. 기획부터 배포까지 빠르게 함께합니다.",
        ogTitle: "PRODOO.AI | AI 에이전트 기반 현대적 앱 빌드",
        ogDescription:
          "입문자도 이해할 수 있는 방식으로 AI 에이전트 기반 앱 개발을 지원합니다."
      },
      a11y: {
        skip: "본문 바로가기"
      },
      header: {
        brandAria: "PRODOO.AI 홈",
        ctaConsult: "무료 상담"
      },
      nav: {
        value: "가치",
        process: "프로세스",
        cases: "사례",
        faq: "FAQ"
      },
      hero: {
        eyebrow: "AI 에이전트 기반 에이전시",
        h1: "AI 에이전트와 함께, 더 빠르게 앱을 만듭니다.",
        lead:
          "PRODOO.AI는 입문자도 이해할 수 있는 방식으로 기획부터 배포까지 함께합니다. 핵심 판단은 사람이, 반복 구현은 에이전트가 맡아 더 짧은 주기로 제품을 완성합니다.",
        ctaPrimary: "무료 상담 신청",
        ctaSecondary: "작업 방식 보기",
        cardAria: "서비스 핵심 요약",
        cardTitle: "모던 빌드 스택",
        cardList1: "요구사항 정리와 명세 자동화",
        cardList2: "구현-테스트-문서화 동시 진행",
        cardList3: "짧은 피드백 루프와 빠른 배포"
      },
      value: {
        heading: "핵심 제안 가치",
        card1: {
          title: "더 빠른 출시",
          desc: "반복 작업은 에이전트가 자동화해 MVP 출시 시간을 단축합니다."
        },
        card2: {
          title: "더 선명한 요구사항",
          desc: "대화형 명세 방식으로 기획 의도를 코드에 일관되게 반영합니다."
        },
        card3: {
          title: "더 안정적인 품질",
          desc: "구현, 테스트, 문서화를 같은 흐름으로 관리해 유지보수를 쉽게 만듭니다."
        }
      },
      process: {
        heading: "PRODOO.AI가 일하는 방식",
        step1: {
          title: "문제 정의",
          desc:
            "비즈니스 목표와 사용자 문제를 정리해 실행 가능한 요구사항으로 전환합니다.",
          out: "산출물: 요구사항 문서, 우선순위 백로그"
        },
        step2: {
          title: "에이전트 설계/분업",
          desc:
            "AI 에이전트 역할을 정의하고 작업 단위를 나눠 병렬 생산성을 높입니다.",
          out: "산출물: 작업 플로우, 역할 정의서"
        },
        step3: {
          title: "구현/검증",
          desc:
            "코드 구현과 테스트를 빠르게 반복하며 피드백을 반영합니다.",
          out: "산출물: 기능 코드, 테스트 결과, 변경 로그"
        },
        step4: {
          title: "배포/개선",
          desc: "배포 이후 지표와 사용자 반응을 반영해 다음 개선 사이클로 연결합니다.",
          out: "산출물: 릴리즈 노트, 개선 로드맵"
        }
      },
      cases: {
        heading: "입문자 친화적 활용 사례",
        card1: {
          title: "사내 업무 자동화 웹앱",
          desc: "수기 업무를 자동화해 반복 시간을 줄이고 운영 정확도를 높입니다."
        },
        card2: {
          title: "AI 고객지원 페이지",
          desc: "챗봇 연동으로 기본 문의 응답을 자동화해 고객 응대 속도를 개선합니다."
        },
        card3: {
          title: "MVP 대시보드/관리도구",
          desc: "핵심 데이터 시각화와 관리 기능을 빠르게 구축해 검증 주기를 단축합니다."
        }
      },
      why: {
        heading: "왜 PRODOO.AI인가",
        b1: "AI 에이전트 기반 작업 체계로 개발 속도와 예측 가능성을 함께 높입니다.",
        b2: "짧은 프로토타이핑 루프를 통해 초기 방향성을 빠르게 검증합니다.",
        b3: "문서 중심 전달 방식으로 커뮤니케이션 비용과 인수인계 리스크를 줄입니다."
      },
      trust: {
        heading: "신뢰와 결과",
        q1: '"기획 아이디어를 2주 만에 동작하는 MVP로 확인할 수 있었습니다."',
        a1: "초기 창업팀, Product Lead",
        q2: '"개발 지식이 많지 않아도 진행 상황이 명확해서 의사결정이 빨랐어요."',
        a2: "서비스 운영팀 매니저",
        q3: '"문서와 코드가 함께 정리되어 유지보수 전환이 쉬웠습니다."',
        a3: "중소기업 디지털 전환 담당"
      },
      faq: {
        heading: "자주 묻는 질문",
        q1: "개발 지식이 없어도 가능한가요?",
        a1: "가능합니다. PRODOO.AI는 기획 언어를 개발 실행 언어로 번역하는 과정을 함께 진행합니다.",
        q2: "기간과 비용은 어떻게 정해지나요?",
        a2: "기능 범위와 우선순위를 기준으로 산정하며, 단계별로 투명하게 안내합니다.",
        q3: "유지보수도 지원하나요?",
        a3: "네. 운영 이슈 대응과 기능 개선을 포함한 유지보수 옵션을 제공합니다.",
        q4: "기존 서비스 개선도 가능한가요?",
        a4: "가능합니다. 현재 시스템 구조를 분석한 뒤, 우선순위가 높은 개선부터 진행합니다.",
        q5: "보안과 소스코드 소유권은 어떻게 되나요?",
        a5: "프로젝트 계약 기준에 따라 보안 정책을 준수하며, 산출물 소유권은 명확히 문서화합니다."
      },
      contact: {
        heading: "CAT 고객 문의",
        subtitle:
          "아래 양식을 작성하고 제출하면 이메일로 답변드립니다. 전송은 joyfoal@naver.com으로 메일을 열어 진행됩니다.",
        form: {
          nameLabel: "이름",
          namePlaceholder: "이름을 입력해 주세요",
          emailLabel: "이메일",
          emailPlaceholder: "이메일을 입력해 주세요 (선택)",
          emailHint: "선택 항목입니다.",
          messageLabel: "문의 내용",
          messagePlaceholder: "문의 내용을 입력해 주세요",
          submit: "문의 보내기",
          note: "보내기 전에 내용을 다시 한 번 확인해주세요."
        }
      },
      footer: {
        tagline: "| AI Agent-Powered App Build Agency",
        email: "joyfoal@naver.com",
        copyright: "© 2026 PRODOO.AI. All rights reserved."
      },
      mail: {
        subjectPrefix: "[PRODOO.AI 문의]",
        body: {
          nameLabel: "이름",
          emailLabel: "이메일",
          messageLabel: "문의 내용",
          sentFromSite: "PRODOO.AI 웹페이지에서 전송됨"
        }
      },
      theme: {
        light: "라이트",
        dark: "다크"
      }
    },
    en: {
      meta: {
        title: "PRODOO.AI | Modern AI Agent App Build",
        description:
          "PRODOO.AI helps beginner teams build modern applications with AI agents, from planning to deployment—faster and clearer.",
        ogTitle: "PRODOO.AI | Modern AI Agent App Build",
        ogDescription:
          "Beginner-friendly workflows to build with AI agents—from planning to deployment."
      },
      a11y: {
        skip: "Skip to main content"
      },
      header: {
        brandAria: "PRODOO.AI Home",
        ctaConsult: "Free Consultation"
      },
      nav: {
        value: "Value",
        process: "Process",
        cases: "Use Cases",
        faq: "FAQ"
      },
      hero: {
        eyebrow: "AI Agent-Powered Agency",
        h1: "Build faster with AI agents.",
        lead:
          "PRODOO.AI guides beginners from planning to deployment. People make the key decisions; agents handle repeat implementation—so you can ship in shorter cycles.",
        ctaPrimary: "Request a Free Consultation",
        ctaSecondary: "See How We Work",
        cardAria: "Service summary",
        cardTitle: "Modern Build Stack",
        cardList1: "Spec and requirement automation",
        cardList2: "Implement, test, and document together",
        cardList3: "Tight feedback loops and quick releases"
      },
      value: {
        heading: "Core Value",
        card1: {
          title: "Faster Shipping",
          desc: "Agents automate repetitive work to reduce MVP delivery time."
        },
        card2: {
          title: "Clearer Requirements",
          desc: "Interactive specs keep product intent consistent in the code."
        },
        card3: {
          title: "More Reliable Quality",
          desc: "We manage implementation, tests, and documentation together for easier maintenance."
        }
      },
      process: {
        heading: "How PRODOO.AI Works",
        step1: {
          title: "Define the Problem",
          desc: "We translate business goals and user needs into actionable requirements.",
          out: "Deliverables: requirements doc, priority backlog"
        },
        step2: {
          title: "Agent Planning & Roles",
          desc: "We define agent roles and split tasks to improve parallel throughput.",
          out: "Deliverables: workflow, role definitions"
        },
        step3: {
          title: "Implement & Validate",
          desc: "We iterate quickly with code and tests, then incorporate feedback.",
          out: "Deliverables: feature code, test results, change log"
        },
        step4: {
          title: "Deploy & Improve",
          desc: "After launch, we use signals and user feedback to guide the next improvement cycle.",
          out: "Deliverables: release notes, improvement roadmap"
        }
      },
      cases: {
        heading: "Beginner-friendly Use Cases",
        card1: {
          title: "Internal Automation Web App",
          desc: "Automate manual tasks to save time and improve operational accuracy."
        },
        card2: {
          title: "AI Customer Support Page",
          desc: "Integrate chat support to accelerate first responses."
        },
        card3: {
          title: "MVP Dashboard / Admin Tool",
          desc: "Build key dashboards and management features quickly to shorten validation cycles."
        }
      },
      why: {
        heading: "Why PRODOO.AI",
        b1: "An agent-based workflow improves both speed and predictability.",
        b2: "Short prototyping loops help validate direction early.",
        b3: "Document-first communication reduces handoff risk and coordination cost."
      },
      trust: {
        heading: "Trust & Results",
        q1: '"We confirmed an idea in just two weeks with a working MVP."',
        a1: "Early-stage startup team, Product Lead",
        q2: '"Progress was clear even for a non-technical team, so decisions moved fast."',
        a2: "Operations Manager",
        q3: '"Docs and code were organized together, making handoff to maintenance easy."',
        a3: "SMB Digital Transformation Lead"
      },
      faq: {
        heading: "Frequently Asked Questions",
        q1: "Can we proceed without much development knowledge?",
        a1: "Yes. PRODOO.AI translates business intent into build-ready specifications with you.",
        q2: "How are the timeline and cost determined?",
        a2: "We estimate based on scope and priorities, then walk you through each milestone transparently.",
        q3: "Do you support maintenance?",
        a3: "Yes. We offer maintenance options covering issue response and feature improvements.",
        q4: "Can you improve an existing product?",
        a4: "Yes. We analyze your current architecture and start with the highest-impact improvements.",
        q5: "How do security and source code ownership work?",
        a5: "Security follows our contract policies, and ownership of deliverables is clearly documented."
      },
      contact: {
        heading: "CAT Contact",
        subtitle:
          "Fill out the form below and we will reply by email. Submitting opens your email client to send a message to joyfoal@naver.com.",
        form: {
          nameLabel: "Name",
          namePlaceholder: "Your name",
          emailLabel: "Email",
          emailPlaceholder: "Your email (optional)",
          emailHint: "Optional field.",
          messageLabel: "Message",
          messagePlaceholder: "Write your inquiry",
          submit: "Send Inquiry",
          note: "Please review your message before sending."
        }
      },
      footer: {
        tagline: "| AI Agent-Powered App Build Agency",
        email: "joyfoal@naver.com",
        copyright: "© 2026 PRODOO.AI. All rights reserved."
      },
      mail: {
        subjectPrefix: "[PRODOO.AI Inquiry]",
        body: {
          nameLabel: "Name",
          emailLabel: "Email",
          messageLabel: "Message",
          sentFromSite: "Sent from the PRODOO.AI website"
        }
      },
      theme: {
        light: "Light",
        dark: "Dark"
      }
    },
    ja: {
      meta: {
        title: "PRODOO.AI | AIエージェントでモダンなアプリ開発",
        description:
          "PRODOO.AIは入門者向けに、AIエージェントで企画からデプロイまでモダンなアプリ開発をサポートします。",
        ogTitle: "PRODOO.AI | AIエージェントでモダンなアプリ開発",
        ogDescription:
          "入門者にも分かりやすいワークフローで、AIエージェントによる開発を支援します。"
      },
      a11y: {
        skip: "メインコンテンツへ移動"
      },
      header: {
        brandAria: "PRODOO.AI トップ",
        ctaConsult: "無料相談"
      },
      nav: {
        value: "価値",
        process: "進め方",
        cases: "活用例",
        faq: "FAQ"
      },
      hero: {
        eyebrow: "AIエージェント駆動の開発支援",
        h1: "AIエージェントと、もっと速くアプリを作る。",
        lead:
          "PRODOO.AIは入門者にもわかりやすい流れで、企画からデプロイまで一緒に進めます。重要な判断は人が、繰り返しの実装はエージェントが担当し、短いサイクルで届けます。",
        ctaPrimary: "無料相談を依頼する",
        ctaSecondary: "進め方を見る",
        cardAria: "サービス概要",
        cardTitle: "モダンなビルド基盤",
        cardList1: "要件整理と仕様の自動化",
        cardList2: "実装・テスト・ドキュメントを同時に",
        cardList3: "短いフィードバックループと素早いリリース"
      },
      value: {
        heading: "提供価値",
        card1: {
          title: "より速いリリース",
          desc: "エージェントが繰り返し作業を自動化し、MVPの公開までの時間を短縮します。"
        },
        card2: {
          title: "より明確な要件",
          desc: "対話型の仕様で、企画の意図をコードへ一貫して反映します。"
        },
        card3: {
          title: "より安定した品質",
          desc: "実装・テスト・ドキュメントを同じ流れで管理し、運用を楽にします。"
        }
      },
      process: {
        heading: "PRODOO.AIの進め方",
        step1: {
          title: "課題の整理",
          desc: "ビジネス目標とユーザーの課題を、実行可能な要件へ翻訳します。",
          out: "成果物: 要件定義ドキュメント、優先度バックログ"
        },
        step2: {
          title: "エージェント設計/役割分担",
          desc: "エージェントの役割を定義し、作業単位を分けて並列生産性を高めます。",
          out: "成果物: 作業フロー、役割定義書"
        },
        step3: {
          title: "実装/検証",
          desc: "コードとテストを素早く反復し、フィードバックを反映します。",
          out: "成果物: 機能コード、テスト結果、変更履歴"
        },
        step4: {
          title: "デプロイ/改善",
          desc: "リリース後は指標とユーザー反応をもとに、次の改善サイクルへ繋げます。",
          out: "成果物: リリースノート、改善ロードマップ"
        }
      },
      cases: {
        heading: "入門者向けの活用例",
        card1: {
          title: "社内業務の自動化Webアプリ",
          desc: "手作業を自動化して時間を節約し、運用の正確性を高めます。"
        },
        card2: {
          title: "AIカスタマーサポートページ",
          desc: "チャット連携で一次対応を自動化し、問い合わせ対応を速くします。"
        },
        card3: {
          title: "MVPダッシュボード/管理ツール",
          desc: "重要な可視化と管理機能を素早く作り、検証サイクルを短くします。"
        }
      },
      why: {
        heading: "なぜPRODOO.AIか",
        b1: "エージェント型の開発フローでスピードと予測可能性を両立します。",
        b2: "短いプロトタイピングで初期の方向性を素早く検証します。",
        b3: "ドキュメント中心の進め方で、連携コストと引き継ぎリスクを下げます。"
      },
      trust: {
        heading: "信頼と結果",
        q1: '"企画アイデアを2週間で動くMVPとして確認できました。"',
        a1: "初期スタートアップチーム、Product Lead",
        q2: '"開発の知識が多くなくても進捗が明確で、意思決定が速かったです。"',
        a2: "サービス運用担当マネージャー",
        q3: '"ドキュメントとコードが一緒に整理されていて、引き継ぎがとてもスムーズでした。"',
        a3: "中小企業のデジタル変革担当"
      },
      faq: {
        heading: "よくある質問",
        q1: "開発の知識がなくても進められますか？",
        a1: "はい。PRODOO.AIは企画の意図を、実装できる仕様へ翻訳するプロセスを一緒に進めます。",
        q2: "期間と費用はどのように決まりますか？",
        a2: "機能範囲と優先度をもとに見積もり、各フェーズで透明にご案内します。",
        q3: "メンテナンスも対応していますか？",
        a3: "はい。運用上の課題対応や機能改善を含む保守オプションをご提供します。",
        q4: "既存サービスの改善も可能ですか？",
        a4: "はい。現状の構造を分析し、インパクトの大きい改善から着手します。",
        q5: "セキュリティとソースコードの権利はどうなりますか？",
        a5: "セキュリティは契約ポリシーに従い、成果物の権利は明確に文書化します。"
      },
      contact: {
        heading: "CATお問い合わせ",
        subtitle:
          "下記フォームに入力して送信すると、メールでご返信します。送信はjoyfoal@naver.com宛にメールクライアントを開いて行われます。",
        form: {
          nameLabel: "お名前",
          namePlaceholder: "お名前を入力",
          emailLabel: "メール",
          emailPlaceholder: "メールアドレス（任意）",
          emailHint: "任意項目です。",
          messageLabel: "お問い合わせ内容",
          messagePlaceholder: "お問い合わせ内容をご入力ください",
          submit: "送信する",
          note: "送信前に内容をご確認ください。"
        }
      },
      footer: {
        tagline: "| AIエージェントによるアプリ開発支援",
        email: "joyfoal@naver.com",
        copyright: "© 2026 PRODOO.AI. All rights reserved."
      },
      mail: {
        subjectPrefix: "[PRODOO.AI お問い合わせ]",
        body: {
          nameLabel: "お名前",
          emailLabel: "メール",
          messageLabel: "お問い合わせ内容",
          sentFromSite: "PRODOO.AI公式サイトから送信"
        }
      },
      theme: {
        light: "ライト",
        dark: "ダーク"
      }
    }
  };

  const recipientEmail = "joyfoal@naver.com";

  function detectLang() {
    const raw = (navigator.language || navigator.userLanguage || "ko").toLowerCase();
    if (raw.startsWith("ja")) return "ja";
    if (raw.startsWith("en")) return "en";
    return "ko";
  }

  function getByPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function applyI18n(lang) {
    const t = i18n[lang] || i18n.ko;
    const ogLocaleMap = { ko: "ko_KR", en: "en_US", ja: "ja_JP" };

    // Document meta
    document.documentElement.lang = lang;
    if (t.meta) {
      document.title = t.meta.title || document.title;

      const description = document.querySelector('meta[name="description"]');
      if (description && t.meta.description) description.setAttribute("content", t.meta.description);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && t.meta.ogTitle) ogTitle.setAttribute("content", t.meta.ogTitle);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && t.meta.ogDescription) ogDesc.setAttribute("content", t.meta.ogDescription);

      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale && ogLocaleMap[lang]) ogLocale.setAttribute("content", ogLocaleMap[lang]);
    }

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getByPath(t, key);
      if (typeof val === "string") el.textContent = val;
    });

    // Placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getByPath(t, key);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    // aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = getByPath(t, key);
      if (typeof val === "string") el.setAttribute("aria-label", val);
    });
  }

  const allowedLangs = ["ko", "en", "ja"];

  let currentLang = detectLang();
  try {
    const saved = window.localStorage.getItem("prodoo.lang");
    if (saved && allowedLangs.includes(saved)) currentLang = saved;
  } catch (e) {
    // LocalStorage might be blocked; fall back to auto-detection.
  }

  function setActiveLangUI(lang) {
    const buttons = document.querySelectorAll(".lang-btn[data-lang]");
    buttons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      const isActive = btnLang === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  applyI18n(currentLang);
  setActiveLangUI(currentLang);

  const langButtons = document.querySelectorAll(".lang-btn[data-lang]");
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.getAttribute("data-lang");
      if (!allowedLangs.includes(nextLang)) return;

      currentLang = nextLang;
      setActiveLangUI(currentLang);

      try {
        window.localStorage.setItem("prodoo.lang", currentLang);
      } catch (e) {
        // Ignore if storage is unavailable
      }

      applyI18n(currentLang);
    });
  });

  const allowedThemes = ["light", "dark"];

  let currentTheme = "light";
  try {
    const savedTheme = window.localStorage.getItem("prodoo.theme");
    if (savedTheme && allowedThemes.includes(savedTheme)) currentTheme = savedTheme;
    else {
      currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  } catch (e) {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setActiveThemeUI(theme) {
    const themeButtons = document.querySelectorAll(".theme-btn[data-theme]");
    themeButtons.forEach((btn) => {
      const btnTheme = btn.getAttribute("data-theme");
      const isActive = btnTheme === theme;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setTheme(theme) {
    if (!allowedThemes.includes(theme)) return;
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", currentTheme);
    setActiveThemeUI(currentTheme);

    try {
      window.localStorage.setItem("prodoo.theme", currentTheme);
    } catch (e) {
      // Ignore if storage is unavailable
    }
  }

  setTheme(currentTheme);

  const themeButtons = document.querySelectorAll(".theme-btn[data-theme]");
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = button.getAttribute("data-theme");
      setTheme(nextTheme);
    });
  });

  const revealElements = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const panel = button.closest(".faq-item")?.querySelector(".faq-panel");
      if (!panel) return;

      button.setAttribute("aria-expanded", String(!isExpanded));
      panel.hidden = isExpanded;
    });
  });

  const ctaLinks = document.querySelectorAll("[data-cta]");
  ctaLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const label = link.getAttribute("data-cta") || "unknown";

      // Analytics tool is not connected yet; keep a stable hook.
      window.dispatchEvent(
        new CustomEvent("prodoo:cta-click", {
          detail: {
            label,
            timestamp: Date.now()
          }
        })
      );
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const t = i18n[currentLang] || i18n.ko;
      const subjectPrefix = t.mail?.subjectPrefix || "[PRODOO.AI Inquiry]";
      const subject = `${subjectPrefix}${name ? " " + name : ""}`;

      const bodyLines = [];
      bodyLines.push(`${t.mail?.body?.nameLabel || "Name"}: ${name || "-"}`);
      bodyLines.push(`${t.mail?.body?.emailLabel || "Email"}: ${email || "-"}`);
      bodyLines.push("");
      bodyLines.push(`${t.mail?.body?.messageLabel || "Message"}:\n${message}`);
      bodyLines.push("");
      bodyLines.push(t.mail?.body?.sentFromSite || "Sent from the PRODOO.AI website");

      const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.dispatchEvent(
        new CustomEvent("prodoo:contact-submit", {
          detail: { lang: currentLang, hasEmail: Boolean(email), hasName: Boolean(name) }
        })
      );
      window.location.href = mailto;
    });
  }
})();
