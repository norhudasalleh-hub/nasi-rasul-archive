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
let lang = 'ms';
try { lang = localStorage.getItem('nasiRasulLang') || 'ms'; } catch(e){}
const pick = (o, k) => lang === 'en' && o[k + '_en'] ? o[k + '_en'] : o[k];

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = T[el.dataset.i18n]; if(v) el.textContent = v[lang]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const v = T[el.dataset.i18nHtml]; if(v) el.innerHTML = v[lang]; });
  document.querySelectorAll('.lang span[data-l]').forEach(s => s.classList.toggle('on', s.dataset.l === lang));
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
      <div class="gbr"><img src="${foto(i.code)}" alt="${pick(i,'title')}" loading="lazy"><span class="kod">${i.code}</span><span class="kat">${pick(i,'category')}</span></div>
      <h3>${pick(i,'title')}</h3>
      <p>${pick(i,'desc')}</p>
      <span class="buka">${T.lihatRekod[lang]}</span>
    </button>`).join('');
}

function bukaRekod(code){
  const i = catalog.find(c => c.code === code); if(!i) return;
  const tambahan = (i.extra || []).map(e => `<div class="tambahan">“${lang === 'en' ? e.makna_en : e.makna}”<span>${e.informan}</span></div>`).join('');
  document.getElementById('isiModal').innerHTML = `
    <button class="tutup" type="button" aria-label="${T.tutup[lang]}" id="btnTutup">✕</button>
    <div class="gbr"><img src="${foto(i.code)}" alt="${pick(i,'title')}"></div>
    <div class="isi">
      <div class="kodrekod">${i.code} · ${pick(i,'category')}</div>
      <h3>${pick(i,'title')}</h3>
      <div class="baris"><div class="lbl">${T.recDeskripsi[lang]}</div><div class="nilai">${pick(i,'desc')}</div></div>
      <div class="baris"><div class="lbl">${T.recTarikh[lang]}</div><div class="nilai">${i.tarikh} · ${i.lokasi}</div></div>
      <div class="baris"><div class="lbl">${T.recMakna[lang]}</div><div class="nilai">${pick(i,'makna')}</div>${tambahan}</div>
      <div class="baris"><div class="lbl">${T.recInforman[lang]}</div><div class="nilai">${i.informan}</div></div>
      <div class="baris"><div class="lbl">${T.recEtika[lang]}</div><div class="nilai">${pick(i,'etika')}</div></div>
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
    return `<div class="entri"><div class="no">${String(n+1).padStart(2,'0')}</div><h3>${pick(g,'symbol')}</h3><p>${pick(g,'desc')}</p><a href="katalog.html#${first}">${T.rujuk[lang]} ${g.source}</a></div>`;
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
  if(e.target.closest('.lang')){ lang = lang === 'ms' ? 'en' : 'ms'; try { localStorage.setItem('nasiRasulLang', lang); } catch(err){} applyLang(); return; }
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
