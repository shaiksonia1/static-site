const products = [
    { id: 1, name: "Laptop", price: "$1000", description: "High-performance laptop", image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craigmdennis-205421.jpg&fm=jpg" },
    { id: 2, name: "Smartphone", price: "$700", description: "Latest model smartphone", image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg" },
    { id: 3, name: "Headphones", price: "$150", description: "Noise-cancelling headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "Smartwatch", price: "$200", description: "Feature-rich smartwatch", image: "https://m.media-amazon.com/images/I/712YIFdUHLL.jpg" },
    { id: 5, name: "Tablet", price: "$300", description: "Lightweight tablet", image: "https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg" },
    { id: 6, name: "Camera", price: "$500", description: "High-resolution camera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_wmQuZjQoP1IAWVdDiYAOwD2zMQGibjb5Q&s" },
    { id: 7, name: "Printer", price: "$250", description: "Wireless printer", image: "https://in.canon/media/image/2024/08/21/cc59df256446411da3db8ec6c5307232_G4X70_~2.jpg" },
    { id: 8, name: "Monitor", price: "$400", description: "4K Ultra HD monitor", image: "https://mdcomputers.lk/wp-content/uploads/2023/08/b6293f98-1e11-4a4a-b640-856461190e5b.jpg" },
    { id: 10, name: "Mouse", price: "$30", description: "Ergonomic wireless mouse", image: "https://www.portronics.com/cdn/shop/products/Toad_13_1200x1200_1_7cb991ad-02a6-4c03-8d74-3795f112dc8d.jpg?v=1647439819" },
    { id: 11, name: "Gaming Console", price: "$500", description: "Latest gaming console", image: "https://t4.ftcdn.net/jpg/02/00/53/33/360_F_200533351_xwFkL7ydBNwbMNpVHQV0qz9zQIIsFXW2.jpg" },
    { id: 12, name: "Router", price: "$100", description: "High-speed router", image: "https://www.lifewire.com/thmb/l-s2qLLInBVfIl6AokC7Zi7Jqqk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/71qNsDlUZL._SL1500_-db9624bf30494933b4d2279b89ea19ef.jpg" },
    { id: 13, name: "External Hard Drive", price: "$120", description: "1TB external hard drive", image: "https://st.depositphotos.com/1008960/4874/i/450/depositphotos_48748285-stock-photo-usb-hard-drive.jpg" },
    { id: 14, name: "Power Bank", price: "$40", description: "Fast-charging power bank", image: "https://4.imimg.com/data4/UF/EM/MY-22957092/10000mah-power-bank-500x500.jpg" },
    { id: 15, name: "Bluetooth Speaker", price: "$70", description: "Portable Bluetooth speaker", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/speaker/u/q/i/-original-imagsbtckq3njtb2.jpeg?q=90&crop=false" },
    { id: 16, name: "Drone", price: "$800", description: "Professional camera drone", image: "https://cdn.mos.cms.futurecdn.net/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg" },
    { id: 17, name: "Projector", price: "$600", description: "Home theater projector", image: "https://m.media-amazon.com/images/I/718Msrt2xkL.jpg" },
    { id: 18, name: "Smart Home Hub", price: "$150", description: "Voice-controlled smart hub", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4TRNpZsV9jth5r_FQadplP_HysWSYg4Jig&s" },
    { id: 19, name: "Fitness Tracker", price: "$100", description: "Waterproof fitness tracker", image: "https://cdn.pixabay.com/photo/2021/11/03/05/33/fitness-band-6764739_1280.jpg" },
    { id: 20, name: "VR Headset", price: "$300", description: "Immersive VR experience", image: "https://t3.ftcdn.net/jpg/01/39/05/54/360_F_139055472_IOLmdHf01FG3udivfRybELaHoIuCUbtc.jpg" },
    { id: 22, name: "Laptop Stand", price: "$50", description: "Adjustable laptop stand", image: "https://media.wired.com/photos/65bd18df54e4c9ce4a1be572/master/w_320%2Cc_limit/Gear-Branch-laptop-stand-SOURCE-Branch.jpg" },



    
];


const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
function renderProducts(products) {
    productList.innerHTML = ""; // Clear current products
    if (products.length === 0) {
        productList.innerHTML = "<p>No products found</p>";
    } else {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <strong>${product.price}</strong>
                <button class="buy-now-btn" onclick="buyNow(${product.id})">Buy Now</button>
            `;
            productList.appendChild(productDiv);
        });
    }
}

function searchProducts(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery)
    );
    renderProducts(filteredProducts);
}

function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`You have selected the ${product.name} for ${product.price}. Proceed to checkout!`);
    } else {
        alert("Product not found.");
    }
}

// Event listener for search input
searchInput.addEventListener("input", (event) => {
    searchProducts(event.target.value);
});

// Initial render
renderProducts(products);
