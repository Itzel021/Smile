document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('#product-list .card');
    products.forEach(product => {
      const title = product.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(query)) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  });