// Données des produits
const products = [
    {
        id: 1,
        name: "Smartphone XYZ",
        description: "Smartphone haut de gamme avec appareil photo avancé et batterie longue durée.",
        price: "120 000 FCFA",
        originalPrice: "150 000 FCFA",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics",
        badge: "Promo"
    },
    {
        id: 2,
        name: "Robe Élégante",
        description: "Robe moderne et élégante pour toutes occasions spéciales.",
        price: "45 000 FCFA",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion"
    },
    {
        id: 3,
        name: "Set de Cuisine",
        description: "Ensemble complet d'ustensiles de cuisine de qualité professionnelle.",
        price: "85 000 FCFA",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home"
    },
    {
        id: 4,
        name: "Écouteurs Sans Fil",
        description: "Écouteurs Bluetooth avec annulation de bruit et autonomie prolongée.",
        price: "65 000 FCFA",
        originalPrice: "80 000 FCFA",
        image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics",
        badge: "Nouveau"
    },
    {
        id: 5,
        name: "Sac à Main",
        description: "Sac tendance fait de matériaux durables et écologiques.",
        price: "35 000 FCFA",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion"
    },
    {
        id: 6,
        name: "Décor Murale",
        description: "Ensemble de trois tableaux modernes pour embellir votre intérieur.",
        price: "28 000 FCFA",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home"
    },
    {
        id: 7,
        name: "Montre Connectée",
        description: "Montre intelligente avec suivi de la santé et notifications.",
        price: "75 000 FCFA",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics"
    },
    {
        id: 8,
        name: "Chaussures de Sport",
        description: "Chaussures confortables et stylées pour vos activités sportives.",
        price: "55 000 FCFA",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion",
        badge: "Populaire"
    }
];

// Données des témoignages
const testimonials = [
    {
        id: 1,
        text: "J'ai commandé un smartphone et je suis très satisfait de la qualité. Livraison rapide et produit conforme à la description.",
        author: "Ahmat Mahamat",
        position: "Client",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        text: "Service client exceptionnel ! J'ai eu un problème avec ma commande et tout a été résolu rapidement et professionnellement.",
        author: "Aïcha Ousmane",
        position: "Client satisfait",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        text: "Les produits sont de très bonne qualité et les prix sont imbattables. Je recommande vivement AMOU COMMERCE DIGITALE !",
        author: "Fatime Hassan",
        position: "Fidèle cliente",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

// Données des articles de blog
const blogPosts = [
    {
        id: 1,
        title: "Comment bien choisir ses produits en ligne",
        excerpt: "Découvrez nos conseils pour faire les bons choix lors de vos achats en ligne.",
        date: "15 Juin 2023",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Les avantages du commerce en ligne",
        excerpt: "Pourquoi acheter en ligne devient de plus en plus populaire.",
        date: "8 Juin 2023",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Mode éthique et durable",
        excerpt: "Comment nous sélectionnons nos produits de mode respectueux de l'environnement.",
        date: "1 Juin 2023",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

// Panier d'achat
let cart = [];
let cartCount = 0;

// Charger les produits
function loadProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    const filteredProducts = activeCategory === 'all' 
        ? products 
        : products.filter(product => product.category === activeCategory);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                    ${product.price}
                </div>
                <button class="btn add-to-cart" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Ajouter les événements pour les boutons "Ajouter au panier"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Filtrer les produits par catégorie
function setupCategoryFilters() {
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            loadProducts();
        });
    });
}

// Ajouter au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        cartCount++;
        updateCartCount();
        
        // Afficher une notification
        showNotification(`${product.name} a été ajouté au panier`);
    }
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--secondary)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = 'var(--shadow)';
    notification.style.zIndex = '1000';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Charger les témoignages
function loadTestimonials() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial-card');
        
        testimonialCard.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.author}" class="author-img">
                <div>
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.position}</p>
                </div>
            </div>
        `;
        
        testimonialGrid.appendChild(testimonialCard);
    });
}

// Charger les articles de blog
function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-img">
            <div class="blog-info">
                <p class="blog-date">${post.date}</p>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="btn">Lire plus</a>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
}

// Gérer le formulaire de contact
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Ici, vous pourriez envoyer les données à un serveur
        // Pour cet exemple, nous allons simplement afficher une alerte
        alert(`Merci ${name} pour votre message! Nous vous répondrons bientôt à ${email}.`);
        
        // Réinitialiser le formulaire
        contactForm.reset();
    });
}

// Menu mobile
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadTestimonials();
    loadBlogPosts();
    setupCategoryFilters();
    setupContactForm();
    setupMobileMenu();
    updateCartCount();
});