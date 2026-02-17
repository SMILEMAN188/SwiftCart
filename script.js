fetch("https://fakestoreapi.com/products/categories")
.then((res) => res.json())
.then((data) => Categories(data));

function Categories(data) {
    const categoryContainer = document.getElementById("category-container");
    data.forEach((category) => {
        const categoryElement = document.createElement("button");
        categoryElement.textContent = category;
        categoryElement.classList.add("btn","btn-soft", "btn-primary", "capitalize", "snap-center");
        categoryContainer.appendChild(categoryElement);
    });
}