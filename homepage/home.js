document.addEventListener('DOMContentLoaded', () => {
  // Data for Hero floating cards
  const heroFloats = [
    {
      position: 'left',
      img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600&auto=format&fit=crop',
      alt: 'Fufu and Kati Kati',
      title: 'Fufu and Kati Kati',
      stars: '★★★★☆',
      price: '3000frs'
    },
    {
      position: 'right',
      img: 'https://images.unsplash.com/photo-1604908554007-5f19a1b7a5f0?q=80&w=600&auto=format&fit=crop',
      alt: 'Ndole and Plantain',
      title: 'Ndole and Plantain',
      stars: '★★★★☆',
      price: '3000frs'
    }
  ];

  const heroMedia = document.querySelector('.hero__media');
  heroFloats.forEach(float => {
    const card = document.createElement('div');
    card.classList.add('float-card', float.position);
    card.innerHTML = `
      <img src="${float.img}" alt="${float.alt}" />
      <div class="fc-body">
        <p class="fc-title">${float.title}</p>
        <div class="fc-meta">
          <span class="stars">${float.stars}</span>
          <span class="price">${float.price}</span>
        </div>
      </div>
    `;
    heroMedia.appendChild(card);
  });

  // Data for Popular Food Categories
  const categories = [
    {
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop',
      alt: 'Fufu and Kati Kati',
      title: 'Fufu and Kati Kati',
      price: '3000frs'
    },
    {
      img: 'https://images.unsplash.com/photo-1604908176997-431f7090774f?q=80&w=600&auto=format&fit=crop',
      alt: 'Egussi and Bobolo',
      title: 'Egussi and Bobolo',
      price: '3000frs'
    },
    {
      img: 'https://images.unsplash.com/photo-1611765083444-a44f6a8b5e64?q=80&w=600&auto=format&fit=crop',
      alt: 'Corn Chaff',
      title: 'Corn Chaff',
      price: '3000frs'
    },
    {
      img: 'https://images.unsplash.com/photo-1544025162-8c1f1a9bcdbe?q=80&w=600&auto=format&fit=crop',
      alt: 'Garri and Eru',
      title: 'Garri and Eru',
      price: '3000frs'
    }
  ];

  const pillGrid = document.querySelector('.pill-grid');
  categories.forEach(cat => {
    const card = document.createElement('article');
    card.classList.add('cat-card');
    card.innerHTML = `
      <div class="cat-thumb">
        <img src="${cat.img}" alt="${cat.alt}" />
      </div>
      <h3>${cat.title}</h3>
      <p class="cat-price">${cat.price}</p>
    `;
    pillGrid.appendChild(card);
  });

  // Data for Special Dishes
  const dishes = [
    {
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop',
      alt: 'Fufu Corn and Kati Kati',
      title: 'Fufu Corn and Kati Kati',
      from: 'Romz',
      loc: 'Mile 3 Nkwen',
      price: '3000frs',
      rating: '4.9'
    },
    {
      img: 'https://images.unsplash.com/photo-1604908554311-9c6ad119258b?q=80&w=1200&auto=format&fit=crop',
      alt: 'Achu and Yellow Soup',
      title: 'Achu and Yellow Soup',
      from: 'Dream Land',
      loc: 'Mile 2 Nkwen',
      price: '3000frs',
      rating: '4.6'
    },
    {
      img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop',
      alt: 'Roasted Fish',
      title: 'Roasted Fish',
      from: 'Plush House',
      loc: 'Up-Station',
      price: '10000frs',
      rating: '4.5'
    }
  ];

  const cardRow = document.querySelector('.card-row');
  dishes.forEach(dish => {
    const card = document.createElement('article');
    card.classList.add('dish-card');
    card.innerHTML = `
      <div class="dish-media">
        <img src="${dish.img}" alt="${dish.alt}" />
      </div>
      <div class="dish-body">
        <h3>${dish.title}</h3>
        <p class="sub">From <strong>${dish.from}</strong> &nbsp;•&nbsp; <span class="loc">${dish.loc}</span></p>
        <div class="dish-meta">
          <span class="price">${dish.price}</span>
          <span class="rating">★ ${dish.rating}</span>
        </div>
      </div>
    `;
    cardRow.appendChild(card);
  });

  // Data for Special Restaurants
  const restaurants = [
    {
      title: 'Romz',
      loc: 'Mile 3 Nkwen',
      blurb: 'A cozy classic restaurant just opposite Town’s Eye, Mile 3 Nkwen.',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop',
      alt: 'Signature dish'
    },
    {
      title: 'Dream Land',
      loc: 'Mile 3 Nkwen',
      blurb: 'A cozy classic restaurant just opposite Town’s Eye, Mile 3 Nkwen.',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600&auto=format&fit=crop',
      alt: 'Signature dish'
    },
    {
      title: 'Mami KoKI',
      loc: 'Mile 3 Nkwen',
      blurb: 'A cozy classic restaurant just opposite Town’s Eye, Mile 3 Nkwen.',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1544025162-8c1f1a9bcdbe?q=80&w=600&auto=format&fit=crop',
      alt: 'Signature dish'
    },
    {
      title: 'Troys Eatery',
      loc: 'Mile 3 Nkwen',
      blurb: 'A cozy classic restaurant just opposite Town’s Eye, Mile 3 Nkwen.',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop',
      alt: 'Signature dish'
    },
    {
      title: 'Plush House',
      loc: 'Up-Station',
      blurb: 'A cozy classic restaurant just opposite Town’s Eye, Mile 3 Nkwen.',
      rating: '4.5',
      img: 'https://images.unsplash.com/photo-1604908176997-431f7090774f?q=80&w=600&auto=format&fit=crop',
      alt: 'Signature dish'
    },
    {
      title: 'Laliga',
      loc: 'Mile 3 Nkwen',
      blurb: 'A cozy classic restaurant just opposite Town’s Eye, Mile 3 Nkwen.',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1611765083444-a44f6a8b5e64?q=80&w=600&auto=format&fit=crop',
      alt: 'Signature dish'
    }
  ];

  const restoGrid = document.querySelector('.resto-grid');
  restaurants.forEach(resto => {
    const item = document.createElement('article');
    item.classList.add('resto-item');
    item.innerHTML = `
      <div class="resto-info">
        <h3>${resto.title}</h3>
        <p class="loc">${resto.loc}</p>
        <p class="blurb">${resto.blurb}</p>
        <div class="resto-meta">
          <span class="rating">★ ${resto.rating}</span>
          <a href="#" class="view-link">View Dishes</a>
        </div>
      </div>
      <div class="resto-media">
        <img src="${resto.img}" alt="${resto.alt}" />
      </div>
    `;
    restoGrid.appendChild(item);
  });

  // Data for Testimonials
  const testimonials = [
    {
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop',
      alt: 'Mariam',
      name: 'Mariam',
      text: '“I had the pleasure of dining at Foodi last night, and I’m still raving about the experience! The attention to detail in presentation and service was impeccable”'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
      alt: 'Mariam',
      name: 'Mariam',
      text: '“I had the pleasure of dining at Foodi last night, and I’m still raving about the experience! The attention to detail in presentation and service was impeccable”'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop',
      alt: 'Mariam',
      name: 'Mariam',
      text: '“I had the pleasure of dining at Foodi last night, and I’m still raving about the experience! The attention to detail in presentation and service was impeccable”'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
      alt: 'Mariam',
      name: 'Mariam',
      text: '“I had the pleasure of dining at Foodi last night, and I’m still raving about the experience! The attention to detail in presentation and service was impeccable”'
    }
  ];

  const testiGrid = document.querySelector('.testi-grid');
  testimonials.forEach(testi => {
    const article = document.createElement('article');
    article.classList.add('testi');
    article.innerHTML = `
      <img class="avatar" src="${testi.avatar}" alt="${testi.alt}" />
      <div class="t-body">
        <h4>${testi.name}</h4>
        <p>${testi.text}</p>
      </div>
    `;
    testiGrid.appendChild(article);
  });
});