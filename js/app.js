(async function () {
  const STORAGE_KEY = "arze-lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED_LANGS = ["en", "ar"];
  const PHONE_NUMBER = "+966598256743";
  const WHATSAPP_BASE_URL = "https://wa.me/966598256743";

  const I18N = {
    en: {
      htmlLang: "en",
      dir: "ltr",
      pageTitle: "Price List",
      titleSubline: "Select a category to explore the collection.",
      landingInfoLineOne: "Home service available across Jeddah.",
      landingInfoPrefix: "Or visit us at",
      landingInfoLocation: "Novotel Jeddah Tahlia",
      landingInfoSuffix: ".",
      backText: "Back",
      backAria: "Back",
      socialFooterTitle: "Follow us",
      socialInstagram: "Instagram",
      socialTikTok: "TikTok",
      socialSnapchat: "Snapchat",
      aboutEyebrow: "About Arzé Spa",
      aboutTitle: "Premium home spa services in Jeddah",
      aboutParagraphOne:
        "Arzé Spa brings premium beauty and wellness rituals to your home across Jeddah, with appointment-based nail care, relaxing massage, brows and lashes designed for a calm, polished experience.",
      aboutParagraphTwo:
        "Our menu combines precise beauty work with spa rituals, from classic and Russian manicures to cedar-oil massage, brow lamination, lash lift and threading. Book by WhatsApp or phone, or visit us at Novotel Jeddah Tahlia.",
      aboutKeywordNails: "Nails in Jeddah",
      aboutKeywordMassage: "Home massage",
      aboutKeywordBrows: "Brows and lashes",
      stickyWhatsAppLabel: "WhatsApp",
      stickyCallLabel: "Call",
      stickyWhatsAppAria: "Book Arzé Spa on WhatsApp",
      stickyCallAria: "Call Arzé Spa",
      bookServiceLabel: "Book",
      bookServiceAriaPrefix: "Book",
      trustEyebrow: "What to expect",
      trustTitle: "A calmer way to book beauty and spa care",
      trustStepOneNumber: "01",
      trustStepOneTitle: "Choose your ritual",
      trustStepOneText: "Browse clear prices for nails, massage, brows and lashes before you contact us.",
      trustStepTwoNumber: "02",
      trustStepTwoTitle: "Book by WhatsApp or phone",
      trustStepTwoText: "Send the selected service and price in one tap, or call Arzé directly.",
      trustStepThreeNumber: "03",
      trustStepThreeTitle: "Relax at home or visit us",
      trustStepThreeText: "Enjoy appointment-based care at home across Jeddah or at Novotel Jeddah Tahlia.",
      faqEyebrow: "Questions",
      faqTitle: "Arzé Spa Jeddah FAQ",
      faqOneQuestion: "Does Arzé Spa offer home spa services in Jeddah?",
      faqOneAnswer:
        "Yes. Arzé Spa offers appointment-based home spa and beauty services across Jeddah, including nails, massage, brows and lashes.",
      faqTwoQuestion: "How can I book Arzé Spa?",
      faqTwoAnswer:
        "You can book Arzé Spa by WhatsApp or phone. Service booking links include the selected service and price to make booking easier.",
      faqThreeQuestion: "Can I visit Arzé Spa at Novotel Jeddah Tahlia?",
      faqThreeAnswer:
        "Yes. In addition to home service in Jeddah, guests can visit Arzé Spa at Novotel Jeddah Tahlia by appointment.",
      faqFourQuestion: "Which services are on the Arzé Spa price list?",
      faqFourAnswer:
        "The price list includes nail services, relaxing massage rituals, brows, lashes, threading, brow lamination and lash lift services.",
      faqFiveQuestion: "Is delivery free for Arzé Spa home service in Jeddah?",
      faqFiveAnswer:
        "Delivery is free within central Jeddah. For farther areas in Jeddah, an additional 35 SAR delivery charge applies.",
      viewDescription: "View details",
      hideDescription: "Hide details",
      minutes: "min",
      loadErrorTitle: "We couldn’t load the categories.",
      loadErrorBody:
        "Please open this page from your website URL (not directly from local files), then try again.",
      categories: {
        nails: {
          name: "Nails",
          tagline: "Clean structure. Refined finish.",
          intro:
            "A considered curation of nail rituals—precise technique, unhurried pacing, and an editorial finish.",
          services: {
            "Classic Manicure": {
              name: "Classic Manicure",
              description:
                "Precise shaping, careful cuticle work, and a polished finish with clean balance."
            },
            "Classic Pedicure": {
              name: "Classic Pedicure",
              description:
                "Essential foot care with exfoliation, shaping, and a smooth, polished result."
            },
            "Russian Manicure": {
              name: "Russian Manicure",
              description:
                "Advanced dry detailing around the cuticle for a seamless, ultra-clean contour."
            },
            "Russian Pedicure": {
              name: "Russian Pedicure",
              description:
                "High-precision cuticle and callus refinement for a sculpted, immaculate finish."
            },
            "Gel Color Finish": {
              name: "Gel Color Finish",
              description:
                "Long-wear gel color perfected with a luminous, mirror-gloss topcoat."
            },
            "Softgel Structure": {
              name: "Softgel Structure",
              description:
                "Lightweight softgel reinforcement that blends strength, flexibility, and natural elegance."
            },
            "Refill Maintenance": {
              name: "Refill Maintenance",
              description:
                "Growth correction and structural rebalancing to keep the set aligned and flawless."
            },
            "Gel Extension": {
              name: "Gel Extension",
              description:
                "Tailored sculpted extensions designed for proportion, durability, and refined length."
            },
            "Rubber Base Reinforcement": {
              name: "Rubber Base Reinforcement",
              description:
                "A flexible strengthening base that improves wear and polish retention."
            },
            "Signature Mani-Pedi Experience": {
              name: "Signature Mani-Pedi Experience",
              description:
                "A complete hand-and-foot ritual, finished with a subtle touch of cedar oil."
            },
            "Nail Art (Per Nail)": {
              name: "Nail Art (Per Nail)",
              description:
                "French, chrome, ombré, or cat-eye accents with polished editorial precision.",
              note: "Per nail"
            }
          }
        },
        massage: {
          name: "Massage",
          tagline: "Slow rhythm. Quiet reset.",
          intro:
            "Body rituals designed to soften tension and restore balance—minimal, controlled, and deeply calming.",
          services: {
            "Relaxing Massage": {
              name: "Relaxing Massage",
              description:
                "A slow full-body ritual in the Arzé signature style—steady pressure, fluid transitions, and deep calm."
            },
            "White Wood Therapy with Cedar Oil": {
              name: "White Wood Therapy with Cedar Oil",
              description:
                "Our sculpting ritual combining structured white wood work with warm Lebanese cedar oil to boost circulation and contour."
            },
            "Hot Stone Ritual": {
              name: "Hot Stone Ritual",
              description:
                "Heated stones glide in a deliberate rhythm to release deeper tension, finished with grounding cedar warmth."
            },
            "Thai Energy Flow": {
              name: "Thai Energy Flow",
              description:
                "Assisted stretching with rhythmic pressure to realign posture, improve flexibility, and revive energy flow."
            }
          }
        },
        "brows-lashes": {
          name: "Brows & Lashes",
          tagline: "Precision. Symmetry. Lift.",
          intro:
            "Subtle architectural refinement—clean lines, balanced shape, and effortless definition.",
          services: {
            "Brow Lamination": {
              name: "Brow Lamination",
              description:
                "Controlled brow restructuring to create symmetry, lift, and a polished editorial finish."
            },
            "Lash Lift": {
              name: "Lash Lift",
              description:
                "A precision lift that enhances your natural lashes with a soft, elegant curve."
            },
            "Eye Refinement Package": {
              name: "Eye Refinement Package",
              description:
                "A curated brow lamination and lash lift pairing designed to frame the face with harmony."
            },
            "Precision Threading": {
              name: "Precision Threading",
              description:
                "Clean, defined brow shaping with controlled detailing for a refined finish."
            }
          }
        }
      }
    },
    ar: {
      htmlLang: "ar",
      dir: "rtl",
      pageTitle: "الأسعار",
      titleSubline: "اختاري القسم المناسب واستعرضي الخدمات المتاحة.",
      landingInfoLineOne: "خدمة منزلية متوفرة في جميع أنحاء جدة.",
      landingInfoPrefix: "أو تفضلي بزيارتنا في",
      landingInfoLocation: "نوفوتيل جدة التحلية",
      landingInfoSuffix: ".",
      backText: "رجوع",
      backAria: "رجوع",
      socialFooterTitle: "تابعينا",
      socialInstagram: "إنستغرام",
      socialTikTok: "تيك توك",
      socialSnapchat: "سناب شات",
      aboutEyebrow: "عن أرزة سبا",
      aboutTitle: "خدمات سبا منزلية راقية في جدة",
      aboutParagraphOne:
        "تقدم أرزة سبا تجربة عناية وجمال راقية تصل إلى منزلك في جدة، مع حجوزات بالمواعيد لخدمات الأظافر والمساج والحواجب والرموش بأسلوب هادئ ونتيجة مصقولة.",
      aboutParagraphTwo:
        "تجمع قائمتنا بين الدقة في خدمات الجمال وطقوس الاسترخاء، من المانيكير الكلاسيكي والروسي إلى مساج زيت الأرز ولامينيشن الحواجب ورفع الرموش والتنظيف بالخيط. يمكنك الحجز عبر واتساب أو الهاتف، أو زيارتنا في نوفوتيل جدة التحلية.",
      aboutKeywordNails: "أظافر في جدة",
      aboutKeywordMassage: "مساج منزلي",
      aboutKeywordBrows: "حواجب ورموش",
      stickyWhatsAppLabel: "واتساب",
      stickyCallLabel: "اتصال",
      stickyWhatsAppAria: "احجزي أرزة سبا عبر واتساب",
      stickyCallAria: "اتصلي بأرزة سبا",
      bookServiceLabel: "احجزي",
      bookServiceAriaPrefix: "احجزي",
      trustEyebrow: "ماذا تتوقعين",
      trustTitle: "طريقة أهدأ لحجز العناية والجمال",
      trustStepOneNumber: "01",
      trustStepOneTitle: "اختاري الطقس المناسب",
      trustStepOneText: "استعرضي أسعار الأظافر والمساج والحواجب والرموش بوضوح قبل التواصل معنا.",
      trustStepTwoNumber: "02",
      trustStepTwoTitle: "احجزي عبر واتساب أو الهاتف",
      trustStepTwoText: "أرسلي اسم الخدمة والسعر بضغطة واحدة، أو اتصلي بأرزة مباشرة.",
      trustStepThreeNumber: "03",
      trustStepThreeTitle: "استرخي في المنزل أو زوري موقعنا",
      trustStepThreeText: "استمتعي بعناية بالمواعيد في منزلك داخل جدة أو في نوفوتيل جدة التحلية.",
      faqEyebrow: "أسئلة",
      faqTitle: "أسئلة عن أرزة سبا جدة",
      faqOneQuestion: "هل تقدم أرزة سبا خدمات سبا منزلية في جدة؟",
      faqOneAnswer:
        "نعم. تقدم أرزة سبا خدمات سبا وجمال منزلية بالمواعيد في جدة، وتشمل الأظافر والمساج والحواجب والرموش.",
      faqTwoQuestion: "كيف يمكنني حجز أرزة سبا؟",
      faqTwoAnswer:
        "يمكنك الحجز عبر واتساب أو الهاتف. روابط حجز الخدمات ترسل اسم الخدمة المختارة والسعر لتسهيل الحجز.",
      faqThreeQuestion: "هل يمكن زيارة أرزة سبا في نوفوتيل جدة التحلية؟",
      faqThreeAnswer:
        "نعم. إلى جانب الخدمة المنزلية في جدة، يمكن زيارة أرزة سبا في نوفوتيل جدة التحلية بالمواعيد.",
      faqFourQuestion: "ما الخدمات الموجودة في قائمة أسعار أرزة سبا؟",
      faqFourAnswer:
        "تشمل قائمة الأسعار خدمات الأظافر، طقوس المساج والاسترخاء، الحواجب، الرموش، التنظيف بالخيط، لامينيشن الحواجب ورفع الرموش.",
      faqFiveQuestion: "هل التوصيل مجاني لخدمة أرزة سبا المنزلية في جدة؟",
      faqFiveAnswer:
        "التوصيل مجاني داخل وسط جدة. للمناطق الأبعد داخل جدة تطبق رسوم توصيل إضافية بقيمة 35 ريال.",
      viewDescription: "عرض التفاصيل",
      hideDescription: "إخفاء التفاصيل",
      minutes: "دقيقة",
      loadErrorTitle: "تعذر تحميل الأقسام.",
      loadErrorBody: "يرجى فتح الصفحة من رابط الموقع ثم المحاولة مرة أخرى.",
      categories: {
        nails: {
          name: "الأظافر",
          tagline: "تفاصيل دقيقة. نتيجة راقية.",
          intro:
            "باقة عناية متقنة للأظافر تجمع بين الدقة والهدوء ولمسة نهائية أنيقة.",
          services: {
            "Classic Manicure": {
              name: "مانيكير كلاسيكي",
              description: "ترتيب دقيق للأظافر مع عناية بالجلد المحيط ولمسة نهائية نظيفة ومتوازنة."
            },
            "Classic Pedicure": {
              name: "باديكير كلاسيكي",
              description: "عناية أساسية للقدمين مع تقشير وتشذيب يمنح مظهراً ناعماً ومرتباً."
            },
            "Russian Manicure": {
              name: "مانيكير روسي",
              description: "تقنية جافة دقيقة حول الجلد المحيط لتعطي تحديداً نظيفاً بإطلالة احترافية."
            },
            "Russian Pedicure": {
              name: "باديكير روسي",
              description: "تنظيف دقيق للجلد والكالو للحصول على نتيجة منحوتة ومرتبة بالكامل."
            },
            "Gel Color Finish": {
              name: "طلاء جل",
              description: "لون جل ثابت يدوم طويلاً مع لمعة نهائية زجاجية أنيقة."
            },
            "Softgel Structure": {
              name: "تقوية سوفت جل",
              description: "تقوية خفيفة تمنح الظفر متانة ومرونة مع مظهر طبيعي راقٍ."
            },
            "Refill Maintenance": {
              name: "إعادة تعبئة وصيانة",
              description: "تعديل النمو وإعادة توازن البنية للحفاظ على شكل متناسق طوال الوقت."
            },
            "Gel Extension": {
              name: "إطالة جل",
              description: "إطالة مصممة حسب شكل يدك بتوازن أنيق وثبات يدوم."
            },
            "Rubber Base Reinforcement": {
              name: "تقوية بقاعدة مطاطية",
              description: "طبقة مرنة داعمة تعزز ثبات الطلاء وتحافظ على متانة الظفر."
            },
            "Signature Mani-Pedi Experience": {
              name: "تجربة أرزة المميزة لليدين والقدمين",
              description: "طقس متكامل لليدين والقدمين يختتم بلمسة خفيفة من زيت الأرز."
            },
            "Nail Art (Per Nail)": {
              name: "فن الأظافر (لكل ظفر)",
              description: "تصاميم فرنش أو كروم أو أومبري أو كات آي بتنفيذ دقيق ولمسة عصرية.",
              note: "لكل ظفر"
            }
          }
        },
        massage: {
          name: "المساج",
          tagline: "إيقاع هادئ. انتعاش عميق.",
          intro:
            "جلسات مصممة لتخفيف التوتر واستعادة التوازن بأسلوب هادئ ومدروس.",
          services: {
            "Relaxing Massage": {
              name: "مساج استرخائي",
              description: "جلسة كاملة للجسم بأسلوب أرزة الخاص: ضغط متوازن، انتقالات ناعمة، واسترخاء عميق."
            },
            "White Wood Therapy with Cedar Oil": {
              name: "علاج الخشب الأبيض بزيت الأرز",
              description: "تقنية نحت تجمع بين الخشب الأبيض وزيت الأرز اللبناني الدافئ لتنشيط الدورة وتحسين القوام."
            },
            "Hot Stone Ritual": {
              name: "طقس الأحجار الساخنة",
              description: "أحجار دافئة بحركات مدروسة لتخفيف الشد العميق، مع لمسة نهائية دافئة من زيت الأرز."
            },
            "Thai Energy Flow": {
              name: "تدفق الطاقة التايلندي",
              description: "تمددات مساعدة وضغط إيقاعي لتحسين المرونة، توازن الوقفة، وتنشيط طاقة الجسم."
            }
          }
        },
        "brows-lashes": {
          name: "الحواجب والرموش",
          tagline: "دقة. تناسق. رفع.",
          intro: "لمسات دقيقة تبرز الملامح بخطوط نظيفة وتوازن ناعم.",
          services: {
            "Brow Lamination": {
              name: "لامينيشن الحواجب",
              description: "إعادة ترتيب دقيقة لشكل الحاجب تمنح امتلاءً متناسقاً ورفعاً أنيقاً."
            },
            "Lash Lift": {
              name: "رفع الرموش",
              description: "تقنية دقيقة تبرز انحناءة الرموش الطبيعية بإطلالة مرتبة وناعمة."
            },
            "Eye Refinement Package": {
              name: "باقة إبراز العين",
              description: "دمج مدروس بين لامينيشن الحواجب ورفع الرموش لإطار متوازن وجذاب للعين."
            },
            "Precision Threading": {
              name: "تنظيف بالخيط بدقة",
              description: "تشذيب نظيف للحواجب بتفاصيل دقيقة يمنح شكلاً محدداً ومظهراً مرتباً."
            }
          }
        }
      }
    }
  };

  const categoryGrid = document.getElementById("categoryGrid");
  const viewCategories = document.getElementById("view-categories");
  const viewCategory = document.getElementById("view-category");
  const backBtn = document.getElementById("backBtn");
  const langEn = document.getElementById("langEn");
  const langAr = document.getElementById("langAr");

  const catTagline = document.getElementById("catTagline");
  const catTitle = document.getElementById("catTitle");
  const catIntro = document.getElementById("catIntro");
  const serviceList = document.getElementById("serviceList");

  const translatableElements = {
    pageTitle: document.getElementById("pageTitle"),
    titleSubline: document.getElementById("titleSubline"),
    landingInfoLineOne: document.getElementById("landingInfoLineOne"),
    landingInfoPrefix: document.getElementById("landingInfoPrefix"),
    landingInfoLocation: document.getElementById("landingInfoLocation"),
    landingInfoSuffix: document.getElementById("landingInfoSuffix"),
    backText: document.getElementById("backText"),
    socialFooterTitle: document.getElementById("socialFooterTitle"),
    socialInstagram: document.getElementById("socialInstagram"),
    socialTikTok: document.getElementById("socialTikTok"),
    socialSnapchat: document.getElementById("socialSnapchat"),
    aboutEyebrow: document.getElementById("aboutEyebrow"),
    aboutTitle: document.getElementById("aboutTitle"),
    aboutParagraphOne: document.getElementById("aboutParagraphOne"),
    aboutParagraphTwo: document.getElementById("aboutParagraphTwo"),
    aboutKeywordNails: document.getElementById("aboutKeywordNails"),
    aboutKeywordMassage: document.getElementById("aboutKeywordMassage"),
    aboutKeywordBrows: document.getElementById("aboutKeywordBrows"),
    stickyWhatsAppLabel: document.getElementById("stickyWhatsAppLabel"),
    stickyCallLabel: document.getElementById("stickyCallLabel"),
    trustEyebrow: document.getElementById("trustEyebrow"),
    trustTitle: document.getElementById("trustTitle"),
    trustStepOneNumber: document.getElementById("trustStepOneNumber"),
    trustStepOneTitle: document.getElementById("trustStepOneTitle"),
    trustStepOneText: document.getElementById("trustStepOneText"),
    trustStepTwoNumber: document.getElementById("trustStepTwoNumber"),
    trustStepTwoTitle: document.getElementById("trustStepTwoTitle"),
    trustStepTwoText: document.getElementById("trustStepTwoText"),
    trustStepThreeNumber: document.getElementById("trustStepThreeNumber"),
    trustStepThreeTitle: document.getElementById("trustStepThreeTitle"),
    trustStepThreeText: document.getElementById("trustStepThreeText"),
    faqEyebrow: document.getElementById("faqEyebrow"),
    faqTitle: document.getElementById("faqTitle"),
    faqOneQuestion: document.getElementById("faqOneQuestion"),
    faqOneAnswer: document.getElementById("faqOneAnswer"),
    faqTwoQuestion: document.getElementById("faqTwoQuestion"),
    faqTwoAnswer: document.getElementById("faqTwoAnswer"),
    faqThreeQuestion: document.getElementById("faqThreeQuestion"),
    faqThreeAnswer: document.getElementById("faqThreeAnswer"),
    faqFourQuestion: document.getElementById("faqFourQuestion"),
    faqFourAnswer: document.getElementById("faqFourAnswer"),
    faqFiveQuestion: document.getElementById("faqFiveQuestion"),
    faqFiveAnswer: document.getElementById("faqFiveAnswer")
  };

  let currentLang = resolveInitialLanguage();
  let menuData = null;
  let activeCategoryId = null;

  function resolveInitialLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(saved)) return saved;
    const browserLang = (navigator.language || "").toLowerCase();
    return browserLang.startsWith("ar") ? "ar" : DEFAULT_LANG;
  }

  function t(key) {
    return I18N[currentLang][key] || I18N[DEFAULT_LANG][key] || "";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function buildWhatsAppUrl(message) {
    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
  }

  function buildGenericWhatsAppUrl() {
    return buildWhatsAppUrl(
      "Hi Arzé, I want to book a service. Source: organic website. / مرحباً أرزة، أريد حجز خدمة. المصدر: الموقع العضوي."
    );
  }

  function trackEvent(eventName, details = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      category: details.category || "",
      service: details.service || "",
      platform: details.platform || "",
      lang: details.lang || currentLang,
      page: details.page || "home",
      url: details.url || ""
    });
  }

  function getCategoryDictionary(categoryId) {
    return I18N[currentLang].categories[categoryId] || I18N[DEFAULT_LANG].categories[categoryId] || {};
  }

  function getCategoryDictionaryForLang(categoryId, lang) {
    return I18N[lang].categories[categoryId] || I18N[DEFAULT_LANG].categories[categoryId] || {};
  }

  function getServiceDictionary(categoryId, serviceName, lang = currentLang) {
    const categoryDictionary = getCategoryDictionaryForLang(categoryId, lang);
    return (categoryDictionary.services && categoryDictionary.services[serviceName]) || {};
  }

  function getLocalizedServiceName(categoryId, serviceName, lang) {
    return getServiceDictionary(categoryId, serviceName, lang).name || serviceName;
  }

  function buildServiceWhatsAppUrl(categoryId, service, currency) {
    const englishName = getLocalizedServiceName(categoryId, service.name, "en");
    const arabicName = getLocalizedServiceName(categoryId, service.name, "ar");
    const price = formatPrice(service.price, currency || "");
    return buildWhatsAppUrl(
      `Hi Arzé, I want to book: ${englishName} - ${price} / مرحباً أرزة، أريد حجز: ${arabicName} - ${price}`
    );
  }

  function translateCategory(category) {
    const categoryDictionary = getCategoryDictionary(category.id);

    return {
      ...category,
      name: categoryDictionary.name || category.name,
      tagline: categoryDictionary.tagline || category.tagline || "",
      intro: categoryDictionary.intro || category.intro || "",
      services: category.services.map((service) => {
        const serviceDictionary = getServiceDictionary(category.id, service.name);
        return {
          ...service,
          sourceName: service.name,
          name: serviceDictionary.name || service.name,
          description: serviceDictionary.description || service.description || "",
          note: serviceDictionary.note || service.note || ""
        };
      })
    };
  }

  function show(view) {
    viewCategories.classList.remove("view--active");
    viewCategory.classList.remove("view--active");
    view.classList.add("view--active");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function formatPrice(value, currency) {
    const n = Number(value);
    if (Number.isNaN(n)) return value;
    return `${n} ${currency}`;
  }

  function resolveImageUrl(path) {
    if (!path) return "";
    const trimmedPath = String(path).trim();
    if (/^(https?:|data:|blob:)/i.test(trimmedPath)) return trimmedPath;
    const normalizedPath = trimmedPath.replace(/^\/+/, "");
    return new URL(normalizedPath, window.location.href).href;
  }

  function getCategoryBgKey(category) {
    if (category.id === "nails") return "nails";
    if (category.id === "massage") return "massage";
    return "brows";
  }

  function applyStaticTranslations() {
    document.documentElement.lang = I18N[currentLang].htmlLang;
    document.documentElement.dir = I18N[currentLang].dir;

    Object.entries(translatableElements).forEach(([key, el]) => {
      if (el) el.textContent = t(key);
    });

    backBtn.setAttribute("aria-label", t("backAria"));
    document.getElementById("stickyWhatsAppBtn").setAttribute("aria-label", t("stickyWhatsAppAria"));
    document.getElementById("stickyCallBtn").setAttribute("aria-label", t("stickyCallAria"));
    document.getElementById("stickyWhatsAppBtn").href = buildGenericWhatsAppUrl();

    [langEn, langAr].forEach((button) => {
      const isActive = button.dataset.langOption === currentLang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function renderCategories(data) {
    categoryGrid.innerHTML = "";

    data.categories.forEach((category) => {
      const localized = translateCategory(category);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "card";
      btn.dataset.bg = getCategoryBgKey(localized);
      btn.innerHTML = `<div><h3 class="cardTitle">${escapeHtml(localized.name)}</h3></div>`;
      btn.addEventListener("click", () => renderCategory(data, localized.id));
      categoryGrid.appendChild(btn);
    });
  }

  function renderCategory(data, categoryId) {
    const category = data.categories.find((x) => x.id === categoryId);
    if (!category) return;

    const localizedCategory = translateCategory(category);

    activeCategoryId = categoryId;
    catTagline.textContent = localizedCategory.tagline || "";
    catTitle.textContent = localizedCategory.name || "";
    catIntro.textContent = localizedCategory.intro || "";

    serviceList.innerHTML = "";

    localizedCategory.services.forEach((service) => {
      const card = document.createElement("article");
      card.className = "serviceCard";
      const imageUrl = resolveImageUrl(
        service.image ||
          category.image ||
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
      );

      card.style.setProperty("--service-image", `url('${imageUrl}')`);

      const detailsId = `service-details-${categoryId}-${(service.sourceName || service.name)
        .toLowerCase()
        .replace(/[^\u0621-\u064Aa-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`;

      const badges = [];
      if (service.note) badges.push(service.note);
      const serviceBookUrl = buildServiceWhatsAppUrl(
        categoryId,
        { ...service, name: service.sourceName || service.name },
        data.currency || ""
      );
      const safeServiceName = escapeHtml(service.name);
      const safePrice = escapeHtml(formatPrice(service.price, data.currency || ""));
      const safeDuration = escapeHtml(`${service.duration_min} ${t("minutes")}`);
      const safeDescription = escapeHtml(service.description || "");
      const safeBookLabel = escapeHtml(t("bookServiceLabel"));
      const safeViewLabel = escapeHtml(t("viewDescription"));
      const safeBookAria = escapeHtml(`${t("bookServiceAriaPrefix")} ${service.name}`);
      const safeImageStyle = escapeHtml(imageUrl);

      card.innerHTML = `
        <div class="serviceRow">
          <div class="serviceThumb" style="background-image: url('${safeImageStyle}')" aria-hidden="true"></div>
          <div class="serviceInfo">
            <h4 class="serviceName">${safeServiceName}</h4>
            <div class="serviceMeta" aria-label="${safePrice}, ${safeDuration}">
              <span class="servicePrice">${safePrice}</span>
              <span class="serviceDuration">${safeDuration}</span>
            </div>
          </div>
          <div class="serviceActions">
            <a class="serviceBookBtn" href="${serviceBookUrl}" target="_blank" rel="noopener" aria-label="${safeBookAria}" data-track="whatsapp_click" data-category="${escapeHtml(categoryId)}" data-service="${escapeHtml(service.sourceName || service.name)}">
              ${safeBookLabel}
            </a>
            <button type="button" class="serviceToggle" aria-expanded="false" aria-controls="${detailsId}">
              ${safeViewLabel}
            </button>
          </div>
        </div>
        <div id="${detailsId}" class="serviceDetails" hidden>
          <div class="serviceVisual" style="background-image: url('${safeImageStyle}')" aria-hidden="true"></div>
          <p class="serviceDesc">${safeDescription}</p>
          ${
            badges.length
              ? `<div class="badgeRow">${badges
                  .map((badge) => `<span class="badge">${escapeHtml(badge)}</span>`)
                  .join("")}</div>`
              : ""
          }
        </div>
      `;

      const toggleBtn = card.querySelector(".serviceToggle");
      const details = card.querySelector(".serviceDetails");
      toggleBtn.addEventListener("click", () => {
        const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";

        if (!isOpen) {
          trackEvent("service_detail_open", {
            category: categoryId,
            service: service.sourceName || service.name
          });

          serviceList.querySelectorAll(".serviceCard").forEach((otherCard) => {
            if (otherCard === card) return;
            otherCard.classList.remove("serviceCard--active");
            const otherToggle = otherCard.querySelector(".serviceToggle");
            const otherDetails = otherCard.querySelector(".serviceDetails");
            if (otherToggle) {
              otherToggle.setAttribute("aria-expanded", "false");
              otherToggle.textContent = t("viewDescription");
            }
            if (otherDetails) otherDetails.hidden = true;
          });
        }

        toggleBtn.setAttribute("aria-expanded", String(!isOpen));
        toggleBtn.textContent = isOpen ? t("viewDescription") : t("hideDescription");
        details.hidden = isOpen;
        card.classList.toggle("serviceCard--active", !isOpen);
      });

      serviceList.appendChild(card);
    });
    show(viewCategory);
  }

  function rerender() {
    applyStaticTranslations();
    if (!menuData) return;
    renderCategories(menuData);
    if (activeCategoryId) {
      renderCategory(menuData, activeCategoryId);
    }
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang) || currentLang === lang) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    rerender();
  }

  langEn.addEventListener("click", () => setLanguage("en"));
  langAr.addEventListener("click", () => setLanguage("ar"));
  backBtn.addEventListener("click", () => {
    activeCategoryId = null;
    show(viewCategories);
  });

  async function loadMenuData() {
    const menuUrl = new URL("./data/menu.json", window.location.href);
    const res = await fetch(menuUrl, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to load menu data: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }

  function renderLoadError(error) {
    categoryGrid.innerHTML = `
      <article class="serviceCard" role="status" aria-live="polite">
        <h3 class="serviceName">${t("loadErrorTitle")}</h3>
        <p class="serviceDesc">${t("loadErrorBody")}</p>
        <p class="serviceDesc">Technical details: ${error.message}</p>
      </article>
    `;
  }

  try {
    menuData = await loadMenuData();
    rerender();
  } catch (error) {
    console.error(error);
    applyStaticTranslations();
    renderLoadError(error);
  }

  show(viewCategories);
})();
