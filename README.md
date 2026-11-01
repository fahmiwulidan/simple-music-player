<div align="center">

  <h1>Simple Music Player</h1>
  <p><b>Aplikasi Pemutar Musik & Lirik Lagu Berbasis Web</b></p>

  [![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://simple-music-player-seven.vercel.app)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

  <br />

  [Demo Aplikasi](https://simple-music-player-seven.vercel.app) •
  [Laporkan Bug](https://github.com/fahmiwulidan/simple-music-player/issues) •
  [Minta Fitur](https://github.com/fahmiwulidan/simple-music-player/issues)

</div>

---

## Ringkasan Proyek

**Simple Music Player** adalah aplikasi pemutar audio berbasis web interaktif yang memungkinkan pengguna untuk memutar lagu, mengontrol pemutaran (*playback*), serta melihat lirik lagu secara langsung. Aplikasi ini dirancang dengan antarmuka yang bersih, intuitif, dan responsif.

> [!NOTE]
> Proyek ini dibangun menggunakan *pure client-side web technology* (HTML, CSS, Vanilla JS) tanpa *framework* luar dan di-deploy secara publik menggunakan platform **Vercel**.

---

## Teknologi Utama

| Layer | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Structure** | HTML5 | Semantik markup untuk pemutar audio & halaman lirik (`index.html` & `lyrics.html`) |
| **Styling** | CSS3 | Antarmuka pemutar musik modern, kontrol audio visual, & layout responsif |
| **Logic** | JavaScript (ES6+) | Kontrol pemutaran audio (play/pause/navigation) & interaktivitas DOM |
| **Deployment** | Vercel | Infrastructure hosting statis dengan integrasi CI/CD instan |

---

## Fitur Unggulan

- **Pemutar Audio Interaktif** — Kontrol *play*, *pause*, lagu sebelum (*previous*), dan lagu selanjutnya (*next*).
- **Integrasi Lirik Lagu** — Halaman khusus (`lyrics.html`) untuk menampilkan teks lirik lagu lengkap.
- **Visual Album Art & Metadata** — Tampilan sampul album (*cover art*) beserta judul lagu dan artis yang elegan.
- **Performa Ringan (Zero Dependency)** — Akses instan tanpa ketergantungan library/framework eksternal.
- **Tampilan Responsif** — Antarmuka yang nyaman diakses melalui perangkat seluler maupun komputer desktop.

---

## Struktur Direktori

```text
simple-music-player/
├── images/           # Aset gambar & sampul album lagu
├── music/            # Berkas audio lagu (.mp3 / .wav)
├── index.html        # Halaman utama pemutar musik
├── lyrics.html       # Halaman tampilan lirik lagu lengkap
├── main.js           # Logika pemrosesan audio & kontrol navigasi
├── style.css         # Styling antarmuka pemutar & tata letak
└── README.md         # Dokumentasi utama repositori
```

---

<div align="center">
  <sub>Dikembangkan dengan ❤️ oleh <a href="https://github.com/fahmiwulidan">Fahmi Wulidan</a></sub>
</div>
