/* Nasi Rasul Arkib. Data katalog, glosari dan metodologi */
const catalog = [
  {code:"TDG-001", category:"Persediaan", category_en:"Preparation",
    title:"Mencampurkan kunyit dan kelapa parut", title_en:"Mixing turmeric & grated coconut",
    desc:"Mencampurkan kunyit hidup ditumbuk ke dalam kelapa parut.", desc_en:"Freshly pounded turmeric mixed into grated coconut.",
    tarikh:"6 Okt 2024, 3.13 petang", lokasi:"Kg. Sungai Tuda",
    makna:"Tiada makna simbolik khusus, sekadar proses teknikal.", makna_en:"No specific symbolic meaning; a technical step.",
    informan:"INF 2: Bidan (Tidong Sembakung)", etika:"Ya", etika_en:"Yes"},
  {code:"TDG-002", category:"Persediaan", category_en:"Preparation",
    title:"Meratakan santan melawan arah jam", title_en:"Spreading the mixture counter-clockwise",
    desc:"Meratakan kelapa parut & kunyit secara melawan arah jam sambil membaca bacaan khas; nama syurga disebut bagi setiap bahan yang diniatkan kepada bayi.", desc_en:"Spreading the grated coconut and turmeric counter-clockwise while reciting a special prayer; a name of paradise is invoked for each ingredient, intended for the child.",
    tarikh:"6 Okt 2024, 3.13 petang", lokasi:"Kg. Sungai Tuda",
    makna:"Pergerakan melawan arah jam bertujuan mengelak Nasi Rasul cepat basi.", makna_en:"The counter-clockwise motion is meant to keep Nasi Rasul from spoiling quickly.",
    informan:"INF 2: Bidan (Tidong Sembakung)", etika:"Ya", etika_en:"Yes"},
  {code:"TDG-003", category:"Persediaan", category_en:"Preparation",
    title:"Teknik memerah santan", title_en:"Coconut milk extraction technique",
    desc:"Memerah santan dengan jari ibu menahan ruas tengah jari telunjuk yang seakan bertahiyyat.", desc_en:"Extracting coconut milk with the thumb pressing the middle joint of the index finger, resembling the tahiyyat prayer gesture.",
    tarikh:"6 Okt 2024, 3.15 petang", lokasi:"Kg. Sungai Tuda",
    makna:"Menyerupai genggaman tangan bayi.", makna_en:"Resembles a baby's clenched hand.",
    informan:"INF 2: Bidan (Tidong Sembakung)", etika:"Ya", etika_en:"Yes"},
  {code:"TDG-004", category:"Persediaan", category_en:"Preparation",
    title:"Memanaskan campuran dan menambah garam", title_en:"Heating the mixture with salt",
    desc:"Memanaskan campuran kunyit dan santan, kemudian memasukkan perasa garam.", desc_en:"Heating the turmeric and coconut milk mixture, then adding salt to taste.",
    tarikh:"6 Okt 2024, 3.36 petang", lokasi:"Kg. Sungai Tuda",
    makna:"Tiada makna simbolik khusus, sekadar proses teknikal.", makna_en:"No specific symbolic meaning; a technical step.",
    informan:"INF 2: Bidan (Tidong Sembakung)", etika:"Ya", etika_en:"Yes"},
  {code:"TDG-005", category:"Bahan-Simbol", category_en:"Symbolic Elements",
    title:"Antin-antin (hiasan jaluran coklat)", title_en:"Antin-antin (brown striped decoration)",
    desc:"Antin-antin, hiasan jaluran berwarna coklat pada Nasi Rasul.", desc_en:"Antin-antin, a brown striped decoration on the Nasi Rasul.",
    tarikh:"6 Okt 2024, 6.26 petang", lokasi:"Kg. Sungai Tuda",
    makna:"Berkongsi / memberikan rasa bahagia pada tetamu yang hadir.", makna_en:"Represents sharing and bringing happiness to the guests present.",
    informan:"INF 2: Bidan (Tidong Sembakung); INF 3: Bidan (Tidong Apas); INF 4: Tukang kuih (Tidong Sembakung)", etika:"Ya", etika_en:"Yes"},
  {code:"TDG-006", category:"Bahan-Simbol", category_en:"Symbolic Elements",
    title:"Bentuk Nasi Rasul menyerupai bukit", title_en:"Nasi Rasul shaped like a hill",
    desc:"Bentuk Nasi Rasul dibentuk menyerupai bukit.", desc_en:"The Nasi Rasul is shaped to resemble a hill.",
    tarikh:"6 Okt 2024, 6.27 petang", lokasi:"Kg. Sungai Tuda",
    makna:"Menyerupai bukit tempat Nabi Muhammad bermunajat dan berdoa, didoakan keberkatan untuk bayi.", makna_en:"Resembles the hill where the Prophet Muhammad prayed in seclusion; a prayer for blessing upon the child.",
    informan:"INF 1: Imam (Tidong Kalabakan); INF 8: Orang Lama (Tidong Sembakung)", etika:"Ya", etika_en:"Yes",
    extra:[{makna:"Menyerupai bukit tempat Rasul naik untuk mengasingkan diri di Gua Hira'.", makna_en:"Resembles the hill where the Prophet withdrew in seclusion at the Cave of Hira.", informan:"INF 1: Imam (Tidong Kalabakan)"}]},
  {code:"TDG-007", category:"Bahan-Simbol", category_en:"Symbolic Elements",
    title:"Warna kekuningan dan hiasan telur", title_en:"Yellowish colour & egg decoration",
    desc:"Warna Nasi Rasul yang kekuningan, berserta hiasan telur.", desc_en:"The yellowish colour of the Nasi Rasul, together with an egg decoration.",
    tarikh:"6 Okt 2024, 6.28 petang", lokasi:"Kg. Sungai Tuda",
    makna:"Penghormatan dan kemuliaan pada junjungan Nabi Muhammad / terkait dengan resam warna tulang manusia / kesucian / kebersihan / keberkatan.", makna_en:"Respect and reverence for the Prophet Muhammad / linked to the natural colour of human bone / purity / cleanliness / blessings.",
    informan:"INF 9: Orang Lama (Tidong Sembakung); INF 1: Imam (Tidong Kalabakan); INF 4: Tukang kuih (Tidong Sembakung)", etika:"Ya", etika_en:"Yes",
    extra:[
      {makna:"Simbol penghormatan dan kemuliaan pada junjungan Nabi Muhammad.", makna_en:"A symbol of respect and reverence for the Prophet Muhammad.", informan:"INF 9: Orang Lama (Tidong Sembakung)"},
      {makna:"Hiasan telur: kuning melambangkan resam tulang manusia yang lama-kelamaan kekuningan, putih melambangkan tulang manusia yang asalnya putih.", makna_en:"Egg decoration: the yolk represents bone that yellows over time, the white represents bone in its original state.", informan:"INF 1: Imam (Tidong Kalabakan)"},
      {makna:"Kuning telur melambangkan keagungan; putih telur melambangkan kesucian/kebersihan.", makna_en:"The yolk symbolises grandeur; the white symbolises purity and cleanliness.", informan:"INF 9: Orang Lama (Tidong Sembakung)"},
      {makna:"Keberkatan pada telur yang diselawatkan, sering diminta ibu-ibu untuk diberi kepada anak bagi kecergasan minda.", makna_en:"Blessings invoked upon the egg are often sought by mothers to give to their children for mental sharpness.", informan:"INF 4: Tukang kuih (Tidong Sembakung)"}
    ]},
  {code:"TDG-008", category:"Interaksi Informan", category_en:"Informant Interaction",
    title:"Potongan Nasi Rasul untuk tetamu", title_en:"Nasi Rasul portions for guests",
    desc:"Potongan kecil Nasi Rasul untuk dibahagikan kepada tetamu yang hadir.", desc_en:"Small portions of Nasi Rasul distributed to the guests present.",
    tarikh:"7 Okt 2024, 6.32 pagi", lokasi:"Kg. Sungai Tuda",
    makna:"Berkongsi keberkahan bersama tetamu yang hadir.", makna_en:"Sharing blessings with the guests present.",
    informan:"INF 1: Imam (Tidong Kalabakan); INF 4: Tukang kuih (Tidong Sembakung)", etika:"Ya", etika_en:"Yes"},
  {code:"TDG-009", category:"Interaksi Informan", category_en:"Informant Interaction",
    title:"Potongan Nasi Rasul, sedekahan", title_en:"Nasi Rasul portions, as alms",
    desc:"Potongan kecil Nasi Rasul untuk dibahagikan kepada tetamu yang hadir.", desc_en:"Small portions of Nasi Rasul distributed to the guests present.",
    tarikh:"7 Okt 2024, 6.34 pagi", lokasi:"Kg. Sungai Tuda",
    makna:"Simbol sedekahan, iaitu sebagai buah tangan.", makna_en:"A symbol of almsgiving, given as a token gift.",
    informan:"INF 2: Bidan (Tidong Sembakung)", etika:"Ya", etika_en:"Yes"},
  {code:"TDG-010", category:"Interaksi Informan", category_en:"Informant Interaction",
    title:"Potongan Nasi Rasul, penghormatan", title_en:"Nasi Rasul portions, as a gesture of respect",
    desc:"Potongan kecil Nasi Rasul untuk dibahagikan kepada tetamu yang hadir.", desc_en:"Small portions of Nasi Rasul distributed to the guests present.",
    tarikh:"7 Okt 2024, 6.53 pagi", lokasi:"Kg. Sungai Tuda",
    makna:"Simbol penghormatan / penghargaan.", makna_en:"A symbol of respect and appreciation.",
    informan:"INF 3: Bidan (Tidong Apas); INF 7: Orang Lama (Tidong Sembakung)", etika:"Ya", etika_en:"Yes"},
];

const glossary = [
  {symbol:"Bukit", symbol_en:"Hill", desc:"Bentuk Nasi Rasul menyerupai bukit, merujuk kepada bukit tempat Nabi Muhammad bermunajat dan berdoa, serta bukit Gua Hira' tempat Rasul mengasingkan diri.", desc_en:"The Nasi Rasul is shaped like a hill, referring to the hill where the Prophet Muhammad prayed and the Cave of Hira where he withdrew in seclusion.", source:"TDG-006"},
  {symbol:"Warna Kekuningan", symbol_en:"Yellowish Colour", desc:"Warna Nasi Rasul yang kekuningan dikaitkan dengan simbol penghormatan serta kemuliaan Nabi Muhammad", desc_en:"The yellowish colour of Nasi Rasul is linked to a symbol of respect and reverence for the Prophet Muhammad", source:"TDG-007"},
  {symbol:"Telur (Kuning dan Putih)", symbol_en:"Egg (Yolk and White)", desc:"Kuning telur melambangkan resam tulang manusia / keagungan; putih telur melambangkan tulang asal / kesucian dan kebersihan.", desc_en:"The yolk symbolises the colour of aged bone and grandeur; the white symbolises bone in its original state, purity and cleanliness.", source:"TDG-007"},
  {symbol:"Antin-antin", symbol_en:"Antin-antin", desc:"Hiasan jaluran coklat pada Nasi Rasul yang membawa makna berkongsi dan memberi rasa bahagia kepada tetamu.", desc_en:"A brown striped decoration on Nasi Rasul that represents sharing and bringing happiness to guests.", source:"TDG-005"},
  {symbol:"Genggaman Tangan Bayi", symbol_en:"Baby's Clenched Hand", desc:"Teknik memerah santan dengan jari menahan ruas tengah telunjuk menyerupai genggaman tangan bayi yang diraikan.", desc_en:"The coconut-milk extraction technique, with the finger pressing the middle joint, resembles the clenched hand of the celebrated baby.", source:"TDG-003"},
  {symbol:"Pergerakan Melawan Arah Jam", symbol_en:"Counter-clockwise Motion", desc:"Pergerakan meratakan bahan melawan arah jam bertujuan mengelak Nasi Rasul daripada cepat basi.", desc_en:"Spreading the ingredients counter-clockwise is meant to keep Nasi Rasul from spoiling quickly.", source:"TDG-002"},
  {symbol:"Perkongsian dan Sedekah", symbol_en:"Sharing and Almsgiving", desc:"Potongan Nasi Rasul yang dibahagikan kepada tetamu membawa makna berkongsi keberkahan, sedekah, dan penghormatan.", desc_en:"Portions of Nasi Rasul given to guests carry meanings of shared blessing, almsgiving, and respect.", source:"TDG-008 / 009 / 010"},
];

const methodList = {
  ms: [
    "Reka bentuk etnografi kualitatif, dengan pemerhatian, temu bual dan fotografi lapangan pada Oktober 2024 dan Januari hingga Mei 2026 di Kg. Sungai Tuda, Kalabakan, Sabah.",
    "Kajian bersifat cross-sectional. Pengkaji hadir hanya apabila ada majlis Pasak Indong yang sedang berjalan.",
    "9 informan yang hadir dapat menerangkan makna di sebalik Nasi Rasul.",
    "Semua foto disahkan kebenaran penggunaannya untuk tujuan akademik melalui borang persetujuan (consent) informan."
  ],
  en: [
    "A qualitative ethnographic design, with observation, interviews and field photography conducted in October 2024 and January to May 2026 in Kg. Sungai Tuda, Kalabakan, Sabah.",
    "The study is cross-sectional. The researcher was present only when a Pasak Indong ceremony was taking place.",
    "Nine informants present were able to explain the meaning behind Nasi Rasul.",
    "All photographs were confirmed for academic use through informant consent forms."
  ]
};


/* ---------- Versi Jawi (jw) dan Cina ringkas (zh). DRAF, dalam semakan ---------- */
const UI_X = {
  jw: {
    navHome:"اوتام", navKatalog:"کاتالوݢ", navGlosari:"ݢلوساري", navMetod:"ميتودولوݢي", menu:"مينو",
    brandName:"ناسي رسول", brandSmall:"ارکيب", heroTitle:"ناسي رسول",
    heroKicker:"اتنيک تيدوڠ · کالاباکن، صباح",
    heroSub:"کاتالوݢ ڤموليهاراءن ديݢيتل",
    heroDek:"دوکومينتاسي ݢستروسيميوتيک ماکنن ريتوال دالم اوڤاچارا ڤاسق ايندوڠ (نايک ايون). اين اداله ڤروتوتايڤ اول اونتوق مڽيمڤن ڤڠتاهوان بودايا ليسن سبلوم اي هيلڠ بݢيتو سهاج.",
    heroCta:"تروکاي کاتالوݢ ←",
    heroKredit:"<b>TDG-005.</b> ناسي رسول برهياس انتين٢، جالورن چوکلت يڠ ملمبڠکن ڤرکوڠسين دان راس بهاݢيا برسام تتامو. 6 اوکتوبر 2024، کݢ. سوڠاي تودا. فوتو دڤرتيڠکت سچارا ديݢيتل.",
    tentangKicker:"تنتڠ ڤروجيک",
    tentangHeading:"مموليهارا معنا سبلوم ڤوڤوس",
    tentangP1:"عملن ماکنن ريتوال سڤرتي ناسي رسول دالم اوڤاچارا ڤاسق ايندوڠ ممباوا معنا سيمبوليک يڠ کاي د کالڠن مشارکت تيدوڠ. نامون ڤندوکومينتاسين خصوصڽ ترهادڤ ناسي رسول دالم اوڤاچارا ڤاسق ايندوڠ (نايک ايون) د کامڤوڠ سوڠاي تودا، کالاباکن، صباح ماسيه بلوم دلاکوکن سچارا سيستيماتيک. کأداءن اين بريسيکو لوڤوت اڤابيلا سماکين سديکيت اورڠ يڠ مڠعملکنڽ.",
    tentangP2:"لامن اين اداله ڤروتوتايڤ اول رڠک کرجا ڤموليهاراءن ديݢيتل. ستياڤ فوتو لاڤڠن دکاتالوݢکن دڠن ميتاداتا برستروکتور (تاريخ، لوکاسي، کاتݢوري، معنا سيمبوليک، دان اينفورمن) سوڤاي ڤڠتاهوان ݢستروسيميوتيک اين بوليه درجوع، دکوڠسي، دان دککلکن اونتوق ݢينيراسي اکن داتڠ.",
    stat1:"فوتو دکاتالوݢکن", stat2:"اينفورمن برمعنا", stat3:"فاسا کرجا لاڤڠن", stat4:"کاتݢوري دوکومينتاسي",
    ayunKicker:"کونتيکس اوڤاچارا",
    ayunHeading:"د سيسي ايونن، سهيدڠ برکت",
    ayunP1:"دالم اوڤاچارا ڤاسق ايندوڠ (نايک ايون)، بايي يڠ بارو لاهير دلتقکن دالم ايونن د هادڤن کلوارݢ دان تتامو. ناسي رسول دهيدڠکن د اتس داون ڤيسڠ سباݢاي لمبڠ کبرکتن، ڤڠهورمتن دان کسوچين، سرتا مموهون ڤرليندوڠن باݢي بايي.",
    ayunP2:"هياسن انتين٢ ڤولا ملمبڠکن کبهاݢياءن يڠ دکوڠسي دان ڤڠهورمتن کڤد تتامو. ستياڤ عنصورڽ، دري چارا سنتن دڤره هيڠݢ ڤوتوڠن يڠ دبهاݢيکن کڤد تتامو، مڽيمڤن معنا يڠ دواريثي سچارا ليسن. معنا اينيله يڠ ددوکومينتاسيکن دالم ارکيب اين.",
    ayunKap:"<b>ايلوستراسي.</b> ݢمبرن سواسان اوڤاچارا نايک ايون، دجان دڠن Gemini (Google) برداسرکن ايديا ڤڽليديق. بوکن فوتو لاڤڠن.",
    babakKicker:"ريکود لاڤڠن",
    babakHeading:"تيݢ بابق سڤيڠݢن ناسي رسول",
    babakP:"دري داڤور بيدن هيڠݢ ک تاڠن تتامو، ستياڤ لڠکه مڽيمڤن معنا. ڤيليه ساتو بابق اونتوق ممبوک ريکودڽ.",
    b1t:"ڤرسدياءن", b1p:"کوڽيت، کلاڤ ڤاروت دان سنتن دسدياکن دڠن ݢرق تاڠن يڠ برعادت.",
    b2t:"بهن دان سيمبول", b2p:"بنتوق بوکيت، ورنا ککونيڠن، تلور دان انتين٢ ممباوا تفسيرن ترسنديري.",
    b3t:"ڤرکوڠسين", b3p:"ڤوتوڠن ناسي رسول دبهاݢيکن کڤد تتامو سباݢاي صدقه دان ڤڠهورمتن.",
    suaraKicker:"سوارا اينفورمن",
    suaraQuote:"«کونيڠ تلور ملمبڠکن کأݢوڠن؛ ڤوتيه تلور ملمبڠکن کسوچين دان کبرسيهن.»",
    suaraCite:"INF 9 · اورڠ لام، تيدوڠ سمبکوڠ",
    suaraKap:"<b>TDG-007.</b> ورنا ککونيڠن دان هياسن تلور. 6 اوکتوبر 2024، کݢ. سوڠاي تودا.",
    suaraLink:"باچ ݢلوساري معنا",
    jelajahKicker:"جلاجه لامن", jelajahHeading:"تروکاي کاتالوݢ ڤموليهاراءن",
    j1t:"کاتالوݢ فوتو", j1p:"10 ريکود لاڤڠن دڠن ميتاداتا ڤنوه: تاريخ، لوکاسي، معنا سيمبوليک، دان اينفورمن.",
    j2t:"ݢلوساري معنا", j2p:"توجوه معنا ݢستروسيميوتيک اوتام د سباليق ناسي رسول.",
    j3t:"نوت ميتودولوݢي", j3p:"ريک بنتوق اتنوݢرافي، کرجا لاڤڠن، دان ايتيکا ڤڽليديقن.",
    buka:"بوک ←",
    katalogKicker:"ريکود لاڤڠن", katalogHeading:"کاتالوݢ فوتو",
    katalogP:"کليک مان٢ کد اونتوق ممبوک ريکود ميتاداتا ڤنوه، سڤرتي ممبوک کد کاتالوݢ د ارکيب فيزيکل.",
    fAll:"سموا (10)", fPersediaan:"ڤرسدياءن", fBahan:"بهن-سيمبول", fInteraksi:"اينتيراکسي اينفورمن",
    lihatRekod:"ليهت ريکود ڤنوه",
    recDeskripsi:"ديسکريڤسي ريڠکس", recTarikh:"تاريخ دان لوکاسي", recMakna:"معنا سيمبوليک / ݢستروسيميوتيک",
    recInforman:"اينفورمن / ڤرانن", recEtika:"کبنرن ݢونا (ايتيکا)", recTafsiran:"تفسيرن اينفورمن", tutup:"توتوڤ",
    glosariKicker:"تراس تفسيرن", glosariHeading:"ݢلوساري معنا سيمبوليک",
    glosariP:"معنا ݢستروسيميوتيک اوتام يڠ مونچول براولڠ کالي دالم اوڤاچارا. اينيله تراس ڤربينچڠن اکادميک کاجين اين.",
    rujuk:"روجوق",
    metodKicker:"قاعده", metodHeading:"نوت ميتودولوݢي", metodP:"ريڠکسن قاعده ڤڠومڤولن دان ڤڠصحن دات لاڤڠن.",
    petikHeading:"چارا ممتيق لامن اين",
    petikPeranan:"دات لاڤڠن درڤد کاجين PhD نور اديلا سموري. لامن دباڠونکن اوليه د. نورهدى صالح (ڤڽليا).",
    footHeading:"ناسي رسول، کاتالوݢ ڤموليهاراءن ديݢيتل",
    footP1:"ڤروتوتايڤ دوکومينتاسي ديݢيتل سوکوڠن ڤڽرتاءن ڤوستر ICVIAS 2026، فاکولتي سائينس سوسيال دان کمانوسياءن (FSSK)، اونيۏرسيتي مليسيا صباح.",
    footDev:"دباڠونکن اوليه د. نورهدى صالح.",
    footLaman:"لامن", footRujukan:"روجوکن",
    footNota:"ڤروتوتايڤ اول. فوتو لاڤڠن سبنر، TDG-001 هيڠݢ TDG-010.",
    visitLabel:"جومله کونجوڠن لامن",
    draftNote:"ۏرسي جاوي اين اداله دراف دان سدڠ دسمق."
  },
  zh: {
    navHome:"首页", navKatalog:"目录", navGlosari:"词汇表", navMetod:"研究方法", menu:"菜单",
    brandName:"Nasi Rasul", brandSmall:"档案馆", heroTitle:"Nasi Rasul",
    heroKicker:"Tidong 族 · 沙巴州 Kalabakan",
    heroSub:"数字保护目录",
    heroDek:"本网站记录 Pasak Indong（Naik Ayun，摇篮礼）仪式中仪式食物的饮食符号学意义。这一早期原型旨在口传文化知识消逝之前加以保存。",
    heroCta:"浏览目录 →",
    heroKredit:"<b>TDG-005.</b> 饰有 antin-antin 的 Nasi Rasul，棕色条纹象征与宾客分享、共享喜悦。2024年10月6日，Sungai Tuda 村。照片经数字增强处理。",
    tentangKicker:"关于项目",
    tentangHeading:"在消逝之前保存意义",
    tentangP1:"在 Pasak Indong 仪式中，Nasi Rasul 等仪式食物在 Tidong 族群中承载着丰富的象征意义。然而，沙巴州 Kalabakan 的 Sungai Tuda 村 Pasak Indong（Naik Ayun）仪式中的 Nasi Rasul 至今尚未得到系统记录。随着践行这一习俗的人日益减少，这些知识面临消失的风险。",
    tentangP2:"本网站是数字保护框架的早期原型。每张田野照片均以结构化元数据（日期、地点、类别、象征意义及受访者）编目，使这些饮食符号学知识得以被引用、分享，并为后代保存。",
    stat1:"已编目照片", stat2:"关键受访者", stat3:"田野调查阶段", stat4:"记录类别",
    ayunKicker:"仪式背景",
    ayunHeading:"摇篮之旁，共享福泽",
    ayunP1:"在 Pasak Indong（Naik Ayun）仪式中，新生儿在家人和宾客面前被放入摇篮。Nasi Rasul 盛放在香蕉叶上，象征福泽、尊敬与纯洁，并为婴儿祈求庇护。",
    ayunP2:"antin-antin 装饰则象征共享的喜悦和对宾客的尊重。从挤椰浆的方式到分给宾客的每一份，每个元素都承载着口耳相传的意义。本档案所记录的，正是这些意义。",
    ayunKap:"<b>插图。</b>Naik Ayun 仪式场景示意图，由 Gemini（Google）根据研究者的构想生成。并非田野照片。",
    babakKicker:"田野记录",
    babakHeading:"Nasi Rasul 的三个篇章",
    babakP:"从接生婆的厨房到宾客手中，每一步都蕴含意义。选择一个篇章查看相关记录。",
    b1t:"准备", b1p:"姜黄、椰丝和椰浆以合乎习俗的手势备制。",
    b2t:"象征元素", b2p:"山形、黄色、鸡蛋和 antin-antin 各有其独特诠释。",
    b3t:"分享", b3p:"Nasi Rasul 被分成小份赠予宾客，以示施舍与敬意。",
    suaraKicker:"受访者之声",
    suaraQuote:"“蛋黄象征崇高；蛋白象征纯洁与洁净。”",
    suaraCite:"INF 9 · 长者，Tidong Sembakung",
    suaraKap:"<b>TDG-007.</b> 黄色与鸡蛋装饰。2024年10月6日，Sungai Tuda 村。",
    suaraLink:"阅读意义词汇表",
    jelajahKicker:"浏览网站", jelajahHeading:"探索保护目录",
    j1t:"照片目录", j1p:"10 条田野记录，附完整元数据：日期、地点、象征意义及受访者。",
    j2t:"意义词汇表", j2p:"Nasi Rasul 背后的七种核心饮食符号学意义。",
    j3t:"研究方法说明", j3p:"民族志设计、田野调查与研究伦理。",
    buka:"打开 →",
    katalogKicker:"田野记录", katalogHeading:"照片目录",
    katalogP:"点击任意卡片即可打开完整的元数据记录，犹如在实体档案馆中抽出一张目录卡。",
    fAll:"全部 (10)", fPersediaan:"准备", fBahan:"象征元素", fInteraksi:"受访者互动",
    lihatRekod:"查看完整记录",
    recDeskripsi:"简要描述", recTarikh:"日期与地点", recMakna:"象征意义 / 饮食符号学意义",
    recInforman:"受访者 / 身份", recEtika:"使用许可（伦理）", recTafsiran:"受访者诠释", tutup:"关闭",
    glosariKicker:"核心诠释", glosariHeading:"象征意义词汇表",
    glosariP:"仪式中反复出现的核心饮食符号学意义，构成本研究学术讨论的核心。",
    rujuk:"参见",
    metodKicker:"方法", metodHeading:"研究方法说明", metodP:"田野数据收集与核实方法概述。",
    petikHeading:"如何引用本网站",
    petikPeranan:"田野数据来自 Nor Adila Samuri 的博士研究。网站由 Norhuda Salleh 博士（导师）开发。",
    footHeading:"Nasi Rasul 数字保护目录",
    footP1:"支持 ICVIAS 2026 海报参展作品的数字记录原型，马来西亚沙巴大学社会科学与人文学院（FSSK）。",
    footDev:"由 Norhuda Salleh 博士开发。",
    footLaman:"页面", footRujukan:"参考文献",
    footNota:"早期原型。原始田野照片，TDG-001 至 TDG-010。",
    visitLabel:"网站访问总数",
    draftNote:"中文版本为草稿，正在审校中。"
  }
};

const CAT_X = {
  jw: {
    "TDG-001":{category:"ڤرسدياءن",title:"منچمڤورکن کوڽيت دان کلاڤ ڤاروت",desc:"منچمڤورکن کوڽيت هيدوڤ يڠ دتومبوق ک دالم کلاڤ ڤاروت.",makna:"تيادا معنا سيمبوليک خصوص، سکدر ڤروسيس تيکنيکل.",etika:"يا"},
    "TDG-002":{category:"ڤرسدياءن",title:"مراتاکن سنتن ملاون اره جم",desc:"مراتاکن کلاڤ ڤاروت دان کوڽيت سچارا ملاون اره جم سمبيل ممباچ باچاءن خاص؛ نام شرݢ دسبوت باݢي ستياڤ بهن يڠ دنيتکن کڤد بايي.",makna:"ڤرݢرقن ملاون اره جم برتوجوان مڠيلق ناسي رسول چڤت باسي.",etika:"يا"},
    "TDG-003":{category:"ڤرسدياءن",title:"تيکنيک ممره سنتن",desc:"ممره سنتن دڠن جاري ايبو منهن روس تڠه جاري تلونجوق يڠ سأکن برتحيات.",makna:"مڽروڤاي ݢڠݢمن تاڠن بايي.",etika:"يا"},
    "TDG-004":{category:"ڤرسدياءن",title:"ممانسکن چمڤورن دان منمبه ݢارم",desc:"ممانسکن چمڤورن کوڽيت دان سنتن، کمودين مماسوقکن ڤراسا ݢارم.",makna:"تيادا معنا سيمبوليک خصوص، سکدر ڤروسيس تيکنيکل.",etika:"يا"},
    "TDG-005":{category:"بهن-سيمبول",title:"انتين٢ (هياسن جالورن چوکلت)",desc:"انتين٢، هياسن جالورن برورنا چوکلت ڤد ناسي رسول.",makna:"برکوڠسي / ممبريکن راس بهاݢيا ڤد تتامو يڠ حاضير.",etika:"يا"},
    "TDG-006":{category:"بهن-سيمبول",title:"بنتوق ناسي رسول مڽروڤاي بوکيت",desc:"بنتوق ناسي رسول دبنتوق مڽروڤاي بوکيت.",makna:"مڽروڤاي بوکيت تمڤت نبي محمد برموناجت دان بردوعا، ددوعاکن کبرکتن اونتوق بايي.",etika:"يا",
      extra:["مڽروڤاي بوکيت تمڤت رسول نايک اونتوق مڠاسيڠکن ديري د ݢوا حراء."]},
    "TDG-007":{category:"بهن-سيمبول",title:"ورنا ککونيڠن دان هياسن تلور",desc:"ورنا ناسي رسول يڠ ککونيڠن، برسرتا هياسن تلور.",makna:"ڤڠهورمتن دان کمولياءن ڤد جونجوڠن نبي محمد / ترکاءيت دڠن رسم ورنا تولڠ مانوسيا / کسوچين / کبرسيهن / کبرکتن.",etika:"يا",
      extra:["سيمبول ڤڠهورمتن دان کمولياءن ڤد جونجوڠن نبي محمد.","هياسن تلور: کونيڠ ملمبڠکن رسم تولڠ مانوسيا يڠ لام-کلاماءن ککونيڠن، ڤوتيه ملمبڠکن تولڠ مانوسيا يڠ اصلڽ ڤوتيه.","کونيڠ تلور ملمبڠکن کأݢوڠن؛ ڤوتيه تلور ملمبڠکن کسوچين/کبرسيهن.","کبرکتن ڤد تلور يڠ دصلواتکن، سريڠ دمينتا ايبو٢ اونتوق دبري کڤد انق باݢي کچرݢسن مينده."]},
    "TDG-008":{category:"اينتيراکسي اينفورمن",title:"ڤوتوڠن ناسي رسول اونتوق تتامو",desc:"ڤوتوڠن کچيل ناسي رسول اونتوق دبهاݢيکن کڤد تتامو يڠ حاضير.",makna:"برکوڠسي کبرکهن برسام تتامو يڠ حاضير.",etika:"يا"},
    "TDG-009":{category:"اينتيراکسي اينفورمن",title:"ڤوتوڠن ناسي رسول، صدقهن",desc:"ڤوتوڠن کچيل ناسي رسول اونتوق دبهاݢيکن کڤد تتامو يڠ حاضير.",makna:"سيمبول صدقهن، اءيت سباݢاي بواه تاڠن.",etika:"يا"},
    "TDG-010":{category:"اينتيراکسي اينفورمن",title:"ڤوتوڠن ناسي رسول، ڤڠهورمتن",desc:"ڤوتوڠن کچيل ناسي رسول اونتوق دبهاݢيکن کڤد تتامو يڠ حاضير.",makna:"سيمبول ڤڠهورمتن / ڤڠهرݢاءن.",etika:"يا"}
  },
  zh: {
    "TDG-001":{category:"准备",title:"混合姜黄与椰丝",desc:"将新鲜捣碎的姜黄拌入椰丝中。",makna:"无特定象征意义，仅为技术步骤。",etika:"是"},
    "TDG-002":{category:"准备",title:"逆时针抹匀椰丝混合物",desc:"一边诵读特定祷文，一边以逆时针方向抹匀椰丝与姜黄；每加入一种为婴儿祝愿的食材，便念诵一个天堂之名。",makna:"逆时针动作旨在防止 Nasi Rasul 过快变馊。",etika:"是"},
    "TDG-003":{category:"准备",title:"挤椰浆的手法",desc:"挤椰浆时以拇指按住食指中节，形似礼拜中的 tahiyyat 手势。",makna:"形似婴儿紧握的小手。",etika:"是"},
    "TDG-004":{category:"准备",title:"加热混合物并加盐",desc:"加热姜黄与椰浆的混合物，然后加盐调味。",makna:"无特定象征意义，仅为技术步骤。",etika:"是"},
    "TDG-005":{category:"象征元素",title:"antin-antin（棕色条纹装饰）",desc:"antin-antin，Nasi Rasul 上的棕色条纹装饰。",makna:"象征与在场宾客分享、带来喜悦。",etika:"是"},
    "TDG-006":{category:"象征元素",title:"形似小山的 Nasi Rasul",desc:"Nasi Rasul 被塑成小山的形状。",makna:"形似先知穆罕默德祈祷与沉思的山丘，为婴儿祈求福泽。",etika:"是",
      extra:["形似先知登山前往希拉山洞（Gua Hira'）隐居之处。"]},
    "TDG-007":{category:"象征元素",title:"黄色与鸡蛋装饰",desc:"Nasi Rasul 呈黄色，并饰以鸡蛋。",makna:"对先知穆罕默德的尊敬与崇敬 / 与人骨颜色的自然属性相关 / 纯洁 / 洁净 / 福泽。",etika:"是",
      extra:["象征对先知穆罕默德的尊敬与崇敬。","鸡蛋装饰：蛋黄象征随岁月泛黄的人骨，蛋白象征原本洁白的人骨。","蛋黄象征崇高；蛋白象征纯洁与洁净。","经诵念赞圣词（selawat）的鸡蛋蕴含福泽，母亲们常求取给孩子食用，以期头脑灵敏。"]},
    "TDG-008":{category:"受访者互动",title:"分给宾客的 Nasi Rasul",desc:"将 Nasi Rasul 切成小份，分给在场宾客。",makna:"与在场宾客分享福泽。",etika:"是"},
    "TDG-009":{category:"受访者互动",title:"分份的 Nasi Rasul，象征施舍",desc:"将 Nasi Rasul 切成小份，分给在场宾客。",makna:"施舍的象征，作为伴手礼。",etika:"是"},
    "TDG-010":{category:"受访者互动",title:"分份的 Nasi Rasul，象征敬意",desc:"将 Nasi Rasul 切成小份，分给在场宾客。",makna:"尊敬与感谢的象征。",etika:"是"}
  }
};

const GLOS_X = {
  jw: [
    {symbol:"بوکيت",desc:"بنتوق ناسي رسول مڽروڤاي بوکيت، مروجوق کڤد بوکيت تمڤت نبي محمد برموناجت دان بردوعا، سرتا بوکيت ݢوا حراء تمڤت رسول مڠاسيڠکن ديري."},
    {symbol:"ورنا ککونيڠن",desc:"ورنا ناسي رسول يڠ ککونيڠن دکاءيتکن دڠن سيمبول ڤڠهورمتن سرتا کمولياءن نبي محمد."},
    {symbol:"تلور (کونيڠ دان ڤوتيه)",desc:"کونيڠ تلور ملمبڠکن رسم تولڠ مانوسيا / کأݢوڠن؛ ڤوتيه تلور ملمبڠکن تولڠ اصل / کسوچين دان کبرسيهن."},
    {symbol:"انتين٢",desc:"هياسن جالورن چوکلت ڤد ناسي رسول يڠ ممباوا معنا برکوڠسي دان ممبري راس بهاݢيا کڤد تتامو."},
    {symbol:"ݢڠݢمن تاڠن بايي",desc:"تيکنيک ممره سنتن دڠن جاري منهن روس تڠه تلونجوق مڽروڤاي ݢڠݢمن تاڠن بايي يڠ دراءيکن."},
    {symbol:"ڤرݢرقن ملاون اره جم",desc:"ڤرݢرقن مراتاکن بهن ملاون اره جم برتوجوان مڠيلق ناسي رسول درڤد چڤت باسي."},
    {symbol:"ڤرکوڠسين دان صدقه",desc:"ڤوتوڠن ناسي رسول يڠ دبهاݢيکن کڤد تتامو ممباوا معنا برکوڠسي کبرکهن، صدقه، دان ڤڠهورمتن."}
  ],
  zh: [
    {symbol:"山丘",desc:"Nasi Rasul 形似小山，指先知穆罕默德祈祷的山丘，以及先知隐居的希拉山洞（Gua Hira'）所在之山。"},
    {symbol:"黄色",desc:"Nasi Rasul 的黄色与尊敬、崇敬先知穆罕默德的象征相关。"},
    {symbol:"鸡蛋（蛋黄与蛋白）",desc:"蛋黄象征随岁月泛黄的人骨与崇高；蛋白象征原本的人骨、纯洁与洁净。"},
    {symbol:"antin-antin",desc:"Nasi Rasul 上的棕色条纹装饰，象征分享并为宾客带来喜悦。"},
    {symbol:"婴儿紧握的小手",desc:"以手指按住食指中节挤椰浆的手法，形似受庆贺婴儿紧握的小手。"},
    {symbol:"逆时针动作",desc:"以逆时针方向抹匀食材，旨在防止 Nasi Rasul 过快变馊。"},
    {symbol:"分享与施舍",desc:"分给宾客的 Nasi Rasul 承载着共享福泽、施舍与敬意的意义。"}
  ]
};

methodList.jw = [
  "ريک بنتوق اتنوݢرافي کواليتاتيف، دڠن ڤمرهاتين، تمو بوال دان فوتوݢرافي لاڤڠن ڤد اوکتوبر 2024 دان جانواري هيڠݢ مي 2026 د کݢ. سوڠاي تودا، کالاباکن، صباح.",
  "کاجين برسيفت کرات لينتڠ (cross-sectional). ڤڠکاجي حاضير هاڽ اڤابيلا اد مجليس ڤاسق ايندوڠ يڠ سدڠ برجالن.",
  "9 اينفورمن يڠ حاضير داڤت منرڠکن معنا د سباليق ناسي رسول.",
  "سموا فوتو دصحکن کبنرن ڤڠݢوناءنڽ اونتوق توجوان اکادميک ملالوءي بورڠ ڤرستوجوان (consent) اينفورمن."
];
methodList.zh = [
  "采用定性民族志设计，于2024年10月及2026年1月至5月在沙巴州 Kalabakan 的 Sungai Tuda 村进行观察、访谈和田野摄影。",
  "本研究为横断面研究。研究者仅在 Pasak Indong 仪式举行时到场。",
  "在场的9位受访者能够解释 Nasi Rasul 背后的意义。",
  "所有照片均已通过受访者知情同意书确认可用于学术用途。"
];

/* ---------- Teks antara muka (MS / EN) ---------- */
const T = {
  navHome:{ms:"Utama",en:"Home"}, navKatalog:{ms:"Katalog",en:"Catalogue"}, navGlosari:{ms:"Glosari",en:"Glossary"}, navMetod:{ms:"Metodologi",en:"Methodology"},
  menu:{ms:"Menu",en:"Menu"},
  brandSmall:{ms:"Arkib",en:"Archive"},

  heroKicker:{ms:"Etnik Tidong · Kalabakan, Sabah",en:"Tidong Community · Kalabakan, Sabah"},
  heroSub:{ms:"Katalog Pemuliharaan Digital",en:"Digital Preservation Catalogue"},
  heroDek:{ms:"Dokumentasi gastrosemiotik makanan ritual dalam upacara Pasak Indong (Naik Ayun). Ini prototaip awal untuk menyimpan pengetahuan budaya lisan sebelum ia hilang begitu sahaja.",
           en:"A gastrosemiotic documentation of ritual food in the Pasak Indong (Naik Ayun) ceremony. This early prototype preserves oral cultural knowledge before it fades away."},
  heroCta:{ms:"Terokai katalog →",en:"Explore the catalogue →"},
  heroKredit:{ms:"<b>TDG-005.</b> Nasi Rasul berhias antin-antin, jaluran coklat yang melambangkan perkongsian dan rasa bahagia bersama tetamu. 6 Okt 2024, Kg. Sungai Tuda. Foto dipertingkat secara digital.",
              en:"<b>TDG-005.</b> Nasi Rasul adorned with antin-antin, brown stripes that symbolise sharing and happiness with guests. 6 Oct 2024, Kg. Sungai Tuda. Photo digitally enhanced."},

  tentangKicker:{ms:"Tentang Projek",en:"About the Project"},
  tentangHeading:{ms:"Memulihara makna sebelum pupus",en:"Preserving meaning before it is lost"},
  tentangP1:{ms:"Amalan makanan ritual seperti Nasi Rasul dalam upacara Pasak Indong membawa makna simbolik yang kaya di kalangan masyarakat Tidong. Namun pendokumentasian khususnya terhadap Nasi Rasul dalam upacara Pasak Indong (Naik Ayun) di Kampung Sungai Tuda, Kalabakan, Sabah masih belum dilakukan secara sistematik. Keadaan ini berisiko luput apabila semakin sedikit orang yang mengamalkannya.",
             en:"Ritual food practices such as Nasi Rasul in the Pasak Indong ceremony carry rich symbolic meaning within the Tidong community. Yet Nasi Rasul in the Pasak Indong (Naik Ayun) ceremony of Kampung Sungai Tuda, Kalabakan, Sabah has not been systematically documented. This knowledge risks fading as fewer people continue the practice."},
  tentangP2:{ms:"Laman ini adalah prototaip awal rangka kerja pemuliharaan digital. Setiap foto lapangan dikatalogkan dengan metadata berstruktur (tarikh, lokasi, kategori, makna simbolik, dan informan) supaya pengetahuan gastrosemiotik ini boleh dirujuk, dikongsi, dan dikekalkan untuk generasi akan datang.",
             en:"This site is an early prototype of a digital preservation framework. Each field photograph is catalogued with structured metadata (date, location, category, symbolic meaning, and informant) so that this gastrosemiotic knowledge can be referenced, shared, and preserved for future generations."},
  stat1:{ms:"Foto dikatalogkan",en:"Photos catalogued"}, stat2:{ms:"Informan bermakna",en:"Key informants"},
  stat3:{ms:"Fasa kerja lapangan",en:"Fieldwork phases"}, stat4:{ms:"Kategori dokumentasi",en:"Documentation categories"},

  ayunKicker:{ms:"Konteks Upacara",en:"Ceremonial Context"},
  ayunHeading:{ms:"Di sisi ayunan, sehidang berkat",en:"Beside the cradle, a shared blessing"},
  ayunP1:{ms:"Dalam upacara Pasak Indong (Naik Ayun), bayi yang baru lahir diletakkan dalam ayunan di hadapan keluarga dan tetamu. Nasi Rasul dihidangkan di atas daun pisang sebagai lambang keberkatan, penghormatan dan kesucian, serta memohon perlindungan bagi bayi.",
          en:"In the Pasak Indong (Naik Ayun) ceremony, the newborn is placed in a cradle before family and guests. Nasi Rasul is served on banana leaf as a sign of blessing, respect and purity, and as a plea for the child's protection."},
  ayunP2:{ms:"Hiasan antin-antin pula melambangkan kebahagiaan yang dikongsi dan penghormatan kepada tetamu. Setiap unsurnya, dari cara santan diperah hingga potongan yang dibahagikan kepada tetamu, menyimpan makna yang diwarisi secara lisan. Makna inilah yang didokumentasikan dalam arkib ini.",
          en:"The antin-antin decoration symbolises shared happiness and the honouring of guests. Every element, from the way coconut milk is pressed to the portions shared among guests, holds meaning passed down orally. It is this meaning that the archive documents."},
  ayunKap:{ms:"<b>Ilustrasi.</b> Gambaran suasana upacara Naik Ayun, dijana dengan Gemini (Google) berdasarkan idea penyelidik. Bukan foto lapangan.",
           en:"<b>Illustration.</b> A depiction of the Naik Ayun ceremony, generated with Gemini (Google) from the researcher's concept. Not a field photograph."},

  babakKicker:{ms:"Rekod Lapangan",en:"Field Records"},
  babakHeading:{ms:"Tiga babak sepinggan Nasi Rasul",en:"Nasi Rasul in three acts"},
  babakP:{ms:"Dari dapur bidan hingga ke tangan tetamu, setiap langkah menyimpan makna. Pilih satu babak untuk membuka rekodnya.",
          en:"From the midwife's kitchen to the hands of guests, every step holds meaning. Choose an act to open its records."},
  b1t:{ms:"Persediaan",en:"Preparation"}, b1p:{ms:"Kunyit, kelapa parut dan santan disediakan dengan gerak tangan yang beradat.",en:"Turmeric, grated coconut and coconut milk are prepared with customary hand gestures."},
  b2t:{ms:"Bahan dan Simbol",en:"Symbolic Elements"}, b2p:{ms:"Bentuk bukit, warna kekuningan, telur dan antin-antin membawa tafsiran tersendiri.",en:"The hill shape, yellow colour, egg and antin-antin each carry their own interpretation."},
  b3t:{ms:"Perkongsian",en:"Sharing"}, b3p:{ms:"Potongan Nasi Rasul dibahagikan kepada tetamu sebagai sedekah dan penghormatan.",en:"Portions of Nasi Rasul are shared with guests as alms and as a gesture of respect."},

  suaraKicker:{ms:"Suara Informan",en:"Informant Voice"},
  suaraQuote:{ms:"“Kuning telur melambangkan keagungan; putih telur melambangkan kesucian dan kebersihan.”",
              en:"“The yolk symbolises grandeur; the white symbolises purity and cleanliness.”"},
  suaraCite:{ms:"INF 9 · Orang Lama, Tidong Sembakung",en:"INF 9 · Elder, Tidong Sembakung"},
  suaraKap:{ms:"<b>TDG-007.</b> Warna kekuningan dan hiasan telur. 6 Okt 2024, Kg. Sungai Tuda.",en:"<b>TDG-007.</b> Yellowish colour and egg decoration. 6 Oct 2024, Kg. Sungai Tuda."},
  suaraLink:{ms:"Baca glosari makna",en:"Read the glossary"},
  suaraNota:{ms:"Petikan asal dalam bahasa Melayu.",en:"Translated from the original Malay."},

  jelajahKicker:{ms:"Jelajah Laman",en:"Explore the Site"},
  jelajahHeading:{ms:"Terokai katalog pemuliharaan",en:"Explore the preservation catalogue"},
  j1t:{ms:"Katalog Foto",en:"Photo Catalogue"}, j1p:{ms:"10 rekod lapangan dengan metadata penuh: tarikh, lokasi, makna simbolik, dan informan.",en:"10 field records with full metadata: date, location, symbolic meaning, and informant."},
  j2t:{ms:"Glosari Makna",en:"Glossary of Meanings"}, j2p:{ms:"Tujuh makna gastrosemiotik utama di sebalik Nasi Rasul.",en:"Seven core gastrosemiotic meanings behind Nasi Rasul."},
  j3t:{ms:"Nota Metodologi",en:"Methodology Notes"}, j3p:{ms:"Reka bentuk etnografi, kerja lapangan, dan etika penyelidikan.",en:"Ethnographic design, fieldwork, and research ethics."},
  buka:{ms:"Buka →",en:"Open →"},

  katalogKicker:{ms:"Rekod Lapangan",en:"Field Records"},
  katalogHeading:{ms:"Katalog Foto",en:"Photo Catalogue"},
  katalogP:{ms:"Klik mana-mana kad untuk membuka rekod metadata penuh, seperti membuka kad katalog di arkib fizikal.",en:"Click any card to open its full metadata record, much like pulling a card from a physical archive catalogue."},
  fAll:{ms:"Semua (10)",en:"All (10)"}, fPersediaan:{ms:"Persediaan",en:"Preparation"}, fBahan:{ms:"Bahan-Simbol",en:"Symbolic Elements"}, fInteraksi:{ms:"Interaksi Informan",en:"Informant Interaction"},
  lihatRekod:{ms:"Lihat rekod penuh",en:"View full record"},
  recDeskripsi:{ms:"Deskripsi Ringkas",en:"Brief Description"}, recTarikh:{ms:"Tarikh dan Lokasi",en:"Date and Location"},
  recMakna:{ms:"Makna Simbolik / Gastrosemiotik",en:"Symbolic / Gastrosemiotic Meaning"}, recInforman:{ms:"Informan / Peranan",en:"Informant / Role"},
  recEtika:{ms:"Kebenaran Guna (Etika)",en:"Consent (Ethics)"}, recTafsiran:{ms:"Tafsiran informan",en:"Informant interpretations"},
  tutup:{ms:"Tutup",en:"Close"},

  glosariKicker:{ms:"Teras Tafsiran",en:"Core Interpretations"},
  glosariHeading:{ms:"Glosari Makna Simbolik",en:"Glossary of Symbolic Meanings"},
  glosariP:{ms:"Makna gastrosemiotik utama yang muncul berulang kali dalam upacara. Inilah teras perbincangan akademik kajian ini.",en:"The core gastrosemiotic meanings that recur throughout the ceremony, forming the heart of this study's academic discussion."},
  rujuk:{ms:"Rujuk",en:"See"},

  metodKicker:{ms:"Kaedah",en:"Methods"},
  metodHeading:{ms:"Nota Metodologi",en:"Methodology Notes"},
  metodP:{ms:"Ringkasan kaedah pengumpulan dan pengesahan data lapangan.",en:"A summary of how field data were collected and verified."},
  petikHeading:{ms:"Cara memetik laman ini",en:"How to cite this site"},
  petikPeranan:{ms:"Data lapangan daripada kajian PhD Nor Adila Samuri. Laman dibangunkan oleh Dr. Norhuda Salleh (penyelia).",en:"Field data from the PhD research of Nor Adila Samuri. Site developed by Dr. Norhuda Salleh (supervisor)."},

  footHeading:{ms:"Nasi Rasul, Katalog Pemuliharaan Digital",en:"Nasi Rasul, Digital Preservation Catalogue"},
  footP1:{ms:"Prototaip dokumentasi digital sokongan Penyertaan Poster ICVIAS 2026, Fakulti Sains Sosial dan Kemanusiaan (FSSK), Universiti Malaysia Sabah.",en:"A digital documentation prototype supporting the ICVIAS 2026 poster entry, Faculty of Social Sciences and Humanities (FSSK), Universiti Malaysia Sabah."},
  footDev:{ms:"Dibangunkan oleh Dr. Norhuda Salleh.",en:"Developed by Dr. Norhuda Salleh."},
  footLaman:{ms:"Laman",en:"Pages"}, footRujukan:{ms:"Rujukan",en:"Reference"},
  footNota:{ms:"Prototaip awal. Foto lapangan sebenar, TDG-001 hingga TDG-010.",en:"Early prototype. Original field photographs, TDG-001 to TDG-010."},
  visitLabel:{ms:"Jumlah kunjungan laman",en:"Total site visits"}
};

/* ---------- Bahasa ---------- */
const LANGS = ['ms','en','jw','zh'];
const HTML_LANG = {ms:'ms', en:'en', jw:'ms-Arab', zh:'zh-Hans'};
let lang = 'ms';
try { const s = localStorage.getItem('nasiRasulLang'); if(LANGS.includes(s)) lang = s; } catch(e){}
Object.keys(UI_X).forEach(l => Object.entries(UI_X[l]).forEach(([k, v]) => { if(!T[k]) T[k] = {}; T[k][l] = v; }));
T.brandName.ms = T.brandName.en = 'Nasi Rasul'; T.heroTitle.ms = T.heroTitle.en = 'Nasi Rasul';
T.draftNote.ms = T.draftNote.en = '';
const tx = k => (T[k] && (T[k][lang] ?? T[k].ms)) || '';
const pick = (o, k) => {
  if(o.code && CAT_X[lang] && CAT_X[lang][o.code] && CAT_X[lang][o.code][k] != null) return CAT_X[lang][o.code][k];
  if(lang === 'en' && o[k + '_en']) return o[k + '_en'];
  return o[k];
};

function applyLang(){
  document.documentElement.lang = HTML_LANG[lang];
  document.documentElement.dir = lang === 'jw' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => { if(T[el.dataset.i18n]) el.textContent = tx(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { if(T[el.dataset.i18nHtml]) el.innerHTML = tx(el.dataset.i18nHtml); });
  document.querySelectorAll('.langs button[data-l]').forEach(b => { b.classList.toggle('on', b.dataset.l === lang); b.setAttribute('aria-pressed', b.dataset.l === lang); });
  const dn = document.getElementById('draftNote');
  if(dn){ dn.hidden = !(lang === 'jw' || lang === 'zh'); dn.textContent = tx('draftNote'); }
  renderKatalog(); renderGlosari(); renderMetod();
}

/* ---------- Katalog ---------- */
let filterNow = 'all';
const foto = code => 'images/' + code.toLowerCase() + '.jpg';

function renderKatalog(){
  const grid = document.getElementById('gridKatalog');
  if(!grid) return;
  grid.innerHTML = catalog.filter(i => filterNow === 'all' || i.category === filterNow).map(i => `
    <button class="kad-rekod" type="button" data-code="${i.code}">
      <div class="gbr"><img src="${foto(i.code)}" alt="${pick(i,'title')}" loading="lazy"><span class="kod" dir="ltr">${i.code}</span><span class="kat">${pick(i,'category')}</span></div>
      <h3>${pick(i,'title')}</h3>
      <p>${pick(i,'desc')}</p>
      <span class="buka">${tx('lihatRekod')}</span>
    </button>`).join('');
}

function bukaRekod(code){
  const i = catalog.find(c => c.code === code); if(!i) return;
  const xt = CAT_X[lang] && CAT_X[lang][i.code] && CAT_X[lang][i.code].extra;
  const [qo, qc] = lang === 'jw' ? ['\u00AB', '\u00BB'] : ['\u201C', '\u201D'];
  const tambahan = (i.extra || []).map((e, n) => `<div class="tambahan">${qo}${xt && xt[n] ? xt[n] : (lang === 'en' ? e.makna_en : e.makna)}${qc}<span dir="ltr">${e.informan}</span></div>`).join('');
  document.getElementById('isiModal').innerHTML = `
    <button class="tutup" type="button" aria-label="${tx('tutup')}" id="btnTutup">✕</button>
    <div class="gbr"><img src="${foto(i.code)}" alt="${pick(i,'title')}"></div>
    <div class="isi">
      <div class="kodrekod">${i.code} · ${pick(i,'category')}</div>
      <h3>${pick(i,'title')}</h3>
      <div class="baris"><div class="lbl">${tx('recDeskripsi')}</div><div class="nilai">${pick(i,'desc')}</div></div>
      <div class="baris"><div class="lbl">${tx('recTarikh')}</div><div class="nilai"><span dir="ltr">${i.tarikh} · ${i.lokasi}</span></div></div>
      <div class="baris"><div class="lbl">${tx('recMakna')}</div><div class="nilai">${pick(i,'makna')}</div>${tambahan}</div>
      <div class="baris"><div class="lbl">${tx('recInforman')}</div><div class="nilai"><span dir="ltr">${i.informan}</span></div></div>
      <div class="baris"><div class="lbl">${tx('recEtika')}</div><div class="nilai">${pick(i,'etika')}</div></div>
    </div>`;
  document.getElementById('latarModal').classList.add('buka');
  document.getElementById('btnTutup').focus();
}
function tutupRekod(){ const m = document.getElementById('latarModal'); if(m) m.classList.remove('buka'); }

/* ---------- Glosari ---------- */
function renderGlosari(){
  const grid = document.getElementById('gridGlosari');
  if(!grid) return;
  grid.innerHTML = glossary.map((g, n) => {
    const first = g.source.split(' ')[0];
    const gx = GLOS_X[lang] && GLOS_X[lang][n];
    return `<div class="entri"><div class="no">${String(n+1).padStart(2,'0')}</div><h3>${gx ? gx.symbol : pick(g,'symbol')}</h3><p>${gx ? gx.desc : pick(g,'desc')}</p><a href="katalog.html#${first}"><bdi>${tx('rujuk')}</bdi> <bdi dir="ltr">${g.source}</bdi></a></div>`;
  }).join('');
}

/* ---------- Metodologi ---------- */
function renderMetod(){
  const ol = document.getElementById('senaraiMetod');
  if(ol) ol.innerHTML = methodList[lang].map(x => `<li><span>${x}</span></li>`).join('');
}

/* ---------- Interaksi ---------- */
document.addEventListener('click', e => {
  const kad = e.target.closest('.kad-rekod'); if(kad){ bukaRekod(kad.dataset.code); return; }
  if(e.target.id === 'btnTutup' || e.target.id === 'latarModal'){ tutupRekod(); return; }
  const f = e.target.closest('.penapis button');
  if(f){ filterNow = f.dataset.filter; document.querySelectorAll('.penapis button').forEach(b => b.classList.toggle('aktif', b === f)); renderKatalog(); return; }
  const lb = e.target.closest('.langs button[data-l]');
  if(lb){ lang = lb.dataset.l; try { localStorage.setItem('nasiRasulLang', lang); } catch(err){} applyLang(); return; }
  if(e.target.closest('.burger')){ document.querySelector('.menu').classList.toggle('buka'); }
});
document.addEventListener('keydown', e => { if(e.key === 'Escape') tutupRekod(); });

applyLang();

/* Buka rekod terus jika pautan mengandungi #TDG-xxx (dari Glosari) */
if(document.getElementById('gridKatalog') && /^#TDG-\d{3}$/.test(location.hash)) bukaRekod(location.hash.slice(1));

/* ---------- Kaunter kunjungan ---------- */
const visitEl = document.getElementById('visitCount');
if(visitEl && typeof fetch === 'function'){
  let counted = false;
  try { counted = !!sessionStorage.getItem('nasiRasulVisit'); } catch(e){}
  fetch('https://abacus.jasoncameron.dev/' + (counted ? 'get' : 'hit') + '/nasi-rasul/visits')
    .then(r => r.json())
    .then(d => {
      if(d && d.value != null) visitEl.textContent = Number(d.value).toLocaleString();
      if(!counted){ try { sessionStorage.setItem('nasiRasulVisit','1'); } catch(e){} }
    })
    .catch(() => {});
}
