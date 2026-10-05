# Panduan Menerbitkan Artikel Legal Insight

Cara termudah: kirim naskah artikel ke Claude dan minta "terbitkan di website". Claude akan membuat file artikelnya dan mengunggahnya ke sini.

Jika ingin menerbitkan sendiri lewat github.com:

1. Buka folder `_posts`, klik **Add file → Create new file**.
2. Beri nama file dengan pola `TAHUN-BULAN-TANGGAL-judul-singkat.md`, misalnya `2026-10-14-tanda-awal-wanprestasi.md`. Bagian "judul-singkat" akan menjadi alamat artikel: `sagarastrategic.com/legal-insight/tanda-awal-wanprestasi/`.
3. Salin isi contoh di bawah, ganti teksnya, lalu klik **Commit changes**.
4. Tunggu sekitar 1–2 menit. Artikel otomatis muncul di halaman Legal Insight dan di beranda.

```
---
title: Judul Artikel
category: litigasi
description: Satu atau dua kalimat ringkasan yang tampil di daftar artikel.
tags: [wanprestasi, piutang]
---
Paragraf pertama artikel.

## Subjudul

Paragraf berikutnya. Teks **tebal** ditulis dengan dua bintang.

> Kalimat kutipan yang ingin ditonjolkan.

- Butir daftar
- Butir daftar
```

## Pilihan kategori (isi baris `category:`)

| Tulis ini | Tampil sebagai |
|---|---|
| `litigasi` | Litigasi & Sengketa Bisnis |
| `kepailitan-pkpu` | Kepailitan & PKPU |
| `kontrak` | Kontrak & Transaksi Bisnis |
| `arbitrase` | Arbitrase & Penyelesaian Alternatif |
| `kepatuhan` | Kepatuhan & Regulasi |
| `advisory` | General Legal Advisory |
| `sagara-insider` | Sagara Insider |

Penutup "Firm you can trust — Sagara Strategic Legal Advisory" dan catatan bahwa artikel bukan nasihat hukum ditambahkan otomatis di setiap artikel, sehingga tidak perlu ditulis ulang.
