=============== LOGIN PAGE HOTSPOT MIKROTIK ===========

WIFICORNER 1.3
License : Free
Author : Agus Purnomo
Facebook url : https://www.facebook.com/nyess.id

=======================================================

- Simple design 
- Responsive template
- Halaman harga paket internet + signup form (paket.html)
- Notifikasi signup user lewat chat bot telegram
- Halaman terms of service (tos.html) 
- Halaman maintenance (maintenance.html)



# Konfigurasi bot telegram

1. Bagi yg belum punya bot telegram silahkan bikin dulu ya botnya, caranya bisa googling biar lebih mudah biasanya ada screenshot disana.

2. Skip, saya anggap Anda sudah punya TOKEN dan CHAT_ID bot telegram.

3. Edit file /js/signup.js dengan text editor kesayangan Anda.

4. Cari kode token = " "; dan chat_id =" "; isikan token dan chat_id Anda.

5. Save

6. Tambahkan walled garden api.telegram.org di hotspot mikrotik, buka terminal kemudian ketik/copy kode

   /ip hotspot walled-garden
   add action=allow disabled=no dst-host=api.telegram.org

7. Done!

Note : Fitur ini hanya untuk notifikasi saja, untuk menambahkan user di mikrotik silahkan input manual.



# Edit file 

1. Edit untuk ganti title, alamat, kontak di file :

/login.html
/status.html
/logout.html
/tos.html
/maintenance.html
/paket.html

2. Edit harga paket di file /paket.html , sesuaikan dengan harga paket layanan hotspot Anda.


3. Edit syarat & ketentuan di file /tos.html sesuaikan dengan aturan layanan hotspot Anda.


=====================================================

* DILARANG MEMPERJUAL BELIKAN TEMPLATE INI *




