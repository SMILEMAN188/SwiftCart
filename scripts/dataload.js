
fetch("https://fakestoreapi.com/products/categories")
.then((res) => res.json())
.then((data) => Categories(data));

function Categories(data) {
    const categoryContainer = document.getElementById("category-container");
    data.forEach((category) => {
        const categoryElement = document.createElement("button");
        categoryElement.textContent = category;
        categoryElement.classList.add("btn","btn-soft", "btn-primary", "capitalize", "snap-center");

        categoryElement.onclick = function () {
            loadCategoryProducts(category);
        };

        categoryContainer.appendChild(categoryElement);
    });
}

function allProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => Products(data));
}

window.onload = allProducts;


function Products(data) {
    const productsContainer = document.getElementById("products-container");
     productsContainer.innerHTML = "";
    data.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("card", "w-64", "bg-base-100", "shadow-xl", "mx-2", "my-4");
        productElement.innerHTML = `
    <div class="bg-[#e5e7eb] px-4 py-3 rounded-t-lg h-52 flex items-center justify-center">
        <img src="${product.image}" alt="${product.title}" class="h-full object-contain">
    </div>

    <div class="card-body flex flex-col">
        
        <div class="flex flex-row items-center justify-between">
            <div class="rounded bg-[#e0e7ff] text-[#4f39f6] px-2 py-1 text-sm">
                ${product.category}
            </div>

            <div class="flex flex-row items-center justify-center gap-2">
                <div class="badge badge-primary badge-outline">
                    ${product.rating.rate}
                </div>
                <div class="text-sm text-gray-500">
                    (${product.rating.count})
                </div>
            </div>
        </div>
        
        <h2 class="card-title text-sm line-clamp-2">
            ${product.title}
        </h2>

        <p class="text-lg font-bold">
            $${product.price}
        </p>

        <div class="mt-auto flex flex-row items-center justify-between">
            <button class="btn btn-ghost btn-sm shadow-xl">
                Details
            </button>
            <button class="btn btn-primary btn-sm">
                Add to Cart
            </button>
        </div>
    </div>
`;

        productsContainer.appendChild(productElement);
    });
}


