const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://wbstudio.xyz/arze-price-list";
const SITE_PATH = "/arze-price-list";
const PHONE = "+966598256743";
const PHONE_DISPLAY = "+966 59 825 6743";
const LOGO = "../../assets/logo.png";
const OG_IMAGE = `${BASE_URL}/assets/images/arze-spa-price-list-og.jpg`;
const LASTMOD = "2026-06-01";
const menu = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "menu.json"), "utf8"));

const socials = {
  instagram: "https://www.instagram.com/arze.spa?igsh=MXBhNTA1cWNhbG80Zw%3D%3D&utm_source=qr",
  tiktok: "https://www.tiktok.com/@arzespa?_r=1&_t=ZS-948km7odk9P",
  snapchat: "https://www.snapchat.com/add/arze.spa"
};

const pages = [
  {
    id: "home-spa",
    image: "../../assets/images/arze-spa-price-list-og.jpg",
    serviceType: "Home spa service",
    en: {
      slug: "home-spa-jeddah",
      title: "Home Spa Jeddah | Arzé Spa Beauty Services at Home",
      description: "Book Arzé Spa home spa services in Jeddah for nails, massage, brows and lashes. Clear prices, appointment-based care and WhatsApp booking.",
      kicker: "Home spa in Jeddah",
      h1: "Premium home spa services in Jeddah",
      intro: "Arzé Spa brings polished beauty and wellness rituals to your home across Jeddah, with clear prices and easy WhatsApp booking.",
      highlights: ["Nails, massage, brows and lashes", "Home service across Jeddah", "Visit option at Novotel Jeddah Tahlia"],
      sections: [
        ["A calmer booking flow", "Choose the service, check the price, and send the booking request directly through WhatsApp. The message includes the page source so Arzé can understand what you came for."],
        ["Designed for local discovery", "This page helps people searching for home spa services in Jeddah find Arzé by matching the services, city, location and booking intent in one useful page."]
      ],
      faqs: [
        ["Does Arzé Spa come to my home in Jeddah?", "Yes. Arzé Spa offers appointment-based home spa and beauty services across Jeddah."],
        ["Which services can I book at home?", "You can book nail care, relaxing massage rituals, brow lamination, lash lift and precision threading."],
        ["Can I visit Arzé Spa instead?", "Yes. You can also visit Arzé Spa at Novotel Jeddah Tahlia by appointment."]
      ],
      cta: "Book a home spa appointment"
    },
    ar: {
      slug: "spa-home-jeddah",
      title: "سبا منزلي جدة | أرزة سبا لخدمات الجمال في المنزل",
      description: "احجزي خدمات أرزة سبا المنزلية في جدة للأظافر والمساج والحواجب والرموش مع أسعار واضحة وحجز عبر واتساب.",
      kicker: "سبا منزلي في جدة",
      h1: "خدمات سبا منزلية راقية في جدة",
      intro: "تصل أرزة سبا إلى منزلك في جدة بخدمات جمال واسترخاء واضحة الأسعار وسهلة الحجز عبر واتساب.",
      highlights: ["أظافر ومساج وحواجب ورموش", "خدمة منزلية داخل جدة", "إمكانية الزيارة في نوفوتيل جدة التحلية"],
      sections: [
        ["حجز أوضح وأسرع", "اختاري الخدمة، راجعي السعر، ثم أرسلي طلب الحجز عبر واتساب برسالة جاهزة تساعدنا على معرفة الخدمة المطلوبة."],
        ["صفحة مهيأة للبحث المحلي", "تساعد هذه الصفحة من تبحث عن سبا منزلي في جدة على الوصول إلى أرزة من خلال معلومات واضحة عن الخدمات والمدينة وطريقة الحجز."]
      ],
      faqs: [
        ["هل تقدم أرزة سبا خدمة منزلية في جدة؟", "نعم. تقدم أرزة سبا خدمات سبا وجمال منزلية بالمواعيد داخل جدة."],
        ["ما الخدمات المتاحة للحجز المنزلي؟", "يمكنك حجز خدمات الأظافر، جلسات المساج، لامينيشن الحواجب، رفع الرموش والتنظيف بالخيط."],
        ["هل يمكن زيارة أرزة سبا بدلا من الخدمة المنزلية؟", "نعم. يمكن زيارة أرزة سبا في نوفوتيل جدة التحلية بالمواعيد."]
      ],
      cta: "احجزي خدمة سبا منزلية"
    }
  },
  {
    id: "nails",
    image: "../../assets/images/nails/russian-manicure.jpg",
    serviceType: "Nail service",
    price: "From 60 SAR",
    en: {
      slug: "nails-jeddah",
      title: "Nails in Jeddah | Arzé Spa Manicure and Gel",
      description: "Explore Arzé Spa nail services in Jeddah, including classic manicure, Russian manicure, pedicure, gel color and gel extensions.",
      kicker: "Nails in Jeddah",
      h1: "Nail services with a clean, polished finish",
      intro: "From classic manicures to Russian manicure and gel extensions, Arzé gives each nail service a precise, calm and refined finish.",
      highlights: ["Classic and Russian manicure", "Gel color, rubber base and extensions", "Home service or Novotel Jeddah Tahlia"],
      sections: [
        ["Choose by finish and durability", "Book a classic manicure for essential grooming, Russian manicure for detailed cuticle work, gel color for shine, or gel extensions for length and structure."],
        ["Clear prices before booking", "The price list keeps each nail service visible before you contact the team, making the booking conversation faster and more confident."]
      ],
      faqs: [
        ["What is the starting price for nail services?", "Arzé nail services start from 60 SAR for gel color finish."],
        ["Do you offer Russian manicure in Jeddah?", "Yes. Russian manicure is available by appointment with precise dry cuticle detailing."],
        ["Can I book nails at home?", "Yes. Nail services can be booked as home service across Jeddah."]
      ],
      cta: "Book nails in Jeddah"
    },
    ar: {
      slug: "nails-jeddah",
      title: "أظافر في جدة | مانيكير وإطالة جل من أرزة سبا",
      description: "استعرضي خدمات أرزة سبا للأظافر في جدة، من المانيكير الروسي والكلاسيكي إلى طلاء الجل وإطالة الجل.",
      kicker: "أظافر في جدة",
      h1: "خدمات أظافر بنتيجة نظيفة وراقية",
      intro: "من المانيكير الكلاسيكي إلى المانيكير الروسي وإطالة الجل، تقدم أرزة كل خدمة أظافر بدقة وهدوء ولمسة نهائية مصقولة.",
      highlights: ["مانيكير كلاسيكي وروسي", "طلاء جل وقاعدة مطاطية وإطالة", "خدمة منزلية أو زيارة نوفوتيل جدة التحلية"],
      sections: [
        ["اختاري حسب النتيجة والثبات", "احجزي المانيكير الكلاسيكي للعناية الأساسية، أو المانيكير الروسي للتفاصيل الدقيقة، أو الجل للمعان والثبات، أو الإطالة لطول وبنية أوضح."],
        ["أسعار واضحة قبل الحجز", "تعرض قائمة الأسعار كل خدمة أظافر بوضوح قبل التواصل، مما يجعل الحجز عبر واتساب أسرع وأسهل."]
      ],
      faqs: [
        ["ما أقل سعر لخدمات الأظافر؟", "تبدأ خدمات الأظافر في أرزة من 60 ريال لطلاء الجل."],
        ["هل يتوفر مانيكير روسي في جدة؟", "نعم. يتوفر المانيكير الروسي بالمواعيد مع تنظيف جاف ودقيق للجلد المحيط."],
        ["هل يمكن حجز الأظافر في المنزل؟", "نعم. يمكن حجز خدمات الأظافر كخدمة منزلية داخل جدة."]
      ],
      cta: "احجزي أظافر في جدة"
    }
  },
  {
    id: "massage",
    image: "../../assets/images/massage/relaxing-massage.jpg",
    serviceType: "Massage service",
    price: "From 180 SAR",
    en: {
      slug: "home-massage-jeddah",
      title: "Home Massage Jeddah | Relaxing Massage by Arzé Spa",
      description: "Book home massage in Jeddah with Arzé Spa, including relaxing massage, hot stone ritual, white wood therapy and Thai energy flow.",
      kicker: "Home massage in Jeddah",
      h1: "Relaxing massage rituals at home",
      intro: "Arzé massage services are designed for slow rhythm, controlled pressure and a quiet reset, available at home in Jeddah by appointment.",
      highlights: ["Relaxing massage from 180 SAR", "Hot stone and white wood therapy", "Appointment-based home service"],
      sections: [
        ["Choose the right body ritual", "Relaxing massage supports general calm, hot stone works deeper into tension, and white wood therapy with cedar oil focuses on sculpting and circulation."],
        ["Built for high-intent local search", "People searching for home massage in Jeddah need clear service options, prices, duration and a quick way to book. This page provides that without extra friction."]
      ],
      faqs: [
        ["How long is the relaxing massage?", "The relaxing massage is 40 minutes and costs 180 SAR."],
        ["Do you offer massage at home in Jeddah?", "Yes. Massage services are available as appointment-based home service across Jeddah."],
        ["Which massage is best for deeper tension?", "Hot Stone Ritual is designed to release deeper tension with heated stones and grounding warmth."]
      ],
      cta: "Book home massage"
    },
    ar: {
      slug: "massage-home-jeddah",
      title: "مساج منزلي جدة | مساج استرخائي من أرزة سبا",
      description: "احجزي مساج منزلي في جدة مع أرزة سبا، يشمل المساج الاسترخائي، الأحجار الساخنة، علاج الخشب الأبيض والتدفق التايلندي.",
      kicker: "مساج منزلي في جدة",
      h1: "جلسات مساج واسترخاء في المنزل",
      intro: "صممت خدمات المساج في أرزة بإيقاع هادئ وضغط متوازن لتجربة استرخاء عميقة في منزلك داخل جدة.",
      highlights: ["مساج استرخائي من 180 ريال", "أحجار ساخنة وعلاج الخشب الأبيض", "خدمة منزلية بالمواعيد"],
      sections: [
        ["اختاري الجلسة المناسبة", "المساج الاسترخائي مناسب للهدوء العام، والأحجار الساخنة للتوتر الأعمق، وعلاج الخشب الأبيض بزيت الأرز للنحت وتنشيط الدورة."],
        ["معلومات واضحة لمن تبحث عن مساج في جدة", "تجمع الصفحة الخيارات والأسعار والمدة وطريقة الحجز السريعة لمن تريد خدمة مساج منزلية بدون خطوات إضافية."]
      ],
      faqs: [
        ["كم مدة المساج الاسترخائي؟", "مدة المساج الاسترخائي 40 دقيقة وسعره 180 ريال."],
        ["هل يتوفر المساج المنزلي في جدة؟", "نعم. تتوفر خدمات المساج كخدمة منزلية بالمواعيد داخل جدة."],
        ["أي جلسة أنسب للتوتر العميق؟", "طقس الأحجار الساخنة مصمم لتخفيف الشد العميق باستخدام أحجار دافئة وحركات مدروسة."]
      ],
      cta: "احجزي مساج منزلي"
    }
  },
  {
    id: "brows-lashes",
    image: "../../assets/images/brows/brow-lamination.jpg",
    serviceType: "Brow and lash service",
    price: "From 80 SAR",
    en: {
      slug: "brows-lashes-jeddah",
      title: "Brows and Lashes Jeddah | Arzé Spa Lamination and Lift",
      description: "Book brows and lashes in Jeddah with Arzé Spa, including brow lamination, lash lift, threading and the eye refinement package.",
      kicker: "Brows and lashes in Jeddah",
      h1: "Subtle definition for brows and lashes",
      intro: "Arzé brow and lash services focus on clean lines, symmetry and lift for a polished result that still feels natural.",
      highlights: ["Brow lamination and lash lift", "Precision threading", "Eye refinement package"],
      sections: [
        ["A focused eye menu", "Choose threading for clean shape, brow lamination for lift and symmetry, lash lift for natural curl, or the eye refinement package for both brows and lashes."],
        ["Easy comparison before booking", "Each service page helps people compare the purpose, price and result of the treatment before starting a WhatsApp conversation."]
      ],
      faqs: [
        ["What does brow lamination do?", "Brow lamination restructures the brow direction to create a fuller, lifted and more symmetrical look."],
        ["Do you offer lash lift in Jeddah?", "Yes. Lash lift is available by appointment and enhances natural lashes with a soft curve."],
        ["Can I combine brow lamination and lash lift?", "Yes. The Eye Refinement Package combines brow lamination and lash lift."]
      ],
      cta: "Book brows and lashes"
    },
    ar: {
      slug: "brows-lashes-jeddah",
      title: "حواجب ورموش جدة | لامينيشن ورفع من أرزة سبا",
      description: "احجزي خدمات الحواجب والرموش في جدة مع أرزة سبا، بما في ذلك لامينيشن الحواجب، رفع الرموش والتنظيف بالخيط.",
      kicker: "حواجب ورموش في جدة",
      h1: "تحديد ناعم للحواجب والرموش",
      intro: "تركز خدمات الحواجب والرموش في أرزة على الخطوط النظيفة والتناسق والرفع لنتيجة مصقولة وطبيعية.",
      highlights: ["لامينيشن حواجب ورفع رموش", "تنظيف بالخيط بدقة", "باقة إبراز العين"],
      sections: [
        ["قائمة مركزة لمنطقة العين", "اختاري التنظيف بالخيط للشكل المرتب، أو لامينيشن الحواجب للرفع والتناسق، أو رفع الرموش للانحناءة الطبيعية، أو الباقة التي تجمع بينهما."],
        ["مقارنة سهلة قبل الحجز", "تساعد كل صفحة خدمة على فهم النتيجة والسعر والغرض قبل بدء محادثة واتساب."]
      ],
      faqs: [
        ["ماذا يفعل لامينيشن الحواجب؟", "يعيد لامينيشن الحواجب ترتيب اتجاه الشعر ليمنح مظهرا أكثر امتلاء ورفعا وتناسقا."],
        ["هل يتوفر رفع الرموش في جدة؟", "نعم. يتوفر رفع الرموش بالمواعيد لإبراز الرموش الطبيعية بانحناءة ناعمة."],
        ["هل يمكن جمع لامينيشن الحواجب ورفع الرموش؟", "نعم. تجمع باقة إبراز العين بين لامينيشن الحواجب ورفع الرموش."]
      ],
      cta: "احجزي حواجب ورموش"
    }
  },
  {
    id: "russian-manicure",
    image: "../../assets/images/nails/russian-manicure.jpg",
    serviceType: "Russian manicure",
    price: "120 SAR",
    duration: "60 minutes",
    en: {
      slug: "russian-manicure-jeddah",
      title: "Russian Manicure Jeddah | Arzé Spa Dry Cuticle Care",
      description: "Book Russian manicure in Jeddah with Arzé Spa for precise dry cuticle detailing and a refined nail contour.",
      kicker: "Russian manicure in Jeddah",
      h1: "Russian manicure for an ultra-clean contour",
      intro: "This advanced dry manicure focuses on precision around the cuticle for a clean, seamless and editorial nail finish.",
      highlights: ["60 minutes", "120 SAR", "Available by home service"],
      sections: [
        ["Russian manicure vs classic manicure", "Classic manicure is ideal for essential grooming and polish. Russian manicure adds more detailed dry cuticle refinement for a cleaner contour and longer-looking polish line."],
        ["Who it suits", "Choose Russian manicure if you care about a very neat cuticle area, a refined finish, and a polished result that photographs beautifully."]
      ],
      faqs: [
        ["How much is Russian manicure at Arzé?", "Russian manicure is 120 SAR."],
        ["How long does Russian manicure take?", "The service takes around 60 minutes."],
        ["Can I book Russian manicure at home?", "Yes. You can book it as a home service in Jeddah."]
      ],
      cta: "Book Russian manicure"
    },
    ar: {
      slug: "russian-manicure-jeddah",
      title: "مانيكير روسي جدة | عناية دقيقة من أرزة سبا",
      description: "احجزي المانيكير الروسي في جدة مع أرزة سبا لتنظيف جاف ودقيق حول الجلد المحيط ولمسة نهائية راقية.",
      kicker: "مانيكير روسي في جدة",
      h1: "مانيكير روسي لتحديد نظيف ودقيق",
      intro: "يركز هذا المانيكير الجاف المتقدم على التفاصيل الدقيقة حول الجلد المحيط للحصول على نتيجة نظيفة ومصقولة.",
      highlights: ["60 دقيقة", "120 ريال", "متاح كخدمة منزلية"],
      sections: [
        ["المانيكير الروسي مقارنة بالكلاسيكي", "المانيكير الكلاسيكي مناسب للعناية الأساسية والطلاء. أما الروسي فيضيف تنظيفا جافا أدق حول الجلد المحيط للحصول على خط أنظف وشكل أكثر ترتيباً."],
        ["لمن يناسب", "اختاري المانيكير الروسي إذا كنت تهتمين بمنطقة جلد محيط دقيقة جدا ونتيجة مصقولة تظهر بشكل جميل في الصور."]
      ],
      faqs: [
        ["كم سعر المانيكير الروسي في أرزة؟", "سعر المانيكير الروسي 120 ريال."],
        ["كم مدة المانيكير الروسي؟", "تستغرق الخدمة حوالي 60 دقيقة."],
        ["هل يمكن حجز المانيكير الروسي في المنزل؟", "نعم. يمكن حجزه كخدمة منزلية في جدة."]
      ],
      cta: "احجزي مانيكير روسي"
    }
  },
  {
    id: "gel-extensions",
    image: "../../assets/images/nails/gel-extension.jpg",
    serviceType: "Gel extension",
    price: "350 SAR",
    duration: "120 minutes",
    en: {
      slug: "gel-extensions-jeddah",
      title: "Gel Extensions Jeddah | Arzé Spa Sculpted Nails",
      description: "Book gel extensions in Jeddah with Arzé Spa for tailored sculpted length, refined proportion and durable structure.",
      kicker: "Gel extensions in Jeddah",
      h1: "Sculpted gel extensions with refined length",
      intro: "Arzé gel extensions are customized for proportion, strength and a natural-looking editorial finish.",
      highlights: ["120 minutes", "350 SAR", "Custom sculpted length"],
      sections: [
        ["How long do gel extensions last?", "Wear depends on nail growth and aftercare, but gel extensions are designed for durability and can be maintained with refill appointments."],
        ["When to choose this service", "Choose gel extensions when you want visible length, a sculpted shape and a polished structure beyond natural nail reinforcement."]
      ],
      faqs: [
        ["How much are gel extensions at Arzé?", "Gel extensions are 350 SAR."],
        ["How long does the appointment take?", "The service takes around 120 minutes."],
        ["Do gel extensions need maintenance?", "Yes. Refill maintenance helps rebalance growth and keep the set aligned."]
      ],
      cta: "Book gel extensions"
    },
    ar: {
      slug: "gel-extensions-jeddah",
      title: "إطالة جل جدة | أظافر منحوتة من أرزة سبا",
      description: "احجزي إطالة الجل في جدة مع أرزة سبا لطول مصمم حسب اليد وبنية قوية ولمسة نهائية راقية.",
      kicker: "إطالة جل في جدة",
      h1: "إطالة جل منحوتة بطول أنيق",
      intro: "تصمم إطالة الجل في أرزة حسب تناسق اليد مع بنية قوية ولمسة نهائية طبيعية وراقية.",
      highlights: ["120 دقيقة", "350 ريال", "طول منحوت حسب الشكل"],
      sections: [
        ["كم تدوم إطالة الجل؟", "يعتمد الثبات على نمو الظفر والعناية بعد الجلسة، لكن إطالة الجل مصممة للمتانة ويمكن الحفاظ عليها بجلسات إعادة التعبئة."],
        ["متى تختارين هذه الخدمة", "اختاري إطالة الجل عندما تريدين طولا واضحا وشكلا منحوتا وبنية مصقولة تتجاوز تقوية الظفر الطبيعي."]
      ],
      faqs: [
        ["كم سعر إطالة الجل في أرزة؟", "سعر إطالة الجل 350 ريال."],
        ["كم تستغرق الجلسة؟", "تستغرق الخدمة حوالي 120 دقيقة."],
        ["هل تحتاج إطالة الجل إلى صيانة؟", "نعم. تساعد إعادة التعبئة على تعديل النمو والحفاظ على تناسق المجموعة."]
      ],
      cta: "احجزي إطالة جل"
    }
  },
  {
    id: "relaxing-massage",
    image: "../../assets/images/massage/relaxing-massage.jpg",
    serviceType: "Relaxing massage",
    price: "180 SAR",
    duration: "40 minutes",
    en: {
      slug: "relaxing-massage-jeddah",
      title: "Relaxing Massage Jeddah | Home Massage by Arzé Spa",
      description: "Book a 40-minute relaxing massage in Jeddah with Arzé Spa for steady pressure, fluid transitions and calm reset.",
      kicker: "Relaxing massage in Jeddah",
      h1: "A 40-minute reset for body and mood",
      intro: "The Arzé relaxing massage uses steady pressure and fluid transitions for a calm full-body ritual at home or by appointment.",
      highlights: ["40 minutes", "180 SAR", "Home service available"],
      sections: [
        ["Best massage for stress at home in Jeddah", "For people who want a calm, accessible reset without a long appointment, relaxing massage is the simplest choice in the Arzé menu."],
        ["What to expect", "The session is paced slowly and intentionally, focusing on relaxation rather than aggressive pressure or intense stretching."]
      ],
      faqs: [
        ["How much is relaxing massage?", "Relaxing massage is 180 SAR."],
        ["How long is the session?", "The session is 40 minutes."],
        ["Can I book through WhatsApp?", "Yes. Use the WhatsApp button and the service name will be included in your message."]
      ],
      cta: "Book relaxing massage"
    },
    ar: {
      slug: "relaxing-massage-jeddah",
      title: "مساج استرخائي جدة | مساج منزلي من أرزة سبا",
      description: "احجزي مساج استرخائي لمدة 40 دقيقة في جدة مع أرزة سبا لضغط متوازن وانتقالات ناعمة واسترخاء عميق.",
      kicker: "مساج استرخائي في جدة",
      h1: "استرخاء لمدة 40 دقيقة للجسم والمزاج",
      intro: "يعتمد المساج الاسترخائي في أرزة على ضغط متوازن وانتقالات ناعمة لجلسة هادئة للجسم في المنزل أو بالمواعيد.",
      highlights: ["40 دقيقة", "180 ريال", "خدمة منزلية متاحة"],
      sections: [
        ["أفضل مساج للتوتر في المنزل بجدة", "لمن تريد استرخاء واضحا دون موعد طويل، يعد المساج الاسترخائي الخيار الأبسط ضمن قائمة أرزة."],
        ["ماذا تتوقعين", "تسير الجلسة بإيقاع هادئ ومدروس، وتركز على الراحة أكثر من الضغط القوي أو التمدد المكثف."]
      ],
      faqs: [
        ["كم سعر المساج الاسترخائي؟", "سعر المساج الاسترخائي 180 ريال."],
        ["كم مدة الجلسة؟", "مدة الجلسة 40 دقيقة."],
        ["هل يمكن الحجز عبر واتساب؟", "نعم. استخدمي زر واتساب وسيتم تضمين اسم الخدمة في الرسالة."]
      ],
      cta: "احجزي مساج استرخائي"
    }
  },
  {
    id: "brow-lamination",
    image: "../../assets/images/brows/brow-lamination.jpg",
    serviceType: "Brow lamination",
    price: "150 SAR",
    duration: "45 minutes",
    en: {
      slug: "brow-lamination-jeddah",
      title: "Brow Lamination Jeddah | Lifted Brows by Arzé Spa",
      description: "Book brow lamination in Jeddah with Arzé Spa for symmetry, lift and a clean editorial brow finish.",
      kicker: "Brow lamination in Jeddah",
      h1: "Lifted, balanced brows with clean structure",
      intro: "Brow lamination restructures the brow direction to create a fuller, lifted and more symmetrical look.",
      highlights: ["45 minutes", "150 SAR", "Pairs with lash lift"],
      sections: [
        ["Brow lamination aftercare", "Keep brows dry immediately after the service, avoid heavy oils at first, and brush them gently into place to maintain the lifted effect."],
        ["When to book it", "Choose brow lamination if your brows grow downward, look uneven, or need more shape without adding permanent makeup."]
      ],
      faqs: [
        ["How much is brow lamination?", "Brow lamination is 150 SAR."],
        ["How long does it take?", "The appointment takes around 45 minutes."],
        ["Can I combine it with lash lift?", "Yes. The Eye Refinement Package combines brow lamination and lash lift."]
      ],
      cta: "Book brow lamination"
    },
    ar: {
      slug: "brow-lamination-jeddah",
      title: "لامينيشن حواجب جدة | رفع وتنسيق من أرزة سبا",
      description: "احجزي لامينيشن الحواجب في جدة مع أرزة سبا لتناسق ورفع وشكل حواجب نظيف وراقي.",
      kicker: "لامينيشن حواجب في جدة",
      h1: "حواجب مرفوعة ومتوازنة ببنية نظيفة",
      intro: "يعيد لامينيشن الحواجب ترتيب اتجاه الشعر ليمنح مظهرا أكثر امتلاء ورفعا وتناسقا.",
      highlights: ["45 دقيقة", "150 ريال", "يمكن دمجه مع رفع الرموش"],
      sections: [
        ["العناية بعد لامينيشن الحواجب", "حافظي على جفاف الحواجب مباشرة بعد الخدمة، وتجنبي الزيوت الثقيلة في البداية، ومشطيها بلطف للحفاظ على تأثير الرفع."],
        ["متى تحجزينه", "اختاري لامينيشن الحواجب إذا كان اتجاه الشعر للأسفل، أو إذا كان الشكل غير متوازن، أو كنت تريدين تحديداً بدون مكياج دائم."]
      ],
      faqs: [
        ["كم سعر لامينيشن الحواجب؟", "سعر لامينيشن الحواجب 150 ريال."],
        ["كم تستغرق الخدمة؟", "تستغرق الجلسة حوالي 45 دقيقة."],
        ["هل يمكن دمجه مع رفع الرموش؟", "نعم. تجمع باقة إبراز العين بين لامينيشن الحواجب ورفع الرموش."]
      ],
      cta: "احجزي لامينيشن حواجب"
    }
  }
];

const articles = [
  {
    id: "russian-vs-classic-manicure",
    image: "../../assets/images/nails/russian-manicure.jpg",
    relatedServiceId: "russian-manicure",
    en: {
      slug: "russian-vs-classic-manicure-jeddah",
      title: "Russian Manicure vs Classic Manicure in Jeddah | Arzé Spa",
      description: "Compare Russian manicure vs classic manicure in Jeddah, including finish, cuticle detail, timing, price and who each service suits.",
      kicker: "Nail guide",
      h1: "Russian manicure vs classic manicure",
      intro: "Both services create clean nails, but they solve different needs. This guide helps you choose the right Arzé manicure before booking.",
      sections: [
        ["Classic manicure", "Choose classic manicure when you want essential shaping, cuticle care and a neat polished finish. It is the simplest route for regular grooming."],
        ["Russian manicure", "Choose Russian manicure when you want advanced dry cuticle detailing and an ultra-clean polish line. It suits clients who care about precision and close-up finish."],
        ["Which should you book?", "If you want quick grooming, book classic manicure. If you want the most refined cuticle contour, book Russian manicure."]
      ],
      faqs: [
        ["Is Russian manicure more detailed than classic manicure?", "Yes. Russian manicure focuses more heavily on dry cuticle refinement and a very clean nail contour."],
        ["How much is Russian manicure at Arzé?", "Russian manicure is 120 SAR and takes around 60 minutes."],
        ["Can I book either service at home in Jeddah?", "Yes. Arzé Spa offers nail services as appointment-based home service in Jeddah."]
      ],
      cta: "Book the right manicure"
    },
    ar: {
      slug: "russian-vs-classic-manicure-jeddah",
      title: "المانيكير الروسي مقارنة بالكلاسيكي في جدة | أرزة سبا",
      description: "قارني بين المانيكير الروسي والكلاسيكي في جدة من حيث النتيجة والدقة والمدة والسعر والخيار الأنسب لك.",
      kicker: "دليل الأظافر",
      h1: "المانيكير الروسي مقارنة بالكلاسيكي",
      intro: "الخدمتان تمنحان أظافر مرتبة، لكن كل واحدة تناسب احتياجا مختلفا. يساعدك هذا الدليل على اختيار المانيكير المناسب قبل الحجز.",
      sections: [
        ["المانيكير الكلاسيكي", "اختاري المانيكير الكلاسيكي عندما تريدين تشذيباً أساسياً، عناية بالجلد المحيط، ولمسة طلاء نظيفة ومرتبة."],
        ["المانيكير الروسي", "اختاري المانيكير الروسي عندما تريدين تنظيفا جافا أدق حول الجلد المحيط وخط طلاء شديد النظافة."],
        ["أي خدمة تحجزين؟", "للعناية السريعة والمرتبة اختاري الكلاسيكي. ولأدق نتيجة حول الجلد المحيط اختاري الروسي."]
      ],
      faqs: [
        ["هل المانيكير الروسي أدق من الكلاسيكي؟", "نعم. يركز المانيكير الروسي أكثر على تنظيف الجلد المحيط بطريقة جافة ودقيقة."],
        ["كم سعر المانيكير الروسي في أرزة؟", "سعر المانيكير الروسي 120 ريال ومدته حوالي 60 دقيقة."],
        ["هل يمكن حجز الخدمتين في المنزل بجدة؟", "نعم. تقدم أرزة سبا خدمات الأظافر كخدمة منزلية بالمواعيد في جدة."]
      ],
      cta: "احجزي المانيكير المناسب"
    }
  },
  {
    id: "gel-extensions-duration",
    image: "../../assets/images/nails/gel-extension.jpg",
    relatedServiceId: "gel-extensions",
    en: {
      slug: "how-long-gel-extensions-last-jeddah",
      title: "How Long Do Gel Extensions Last? | Arzé Spa Jeddah",
      description: "Learn how long gel extensions last, when to book refill maintenance and how to care for sculpted nail extensions in Jeddah.",
      kicker: "Gel extension guide",
      h1: "How long do gel extensions last",
      intro: "Gel extension wear depends on nail growth, lifestyle and aftercare. Arzé designs extensions for structure, proportion and maintainable durability.",
      sections: [
        ["Typical wear", "Most clients plan maintenance when natural growth starts to show or the structure needs rebalancing. Refill appointments help keep the set aligned."],
        ["What affects longevity", "Water exposure, nail growth speed, picking, heavy impact and skipped aftercare can shorten wear. Gentle handling helps the extensions stay cleaner for longer."],
        ["When to book a refill", "Book refill maintenance before the grown-out area affects balance. If a nail lifts or feels uncomfortable, contact Arzé before your next appointment."]
      ],
      faqs: [
        ["How much are gel extensions at Arzé?", "Gel extensions are 350 SAR and take around 120 minutes."],
        ["Do gel extensions need refills?", "Yes. Refill maintenance corrects growth and helps maintain alignment."],
        ["Can I book gel extensions at home?", "Yes. Gel extensions can be booked as home service in Jeddah."]
      ],
      cta: "Book gel extensions"
    },
    ar: {
      slug: "how-long-gel-extensions-last-jeddah",
      title: "كم تدوم إطالة الجل؟ | أرزة سبا جدة",
      description: "تعرفي على مدة ثبات إطالة الجل، ومتى تحتاجين إعادة تعبئة، وكيف تحافظين على إطالة الأظافر في جدة.",
      kicker: "دليل إطالة الجل",
      h1: "كم تدوم إطالة الجل",
      intro: "يعتمد ثبات إطالة الجل على نمو الظفر ونمط الحياة والعناية بعد الجلسة. تصمم أرزة الإطالة لبنية متوازنة وثبات قابل للصيانة.",
      sections: [
        ["مدة الثبات المعتادة", "عادة يتم حجز الصيانة عندما يظهر نمو الظفر الطبيعي أو تحتاج البنية إلى إعادة توازن. تساعد إعادة التعبئة على الحفاظ على الشكل."],
        ["ما الذي يؤثر على الثبات", "التعرض الكثير للماء، سرعة نمو الظفر، العبث بالأظافر، الصدمات، وتجاهل العناية بعد الجلسة قد تقلل مدة الثبات."],
        ["متى تحجزين إعادة التعبئة", "احجزي الصيانة قبل أن تؤثر منطقة النمو على التوازن. إذا شعرت برفع أو عدم راحة، تواصلي مع أرزة قبل الموعد التالي."]
      ],
      faqs: [
        ["كم سعر إطالة الجل في أرزة؟", "سعر إطالة الجل 350 ريال ومدتها حوالي 120 دقيقة."],
        ["هل تحتاج إطالة الجل إلى تعبئة؟", "نعم. تساعد إعادة التعبئة على تعديل النمو والحفاظ على التناسق."],
        ["هل يمكن حجز إطالة الجل في المنزل؟", "نعم. يمكن حجز إطالة الجل كخدمة منزلية في جدة."]
      ],
      cta: "احجزي إطالة جل"
    }
  },
  {
    id: "stress-massage",
    image: "../../assets/images/massage/relaxing-massage.jpg",
    relatedServiceId: "relaxing-massage",
    en: {
      slug: "best-massage-for-stress-jeddah",
      title: "Best Massage for Stress at Home in Jeddah | Arzé Spa",
      description: "Find the best Arzé massage for stress at home in Jeddah, from relaxing massage to hot stone and Thai energy flow.",
      kicker: "Massage guide",
      h1: "Best massage for stress at home in Jeddah",
      intro: "Stress relief is personal. This guide helps you choose between Arzé massage rituals based on how your body feels and how much time you want to book.",
      sections: [
        ["For a simple reset", "Choose Relaxing Massage when you want a calm 40-minute session with steady pressure and fluid transitions."],
        ["For deeper tension", "Choose Hot Stone Ritual when you want grounding warmth and slower work on deeper tension."],
        ["For stiffness and movement", "Choose Thai Energy Flow when you want assisted stretching, pressure and a more active body reset."]
      ],
      faqs: [
        ["Which massage should I book first?", "Relaxing Massage is the simplest first choice for general stress and calm."],
        ["How much is relaxing massage?", "Relaxing Massage is 180 SAR for 40 minutes."],
        ["Do you offer home massage in Jeddah?", "Yes. Arzé Spa offers appointment-based home massage in Jeddah."]
      ],
      cta: "Book a stress-relief massage"
    },
    ar: {
      slug: "best-massage-for-stress-jeddah",
      title: "أفضل مساج للتوتر في المنزل بجدة | أرزة سبا",
      description: "اختاري أفضل مساج للتوتر في المنزل بجدة من أرزة سبا، من المساج الاسترخائي إلى الأحجار الساخنة والتدفق التايلندي.",
      kicker: "دليل المساج",
      h1: "أفضل مساج للتوتر في المنزل بجدة",
      intro: "تخفيف التوتر يختلف من شخص لآخر. يساعدك هذا الدليل على اختيار جلسة المساج المناسبة حسب شعور الجسم والوقت المناسب لك.",
      sections: [
        ["لاسترخاء بسيط", "اختاري المساج الاسترخائي إذا كنت تريدين جلسة هادئة لمدة 40 دقيقة بضغط متوازن وانتقالات ناعمة."],
        ["للتوتر الأعمق", "اختاري طقس الأحجار الساخنة إذا كنت تريدين دفئا مهدئا وعملا أبطأ على التوتر العميق."],
        ["للتصلب والحركة", "اختاري التدفق التايلندي إذا كنت تريدين تمددات مساعدة وضغطا أكثر نشاطا لإعادة تنشيط الجسم."]
      ],
      faqs: [
        ["أي مساج أحجز أولا؟", "المساج الاسترخائي هو الخيار الأبسط للتوتر العام والهدوء."],
        ["كم سعر المساج الاسترخائي؟", "سعر المساج الاسترخائي 180 ريال لمدة 40 دقيقة."],
        ["هل تقدمون مساج منزلي في جدة؟", "نعم. تقدم أرزة سبا مساج منزلي بالمواعيد في جدة."]
      ],
      cta: "احجزي مساج لتخفيف التوتر"
    }
  },
  {
    id: "brow-lamination-aftercare",
    image: "../../assets/images/brows/brow-lamination.jpg",
    relatedServiceId: "brow-lamination",
    en: {
      slug: "brow-lamination-aftercare-jeddah",
      title: "Brow Lamination Aftercare | Arzé Spa Jeddah",
      description: "Learn brow lamination aftercare tips from Arzé Spa Jeddah, including what to avoid after treatment and how to maintain lifted brows.",
      kicker: "Brows guide",
      h1: "Brow lamination aftercare",
      intro: "Good aftercare helps your brow lamination look cleaner for longer. Keep the first day simple, gentle and dry.",
      sections: [
        ["First 24 hours", "Avoid soaking the brows, steam, heavy oils and intense rubbing immediately after the service."],
        ["Daily maintenance", "Brush brows gently into place and avoid aggressive cleansing around the area. Keep the shape soft and natural."],
        ["When to rebook", "Rebook when the lifted direction starts relaxing or you want to refresh symmetry before an event."]
      ],
      faqs: [
        ["How much is brow lamination at Arzé?", "Brow lamination is 150 SAR and takes around 45 minutes."],
        ["Can I combine brow lamination with lash lift?", "Yes. The Eye Refinement Package combines both services."],
        ["Is brow lamination available in Jeddah?", "Yes. You can book brow lamination with Arzé Spa in Jeddah."]
      ],
      cta: "Book brow lamination"
    },
    ar: {
      slug: "brow-lamination-aftercare-jeddah",
      title: "العناية بعد لامينيشن الحواجب | أرزة سبا جدة",
      description: "تعرفي على نصائح العناية بعد لامينيشن الحواجب من أرزة سبا جدة، وما يجب تجنبه للحفاظ على الرفع والتناسق.",
      kicker: "دليل الحواجب",
      h1: "العناية بعد لامينيشن الحواجب",
      intro: "تساعد العناية الصحيحة بعد لامينيشن الحواجب على بقاء النتيجة مرتبة لمدة أطول. اجعلي اليوم الأول بسيطا ولطيفا وجافا.",
      sections: [
        ["أول 24 ساعة", "تجنبي تبليل الحواجب، البخار، الزيوت الثقيلة، والفرك القوي مباشرة بعد الخدمة."],
        ["العناية اليومية", "مشطي الحواجب بلطف في اتجاهها وتجنبي التنظيف القاسي حول المنطقة للحفاظ على الشكل الطبيعي."],
        ["متى تعيدين الحجز", "أعيدي الحجز عندما يبدأ اتجاه الرفع بالاسترخاء أو عندما تريدين تجديد التناسق قبل مناسبة."]
      ],
      faqs: [
        ["كم سعر لامينيشن الحواجب في أرزة؟", "سعر لامينيشن الحواجب 150 ريال ومدته حوالي 45 دقيقة."],
        ["هل يمكن دمج لامينيشن الحواجب مع رفع الرموش؟", "نعم. تجمع باقة إبراز العين بين الخدمتين."],
        ["هل لامينيشن الحواجب متوفر في جدة؟", "نعم. يمكنك حجز لامينيشن الحواجب مع أرزة سبا في جدة."]
      ],
      cta: "احجزي لامينيشن حواجب"
    }
  }
];

const hubs = [
  {
    lang: "en",
    slug: "services-jeddah",
    title: "Arzé Spa services in Jeddah",
    description: "Explore every Arzé Spa service page in Jeddah, including nails, massage, brows and lashes with prices and WhatsApp booking.",
    h1: "Arzé Spa services in Jeddah",
    intro: "Browse every service page from Arzé Spa, then choose the exact treatment you want before booking by WhatsApp."
  },
  {
    lang: "ar",
    slug: "services-jeddah",
    title: "دليل خدمات أرزة سبا في جدة",
    description: "استعرضي جميع صفحات خدمات أرزة سبا في جدة، بما في ذلك الأظافر والمساج والحواجب والرموش مع الأسعار والحجز عبر واتساب.",
    h1: "خدمات أرزة سبا في جدة",
    intro: "استعرضي جميع صفحات خدمات أرزة سبا، ثم اختاري الخدمة المناسبة قبل الحجز عبر واتساب."
  }
];

const serviceSlugOverrides = {
  "Russian Manicure": "russian-manicure-jeddah",
  "Gel Extension": "gel-extensions-jeddah",
  "Relaxing Massage": "relaxing-massage-jeddah",
  "Brow Lamination": "brow-lamination-jeddah"
};

const arabicServiceNames = {
  "Classic Manicure": "مانيكير كلاسيكي",
  "Classic Pedicure": "باديكير كلاسيكي",
  "Russian Manicure": "مانيكير روسي",
  "Russian Pedicure": "باديكير روسي",
  "Gel Color Finish": "طلاء جل",
  "Softgel Structure": "تقوية سوفت جل",
  "Refill Maintenance": "إعادة تعبئة وصيانة",
  "Gel Extension": "إطالة جل",
  "Rubber Base Reinforcement": "تقوية بقاعدة مطاطية",
  "Signature Mani-Pedi Experience": "تجربة أرزة المميزة لليدين والقدمين",
  "Nail Art (Per Nail)": "فن الأظافر",
  "Relaxing Massage": "مساج استرخائي",
  "White Wood Therapy with Cedar Oil": "علاج الخشب الأبيض بزيت الأرز",
  "Hot Stone Ritual": "طقس الأحجار الساخنة",
  "Thai Energy Flow": "تدفق الطاقة التايلندي",
  "Brow Lamination": "لامينيشن الحواجب",
  "Lash Lift": "رفع الرموش",
  "Eye Refinement Package": "باقة إبراز العين",
  "Precision Threading": "تنظيف بالخيط بدقة"
};

const arabicServiceDescriptions = {
  "Classic Manicure": "ترتيب دقيق للأظافر مع عناية بالجلد المحيط ولمسة نهائية نظيفة ومتوازنة.",
  "Classic Pedicure": "عناية أساسية للقدمين مع تقشير وتشذيب يمنح مظهرا ناعما ومرتبا.",
  "Russian Manicure": "تقنية جافة دقيقة حول الجلد المحيط لتعطي تحديدا نظيفا بإطلالة احترافية.",
  "Russian Pedicure": "تنظيف دقيق للجلد والكالو للحصول على نتيجة منحوتة ومرتبة بالكامل.",
  "Gel Color Finish": "لون جل ثابت يدوم طويلا مع لمعة نهائية زجاجية أنيقة.",
  "Softgel Structure": "تقوية خفيفة تمنح الظفر متانة ومرونة مع مظهر طبيعي راق.",
  "Refill Maintenance": "تعديل النمو وإعادة توازن البنية للحفاظ على شكل متناسق طوال الوقت.",
  "Gel Extension": "إطالة مصممة حسب شكل يدك بتوازن أنيق وثبات يدوم.",
  "Rubber Base Reinforcement": "طبقة مرنة داعمة تعزز ثبات الطلاء وتحافظ على متانة الظفر.",
  "Signature Mani-Pedi Experience": "طقس متكامل لليدين والقدمين يختتم بلمسة خفيفة من زيت الأرز.",
  "Nail Art (Per Nail)": "تصاميم فرنش أو كروم أو أومبري أو كات آي بتنفيذ دقيق ولمسة عصرية.",
  "Relaxing Massage": "جلسة كاملة للجسم بأسلوب أرزة الخاص: ضغط متوازن، انتقالات ناعمة، واسترخاء عميق.",
  "White Wood Therapy with Cedar Oil": "تقنية نحت تجمع بين الخشب الأبيض وزيت الأرز اللبناني الدافئ لتنشيط الدورة وتحسين القوام.",
  "Hot Stone Ritual": "أحجار دافئة بحركات مدروسة لتخفيف الشد العميق، مع لمسة نهائية دافئة من زيت الأرز.",
  "Thai Energy Flow": "تمددات مساعدة وضغط إيقاعي لتحسين المرونة، توازن الوقفة، وتنشيط طاقة الجسم.",
  "Brow Lamination": "إعادة ترتيب دقيقة لشكل الحاجب تمنح امتلاء متناسقا ورفعا أنيقا.",
  "Lash Lift": "تقنية دقيقة تبرز انحناءة الرموش الطبيعية بإطلالة مرتبة وناعمة.",
  "Eye Refinement Package": "دمج مدروس بين لامينيشن الحواجب ورفع الرموش لإطار متوازن وجذاب للعين.",
  "Precision Threading": "تشذيب نظيف للحواجب بتفاصيل دقيقة يمنح شكلا محددا ومظهرا مرتبا."
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absolutePath(lang, slug) {
  return `${SITE_PATH}/${lang}/${slug}/`;
}

function absoluteUrl(lang, slug) {
  return `${BASE_URL}/${lang}/${slug}/`;
}

function absoluteAssetUrl(relativePath) {
  return normalizePageImage(relativePath).replace("../../", `${BASE_URL}/`);
}

function normalizePageImage(imagePath) {
  if (!imagePath) return "../../assets/images/arze-spa-price-list-og.jpg";
  return String(imagePath).startsWith("/")
    ? `../..${imagePath}`
    : imagePath;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getPageById(id) {
  return pages.find((page) => page.id === id);
}

function getMenuServiceSlug(serviceName) {
  return serviceSlugOverrides[serviceName] || `${slugify(serviceName)}-jeddah`;
}

function buildMenuServicePage(category, service) {
  const slug = getMenuServiceSlug(service.name);
  const categoryName = category.name === "Brows & Lashes" ? "brows and lashes" : category.name.toLowerCase();
  const arabicName = arabicServiceNames[service.name] || service.name;
  const arabicDescription = arabicServiceDescriptions[service.name] || service.description;
  const price = `${service.price} SAR`;
  const duration = `${service.duration_min} minutes`;

  return {
    id: slug.replace(/-jeddah$/, ""),
    image: normalizePageImage(service.image),
    serviceType: service.name,
    price,
    duration,
    en: {
      slug,
      title: `${service.name} Jeddah | ${price} at Arzé Spa`,
      description: `Book ${service.name} in Jeddah with Arzé Spa. View the ${price} price, ${duration} duration, service details and WhatsApp booking.`,
      kicker: `${service.name} in Jeddah`,
      h1: `${service.name} in Jeddah`,
      intro: `${service.description} Book this ${categoryName} service with clear pricing and appointment-based care from Arzé Spa.`,
      highlights: [price, duration, "Home service or Novotel Jeddah Tahlia"],
      sections: [
        ["What this service includes", service.description],
        ["Before you book", `This page gives you the price, duration and booking path for ${service.name}, so you can decide before starting a WhatsApp conversation.`]
      ],
      faqs: [
        [`How much is ${service.name} at Arzé Spa?`, `${service.name} is ${price}.`],
        [`How long does ${service.name} take?`, `The appointment takes around ${duration}.`],
        [`Can I book ${service.name} at home in Jeddah?`, `Yes. Arzé Spa offers appointment-based home service in Jeddah, with a visit option at Novotel Jeddah Tahlia.`]
      ],
      cta: `Book ${service.name}`
    },
    ar: {
      slug,
      title: `${arabicName} جدة | ${price} في أرزة سبا`,
      description: `احجزي ${arabicName} في جدة مع أرزة سبا. السعر ${price} والمدة ${service.duration_min} دقيقة مع حجز عبر واتساب.`,
      kicker: `${arabicName} في جدة`,
      h1: `${arabicName} في جدة`,
      intro: `${arabicDescription} يمكنك حجز هذه الخدمة في جدة بسعر واضح وموعد منظم مع أرزة سبا.`,
      highlights: [price, `${service.duration_min} دقيقة`, "خدمة منزلية أو زيارة نوفوتيل جدة التحلية"],
      sections: [
        ["ما الذي تقدمه الخدمة", arabicDescription],
        ["قبل الحجز", `تعرض هذه الصفحة سعر ومدة ${arabicName} وطريقة الحجز، حتى تختاري الخدمة بثقة قبل التواصل عبر واتساب.`]
      ],
      faqs: [
        [`كم سعر ${arabicName} في أرزة سبا؟`, `سعر ${arabicName} هو ${price}.`],
        [`كم مدة ${arabicName}؟`, `تستغرق الخدمة حوالي ${service.duration_min} دقيقة.`],
        [`هل يمكن حجز ${arabicName} في المنزل بجدة؟`, "نعم. تقدم أرزة سبا خدمة منزلية بالمواعيد داخل جدة، مع إمكانية الزيارة في نوفوتيل جدة التحلية."]
      ],
      cta: `احجزي ${arabicName}`
    }
  };
}

function menuServicePages() {
  return menu.categories.flatMap((category) =>
    category.services.map((service) => buildMenuServicePage(category, service))
  );
}

function missingMenuServicePages() {
  const existingSlugs = new Set(pages.flatMap((page) => [page.en.slug, page.ar.slug]));
  return menuServicePages().filter((page) => !existingSlugs.has(page.en.slug));
}

function buildWhatsAppUrl(page, lang) {
  const text =
    lang === "ar"
      ? `مرحبا أرزة، أريد حجز ${page[lang].h1}. المصدر: ${absoluteUrl(lang, page[lang].slug)}`
      : `Hi Arzé, I want to book ${page[lang].h1}. Source: ${absoluteUrl(lang, page[lang].slug)}`;
  return `https://wa.me/966598256743?text=${encodeURIComponent(text)}&utm_source=organic_seo&utm_medium=website&utm_campaign=${encodeURIComponent(page.id)}`;
}

function buildArticleWhatsAppUrl(article, lang) {
  const service = getPageById(article.relatedServiceId);
  const serviceName = service ? service[lang].h1 : article[lang].h1;
  const text =
    lang === "ar"
      ? `مرحبا أرزة، قرأت ${article[lang].h1} وأريد حجز ${serviceName}. المصدر: ${absoluteUrl(lang, article[lang].slug)}`
      : `Hi Arzé, I read ${article[lang].h1} and want to book ${serviceName}. Source: ${absoluteUrl(lang, article[lang].slug)}`;
  return `https://wa.me/966598256743?text=${encodeURIComponent(text)}&utm_source=organic_article&utm_medium=website&utm_campaign=${encodeURIComponent(article.id)}`;
}

function buildHubWhatsAppUrl(hub) {
  const text =
    hub.lang === "ar"
      ? `مرحبا أرزة، أريد حجز خدمة من دليل خدمات أرزة سبا. المصدر: ${absoluteUrl(hub.lang, hub.slug)}`
      : `Hi Arzé, I want to book a service from the Arzé Spa services guide. Source: ${absoluteUrl(hub.lang, hub.slug)}`;
  return `https://wa.me/966598256743?text=${encodeURIComponent(text)}&utm_source=organic_seo&utm_medium=website&utm_campaign=services-jeddah`;
}

function jsonLd(page, lang) {
  const content = page[lang];
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(lang, content.slug)}#service`,
    name: content.h1,
    serviceType: page.serviceType,
    description: content.description,
    image: absoluteAssetUrl(page.image),
    areaServed: { "@type": "City", name: "Jeddah" },
    provider: {
      "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "DaySpa"],
      "@id": `${BASE_URL}/#arze-spa`,
      name: "Arzé Spa",
      telephone: PHONE,
      url: BASE_URL,
      image: OG_IMAGE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jeddah",
        addressCountry: "SA"
      }
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "SAR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(lang, content.slug)
    }
  };

  if (page.price && /^\d+ SAR$/.test(page.price)) {
    service.offers.price = page.price.replace(" SAR", "");
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return [service, faq];
}

function articleJsonLd(article, lang) {
  const content = article[lang];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(lang, content.slug)}#article`,
    headline: content.h1,
    description: content.description,
    image: absoluteAssetUrl(article.image),
    author: {
      "@type": "Organization",
      name: "Arzé Spa",
      url: BASE_URL
    },
    publisher: {
      "@type": "Organization",
      name: "Arzé Spa",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/assets/logo.png`
      }
    },
    datePublished: LASTMOD,
    dateModified: LASTMOD,
    mainEntityOfPage: absoluteUrl(lang, content.slug)
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return [articleSchema, faq];
}

function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

function renderBreadcrumb(items) {
  return `<nav class="seoBreadcrumb" aria-label="Breadcrumb">
      ${items
        .map((item, index) => {
          const isLast = index === items.length - 1;
          return isLast
            ? `<span aria-current="page">${escapeHtml(item.name)}</span>`
            : `<a href="${item.path}">${escapeHtml(item.name)}</a><span aria-hidden="true">/</span>`;
        })
        .join("\n      ")}
    </nav>`;
}

function relatedLinks(currentId, lang) {
  const ids = ["home-spa", "nails", "massage", "brows-lashes", "russian-manicure", "gel-extensions", "relaxing-massage", "brow-lamination"]
    .filter((id) => id !== currentId)
    .slice(0, 5);

  return ids
    .map((id) => {
      const page = getPageById(id);
      return `<a class="seoRelatedLink" href="${absolutePath(lang, page[lang].slug)}">${escapeHtml(page[lang].kicker)}</a>`;
    })
    .join("");
}

function renderSocialLinks(pageId) {
  const safePageId = escapeHtml(pageId);
  return `<div>
      <a href="${escapeHtml(socials.instagram)}" target="_blank" rel="noopener" data-track="social_click" data-platform="instagram" data-page="${safePageId}">Instagram</a>
      <a href="${escapeHtml(socials.tiktok)}" target="_blank" rel="noopener" data-track="social_click" data-platform="tiktok" data-page="${safePageId}">TikTok</a>
      <a href="${escapeHtml(socials.snapchat)}" target="_blank" rel="noopener" data-track="social_click" data-platform="snapchat" data-page="${safePageId}">Snapchat</a>
    </div>`;
}

function renderTrackingScript() {
  return `<script>
    document.querySelectorAll("[data-track]").forEach(function (link) {
      link.addEventListener("click", function () {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: link.dataset.track,
          category: link.dataset.category || "",
          service: link.dataset.service || "",
          platform: link.dataset.platform || "",
          lang: link.dataset.langOption || link.dataset.lang || "",
          page: link.dataset.page || "",
          url: link.href || ""
        });
      });
    });
  </script>`;
}

function renderPage(page, lang) {
  const content = page[lang];
  const otherLang = lang === "ar" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const canonical = absoluteUrl(lang, content.slug);
  const alternateCurrent = absoluteUrl(lang, content.slug);
  const alternateOther = absoluteUrl(otherLang, page[otherLang].slug);
  const bookUrl = buildWhatsAppUrl(page, lang);
  const breadcrumbItems = [
    { name: lang === "ar" ? "أرزة سبا" : "Arzé Spa", path: SITE_PATH, url: `${BASE_URL}/` },
    { name: content.kicker, path: absolutePath(lang, content.slug), url: canonical }
  ];
  const schema = [...jsonLd(page, lang), breadcrumbJsonLd(breadcrumbItems)]
    .map((entry) => `<script type="application/ld+json">\n${JSON.stringify(entry, null, 2)}\n  </script>`)
    .join("\n  ");
  const navLabel = lang === "ar" ? "قائمة الأسعار" : "Price list";
  const callLabel = lang === "ar" ? "اتصال" : "Call";
  const relatedLabel = lang === "ar" ? "صفحات مرتبطة" : "Related pages";
  const faqLabel = lang === "ar" ? "أسئلة شائعة" : "FAQs";
  const visitLabel = lang === "ar" ? "أو زوري أرزة في نوفوتيل جدة التحلية" : "Or visit Arzé at Novotel Jeddah Tahlia";
  const langSwitchLabel = lang === "ar" ? "English" : "عربي";

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(content.title)}</title>
  <meta name="description" content="${escapeHtml(content.description)}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="${lang}" href="${alternateCurrent}" />
  <link rel="alternate" hreflang="${otherLang}" href="${alternateOther}" />
  <link rel="alternate" hreflang="x-default" href="${absoluteUrl("en", page.en.slug)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeHtml(content.title)}" />
  <meta property="og:description" content="${escapeHtml(content.description)}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(content.title)}" />
  <meta name="twitter:description" content="${escapeHtml(content.description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <link rel="icon" href="../../assets/icons/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="../../assets/icons/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../css/styles.css" />
  <link rel="stylesheet" href="../../css/seo-pages.css" />
  ${schema}
</head>
<body class="seoPage">
  <header class="seoTopbar">
    <a class="seoLogoLink" href="${SITE_PATH}/" aria-label="Arzé Spa home">
      <img src="${LOGO}" alt="Arzé Spa" />
    </a>
    <nav class="seoNav" aria-label="SEO page navigation">
      <a href="${SITE_PATH}/">${escapeHtml(navLabel)}</a>
      <a href="${absolutePath(otherLang, page[otherLang].slug)}">${escapeHtml(langSwitchLabel)}</a>
    </nav>
  </header>

  <main>
    ${renderBreadcrumb(breadcrumbItems)}

    <section class="seoHero">
      <div class="seoHeroText">
        <p class="seoKicker">${escapeHtml(content.kicker)}</p>
        <h1>${escapeHtml(content.h1)}</h1>
        <p class="seoIntro">${escapeHtml(content.intro)}</p>
        <div class="seoCtaRow">
          <a class="seoCta seoCta--primary" href="${bookUrl}" target="_blank" rel="noopener" data-track="whatsapp_click" data-page="${page.id}">
            ${escapeHtml(content.cta)}
          </a>
          <a class="seoCta" href="tel:${PHONE}" data-track="phone_click" data-page="${page.id}">${escapeHtml(callLabel)} ${PHONE_DISPLAY}</a>
        </div>
      </div>
      <figure class="seoHeroImage">
        <img src="${page.image}" alt="${escapeHtml(content.h1)}" />
      </figure>
    </section>

    <section class="seoHighlights" aria-label="Service highlights">
      ${content.highlights.map((item) => `<span>${escapeHtml(item)}</span>`).join("\n      ")}
    </section>

    <section class="seoContent">
      ${content.sections
        .map(([heading, text]) => `<article>
        <h2>${escapeHtml(heading)}</h2>
        <p>${escapeHtml(text)}</p>
      </article>`)
        .join("\n      ")}
      <article>
        <h2>${escapeHtml(visitLabel)}</h2>
        <p>${lang === "ar" ? "تتوفر الخدمة المنزلية داخل جدة، ويمكن أيضا الحجز للزيارة في موقع أرزة داخل نوفوتيل جدة التحلية." : "Home service is available across Jeddah, and guests can also book an appointment at Arzé inside Novotel Jeddah Tahlia."}</p>
      </article>
    </section>

    <section class="seoFaq" aria-labelledby="seoFaqTitle">
      <h2 id="seoFaqTitle">${escapeHtml(faqLabel)}</h2>
      ${content.faqs
        .map(([question, answer]) => `<details>
        <summary>${escapeHtml(question)}</summary>
        <p>${escapeHtml(answer)}</p>
      </details>`)
        .join("\n      ")}
    </section>

    <section class="seoRelated" aria-label="${escapeHtml(relatedLabel)}">
      <h2>${escapeHtml(relatedLabel)}</h2>
      <div class="seoRelatedGrid">
        ${relatedLinks(page.id, lang)}
      </div>
    </section>
  </main>

  <footer class="seoFooter">
    <p>Arzé Spa · Jeddah · ${PHONE_DISPLAY}</p>
    ${renderSocialLinks(page.id)}
  </footer>
  ${renderTrackingScript()}
</body>
</html>
`;
}

function renderArticle(article, lang) {
  const content = article[lang];
  const otherLang = lang === "ar" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const canonical = absoluteUrl(lang, content.slug);
  const alternateCurrent = absoluteUrl(lang, content.slug);
  const alternateOther = absoluteUrl(otherLang, article[otherLang].slug);
  const bookUrl = buildArticleWhatsAppUrl(article, lang);
  const service = getPageById(article.relatedServiceId);
  const breadcrumbItems = [
    { name: lang === "ar" ? "أرزة سبا" : "Arzé Spa", path: SITE_PATH, url: `${BASE_URL}/` },
    { name: lang === "ar" ? "الأدلة" : "Guides", path: `${SITE_PATH}/#helpfulContentDirectory`, url: `${BASE_URL}/#helpfulContentDirectory` },
    { name: content.h1, path: absolutePath(lang, content.slug), url: canonical }
  ];
  const schema = [...articleJsonLd(article, lang), breadcrumbJsonLd(breadcrumbItems)]
    .map((entry) => `<script type="application/ld+json">\n${JSON.stringify(entry, null, 2)}\n  </script>`)
    .join("\n  ");
  const navLabel = lang === "ar" ? "قائمة الأسعار" : "Price list";
  const callLabel = lang === "ar" ? "اتصال" : "Call";
  const faqLabel = lang === "ar" ? "أسئلة شائعة" : "FAQs";
  const relatedLabel = lang === "ar" ? "احجزي الخدمة المرتبطة" : "Book the related service";
  const langSwitchLabel = lang === "ar" ? "English" : "عربي";

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(content.title)}</title>
  <meta name="description" content="${escapeHtml(content.description)}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="${lang}" href="${alternateCurrent}" />
  <link rel="alternate" hreflang="${otherLang}" href="${alternateOther}" />
  <link rel="alternate" hreflang="x-default" href="${absoluteUrl("en", article.en.slug)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeHtml(content.title)}" />
  <meta property="og:description" content="${escapeHtml(content.description)}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(content.title)}" />
  <meta name="twitter:description" content="${escapeHtml(content.description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <link rel="icon" href="../../assets/icons/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="../../assets/icons/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../css/styles.css" />
  <link rel="stylesheet" href="../../css/seo-pages.css" />
  ${schema}
</head>
<body class="seoPage">
  <header class="seoTopbar">
    <a class="seoLogoLink" href="${SITE_PATH}/" aria-label="Arzé Spa home">
      <img src="${LOGO}" alt="Arzé Spa" />
    </a>
    <nav class="seoNav" aria-label="Article navigation">
      <a href="${SITE_PATH}/">${escapeHtml(navLabel)}</a>
      <a href="${absolutePath(otherLang, article[otherLang].slug)}">${escapeHtml(langSwitchLabel)}</a>
    </nav>
  </header>

  <main>
    ${renderBreadcrumb(breadcrumbItems)}

    <article class="seoHero seoArticleHero">
      <div class="seoHeroText">
        <p class="seoKicker">${escapeHtml(content.kicker)}</p>
        <h1>${escapeHtml(content.h1)}</h1>
        <p class="seoIntro">${escapeHtml(content.intro)}</p>
        <div class="seoCtaRow">
          <a class="seoCta seoCta--primary" href="${bookUrl}" target="_blank" rel="noopener" data-track="whatsapp_click" data-page="${article.id}">
            ${escapeHtml(content.cta)}
          </a>
          <a class="seoCta" href="tel:${PHONE}" data-track="phone_click" data-page="${article.id}">${escapeHtml(callLabel)} ${PHONE_DISPLAY}</a>
        </div>
      </div>
      <figure class="seoHeroImage">
        <img src="${article.image}" alt="${escapeHtml(content.h1)}" />
      </figure>
    </article>

    <section class="seoContent seoArticleContent">
      ${content.sections
        .map(([heading, text]) => `<article>
        <h2>${escapeHtml(heading)}</h2>
        <p>${escapeHtml(text)}</p>
      </article>`)
        .join("\n      ")}
    </section>

    <section class="seoFaq" aria-labelledby="seoFaqTitle">
      <h2 id="seoFaqTitle">${escapeHtml(faqLabel)}</h2>
      ${content.faqs
        .map(([question, answer]) => `<details>
        <summary>${escapeHtml(question)}</summary>
        <p>${escapeHtml(answer)}</p>
      </details>`)
        .join("\n      ")}
    </section>

    <section class="seoRelated" aria-label="${escapeHtml(relatedLabel)}">
      <h2>${escapeHtml(relatedLabel)}</h2>
      <div class="seoRelatedGrid">
        ${service ? `<a class="seoRelatedLink" href="${absolutePath(lang, service[lang].slug)}">${escapeHtml(service[lang].kicker)}</a>` : ""}
        ${relatedLinks(article.relatedServiceId, lang)}
      </div>
    </section>
  </main>

  <footer class="seoFooter">
    <p>Arzé Spa · Jeddah · ${PHONE_DISPLAY}</p>
    ${renderSocialLinks(article.id)}
  </footer>
  ${renderTrackingScript()}
</body>
</html>
`;
}

function renderHub(hub) {
  const lang = hub.lang;
  const otherLang = lang === "ar" ? "en" : "ar";
  const otherHub = hubs.find((item) => item.lang === otherLang);
  const dir = lang === "ar" ? "rtl" : "ltr";
  const canonical = absoluteUrl(lang, hub.slug);
  const servicePages = menuServicePages().filter((page) => page[lang]);
  const breadcrumbItems = [
    { name: lang === "ar" ? "أرزة سبا" : "Arzé Spa", path: SITE_PATH, url: `${BASE_URL}/` },
    { name: hub.h1, path: absolutePath(lang, hub.slug), url: canonical }
  ];
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: hub.h1,
    itemListElement: servicePages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page[lang].h1,
      url: absoluteUrl(lang, page[lang].slug)
    }))
  };
  const schema = [itemList, breadcrumbJsonLd(breadcrumbItems)]
    .map((entry) => `<script type="application/ld+json">\n${JSON.stringify(entry, null, 2)}\n  </script>`)
    .join("\n  ");
  const navLabel = lang === "ar" ? "قائمة الأسعار" : "Price list";
  const langSwitchLabel = lang === "ar" ? "English" : "عربي";
  const bookUrl = buildHubWhatsAppUrl(hub);
  const bookLabel = lang === "ar" ? "احجزي عبر واتساب" : "Book on WhatsApp";
  const callLabel = lang === "ar" ? "اتصلي" : "Call";
  const pageId = `services-hub-${lang}`;
  const groupedServices = menu.categories
    .map((category) => {
      const links = category.services
        .map((service) => {
          const servicePage = buildMenuServicePage(category, service);
          return `<a class="seoRelatedLink" href="${absolutePath(lang, servicePage[lang].slug)}">
            <span>${escapeHtml(servicePage[lang].h1)}</span>
            <small>${escapeHtml(`${service.price} SAR · ${service.duration_min} ${lang === "ar" ? "دقيقة" : "min"}`)}</small>
          </a>`;
        })
        .join("\n          ");
      return `<section class="seoHubGroup">
        <h2>${escapeHtml(lang === "ar" && category.id === "brows-lashes" ? "الحواجب والرموش" : category.name)}</h2>
        <div class="seoRelatedGrid seoHubGrid">
          ${links}
        </div>
      </section>`;
    })
    .join("\n      ");

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(hub.title)}</title>
  <meta name="description" content="${escapeHtml(hub.description)}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="${lang}" href="${canonical}" />
  <link rel="alternate" hreflang="${otherLang}" href="${absoluteUrl(otherLang, otherHub.slug)}" />
  <link rel="alternate" hreflang="x-default" href="${absoluteUrl("en", "services-jeddah")}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeHtml(hub.title)}" />
  <meta property="og:description" content="${escapeHtml(hub.description)}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(hub.title)}" />
  <meta name="twitter:description" content="${escapeHtml(hub.description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <link rel="icon" href="../../assets/icons/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="../../assets/icons/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../css/styles.css" />
  <link rel="stylesheet" href="../../css/seo-pages.css" />
  ${schema}
</head>
<body class="seoPage">
  <header class="seoTopbar">
    <a class="seoLogoLink" href="${SITE_PATH}/" aria-label="Arzé Spa home">
      <img src="${LOGO}" alt="Arzé Spa" />
    </a>
    <nav class="seoNav" aria-label="Hub navigation">
      <a href="${SITE_PATH}/">${escapeHtml(navLabel)}</a>
      <a href="${absolutePath(otherLang, otherHub.slug)}">${escapeHtml(langSwitchLabel)}</a>
    </nav>
  </header>

  <main>
    ${renderBreadcrumb(breadcrumbItems)}

    <section class="seoHero seoHubHero">
      <div class="seoHeroText">
        <p class="seoKicker">${escapeHtml(lang === "ar" ? "كل الخدمات" : "All services")}</p>
        <h1>${escapeHtml(hub.h1)}</h1>
        <p class="seoIntro">${escapeHtml(hub.intro)}</p>
        <div class="seoCtaRow">
          <a class="seoCta seoCta--primary" href="${bookUrl}" target="_blank" rel="noopener" data-track="whatsapp_click" data-page="${pageId}">
            ${escapeHtml(bookLabel)}
          </a>
          <a class="seoCta" href="tel:${PHONE}" data-track="phone_click" data-page="${pageId}">${escapeHtml(callLabel)} ${PHONE_DISPLAY}</a>
        </div>
      </div>
      <figure class="seoHeroImage">
        <img src="../../assets/images/arze-spa-price-list-og.jpg" alt="${escapeHtml(hub.h1)}" />
      </figure>
    </section>

    <div class="seoHubGroups">
      ${groupedServices}
    </div>
  </main>

  <footer class="seoFooter">
    <p>Arzé Spa · Jeddah · ${PHONE_DISPLAY}</p>
    ${renderSocialLinks(pageId)}
  </footer>
  ${renderTrackingScript()}
</body>
</html>
`;
}

function writeFile(relativePath, content) {
  const fullPath = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
}

function buildSitemap() {
  function alternatesFor(enSlug, arSlug) {
    return [
      { lang: "en", href: absoluteUrl("en", enSlug) },
      { lang: "ar", href: absoluteUrl("ar", arSlug) },
      { lang: "x-default", href: absoluteUrl("en", enSlug) }
    ];
  }

  function renderAlternates(alternates = []) {
    return alternates
      .map(
        (alternate) =>
          `    <xhtml:link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}" />`
      )
      .join("\n");
  }

  const urls = [
    {
      loc: `${BASE_URL}/`,
      priority: "1.0",
      changefreq: "weekly",
      image: OG_IMAGE,
      imageTitle: "Arzé Spa Jeddah home spa price list"
    },
    ...pages.flatMap((page) => [
      {
        loc: absoluteUrl("en", page.en.slug),
        priority: page.id === "home-spa" ? "0.9" : "0.8",
        changefreq: "monthly",
        image: absoluteAssetUrl(page.image),
        imageTitle: page.en.h1,
        alternates: alternatesFor(page.en.slug, page.ar.slug)
      },
      {
        loc: absoluteUrl("ar", page.ar.slug),
        priority: page.id === "home-spa" ? "0.9" : "0.8",
        changefreq: "monthly",
        image: absoluteAssetUrl(page.image),
        imageTitle: page.ar.h1,
        alternates: alternatesFor(page.en.slug, page.ar.slug)
      }
    ]),
    ...articles.flatMap((article) => [
      {
        loc: absoluteUrl("en", article.en.slug),
        priority: "0.7",
        changefreq: "monthly",
        image: absoluteAssetUrl(article.image),
        imageTitle: article.en.h1,
        alternates: alternatesFor(article.en.slug, article.ar.slug)
      },
      {
        loc: absoluteUrl("ar", article.ar.slug),
        priority: "0.7",
        changefreq: "monthly",
        image: absoluteAssetUrl(article.image),
        imageTitle: article.ar.h1,
        alternates: alternatesFor(article.en.slug, article.ar.slug)
      }
    ]),
    ...missingMenuServicePages().flatMap((page) => [
      {
        loc: absoluteUrl("en", page.en.slug),
        priority: "0.75",
        changefreq: "monthly",
        image: absoluteAssetUrl(page.image),
        imageTitle: page.en.h1,
        alternates: alternatesFor(page.en.slug, page.ar.slug)
      },
      {
        loc: absoluteUrl("ar", page.ar.slug),
        priority: "0.75",
        changefreq: "monthly",
        image: absoluteAssetUrl(page.image),
        imageTitle: page.ar.h1,
        alternates: alternatesFor(page.en.slug, page.ar.slug)
      }
    ]),
    ...hubs.map((hub) => ({
      loc: absoluteUrl(hub.lang, hub.slug),
      priority: "0.85",
      changefreq: "weekly",
      image: OG_IMAGE,
      imageTitle: hub.h1,
      alternates: alternatesFor("services-jeddah", "services-jeddah")
    }))
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
${renderAlternates(url.alternates)}
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <image:image>
      <image:loc>${url.image}</image:loc>
      <image:title>${escapeHtml(url.imageTitle)}</image:title>
    </image:image>
  </url>`
  )
  .join("\n")}
</urlset>
`;
}

function main() {
  pages.forEach((page) => {
    ["en", "ar"].forEach((lang) => {
      writeFile(path.join(lang, page[lang].slug, "index.html"), renderPage(page, lang));
    });
  });
  articles.forEach((article) => {
    ["en", "ar"].forEach((lang) => {
      writeFile(path.join(lang, article[lang].slug, "index.html"), renderArticle(article, lang));
    });
  });
  missingMenuServicePages().forEach((page) => {
    ["en", "ar"].forEach((lang) => {
      writeFile(path.join(lang, page[lang].slug, "index.html"), renderPage(page, lang));
    });
  });
  hubs.forEach((hub) => {
    writeFile(path.join(hub.lang, hub.slug, "index.html"), renderHub(hub));
  });
  writeFile("sitemap.xml", buildSitemap());
  console.log(`Built ${pages.length * 2} SEO pages, ${articles.length * 2} article pages, ${missingMenuServicePages().length * 2} long-tail service pages, ${hubs.length} hub pages and sitemap.xml.`);
}

main();
