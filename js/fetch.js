const scriptURL =
      'xxx'
    const form = document.forms['feedback-form']
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // ketika tombol submit diklik
      // tampilkan tombol loading, hilangkan tombol kirim
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        })
        .then((response) => {
          // tampilkan tombol kirim, hilangkan tombol loading
          btnLoading.classList.toggle('d-none');
          btnKirim.classList.toggle('d-none');
          // tampilkan alert
          myAlert.classList.toggle('d-none');
          // reset formnya
          Swal.fire({
              icon: 'success',
              title: 'Berhasil Dikirim !',
              text: 'Pesan Dikirim Ke Developer!',
              footer: '<a href="https://github.com/itsmebroarif">Info Developer?</a>'
            })
          form.reset();
          console.log('Success!', response);
        })
        .catch((error) => console.error('Error!', error.message));

    });