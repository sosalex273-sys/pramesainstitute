export interface Publication {
  id: number;
  badge: string;
  subBadge: string;
  type: "international" | "sinta2" | "sinta3" | "sinta4" | "sinta5" | "issn";
  title: string;
  description: string;
  link: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    badge: "INTERNASIONAL",
    subBadge: "Terindeks Global",
    type: "international",
    title: "PUBLIKASI JURNAL INTERNASIONAL TERINDEKS GLOBAL",
    description:
      "Selamat dan apresiasi atas keberhasilan publikasi artikel ilmiah pada Jurnal Internasional Terindeks Global. Pencapaian ini merupakan langkah membanggakan dalam memperluas kontribusi akademik serta meningkatkan eksistensi penelitian di tingkat internasional.",
    link: "https://endless-journal.com/index.php/endless/article/view/379"
  },
  {
    id: 2,
    badge: "SINTA 4",
    subBadge: "Terakreditasi Nasional",
    type: "sinta4",
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
    description:
      "Selamat atas keberhasilan menerbitkan artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga pencapaian ini menjadi motivasi untuk terus menghasilkan penelitian yang berkualitas, inovatif, dan memberikan manfaat bagi pengembangan ilmu pengetahuan.",
    link: "https://influence-journal.com/index.php/influence/article/view/326"
  },
  {
    id: 3,
    badge: "BER-ISSN",
    subBadge: "Jurnal Nasional",
    type: "issn",
    title: "PUBLIKASI JURNAL NASIONAL BER-ISSN",
    description:
      "Selamat dan sukses atas terbitnya artikel ilmiah pada Jurnal Nasional ber-ISSN. Semoga publikasi ini menjadi bukti nyata dedikasi dalam dunia akademik serta memberikan kontribusi positif bagi perkembangan penelitian dan keilmuan.",
    link: "https://ejournal.goacademica.com/index.php/jk/article/view/1069"
  },
  {
    id: 4,
    badge: "SINTA 2",
    subBadge: "Terakreditasi Nasional",
    type: "sinta2",
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 2",
    description:
      "Sebuah pencapaian akademik yang patut dibanggakan! Selamat atas keberhasilan publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 2. Semoga prestasi ini semakin memperkuat rekam jejak akademik dan menjadi inspirasi untuk menghasilkan karya penelitian yang unggul.",
    link: "https://journal.staihubbulwathan.id/index.php/alishlah/article/view/4493"
  },
  {
    id: 5,
    badge: "SINTA 5",
    subBadge: "Terakreditasi Nasional",
    type: "sinta5",
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 5",
    description:
      "Selamat atas keberhasilan publikasi karya ilmiah pada Jurnal Nasional Terakreditasi SINTA 5. Semoga hasil penelitian ini dapat memperkaya khazanah keilmuan, menjadi referensi akademik, serta memberikan manfaat bagi masyarakat luas.",
    link: "https://idm.or.id/JSCR/index.php/JSCR/article/view/1641"
  },
  {
    id: 6,
    badge: "SINTA 3",
    subBadge: "Terakreditasi Nasional",
    type: "sinta3",
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 3",
    description:
      "Apresiasi setinggi-tingginya atas pencapaian publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 3. Semoga keberhasilan ini menjadi langkah berkelanjutan dalam meningkatkan kualitas riset, produktivitas akademik, dan kontribusi terhadap pengembangan ilmu pengetahuan.",
    link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1539"
  },
  {
    id: 7,
    badge: "INTERNASIONAL",
    subBadge: "Terindeks Global",
    type: "international",
    title: "PUBLIKASI JURNAL INTERNASIONAL TERINDEKS GLOBAL",
    description:
      "Selamat dan sukses atas keberhasilan publikasi artikel ilmiah pada Jurnal Internasional Terindeks Global. Semoga pencapaian ini membuka peluang kolaborasi akademik yang lebih luas serta memperkuat kontribusi penelitian dalam skala internasional.",
    link: "https://endless-journal.com/index.php/endless/article/view/358"
  },
  {
    id: 8,
    badge: "SINTA 4",
    subBadge: "Terakreditasi Nasional",
    type: "sinta4",
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
    description:
      "Selamat dan sukses atas diterbitkannya artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Pencapaian ini merupakan bentuk komitmen dan konsistensi dalam menghasilkan karya ilmiah yang bermutu serta bermanfaat bagi pengembangan akademik.",
    link: "https://ejournal.goacademica.com/index.php/ja/article/view/1207"
  },
  {
    id: 9,
    badge: "SINTA 5",
    subBadge: "Terakreditasi Nasional",
    type: "sinta5",
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 5",
    description:
      "Selamat atas pencapaian publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 5. Semoga karya yang telah diterbitkan dapat memberikan perspektif baru, memperluas wawasan keilmuan, dan menjadi landasan bagi penelitian selanjutnya.",
    link: "https://idm.or.id/JSCR/index.php/JSCR/article/view/1724"
  },
  {
    id: 10,
    badge: "SINTA 4",
    subBadge: "Terakreditasi Nasional",
    type: "sinta4",
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
    description:
      "Selamat dan penghargaan atas keberhasilan publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga prestasi ini menjadi momentum untuk terus berinovasi, meningkatkan kualitas penelitian, serta memberikan kontribusi nyata bagi kemajuan ilmu pengetahuan.",
    link: "https://ejournal.goacademica.com/index.php/ja/article/view/2104"
  }
];

