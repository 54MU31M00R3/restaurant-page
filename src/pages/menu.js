import greenTeaUrl from '../assets/images/green_gelato.jpg';
import milkTeaUrl from '../assets/images/milk_tea_gelato.jpeg';

const menuPage = (function () {
    let gelato = [
        {
            flavour: "GREEN TEA",
            price: "$5",
            ingredients: "Infused with matcha green tea",
            image: greenTeaUrl,
        },
        {
            flavour: "MILK TEA + BOBA",
            price: "$7",
            ingredients: "Infused with loose-leaf black tea",
            image: milkTeaUrl,
        },
    ]

    const getHeadline = () => {
        const headline = document.createElement("div");
        headline.id = "headline";
        headline.textContent = "Gelato Flavours";
        return headline;
    }

    const getMenu = () => {
        const menu = document.createElement("div");
        menu.id = "menu-container";

        gelato.forEach((item) => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item"
            menu.appendChild(menuItem);

            const itemDesc = document.createElement("div");
            itemDesc.className = "item-desc";
            menuItem.appendChild(itemDesc);

            const itemHeader = document.createElement("div");
            itemHeader.className = "item-header";
            itemDesc.appendChild(itemHeader);

            const itemName = document.createElement("div");
            itemName.className = "item-name";
            itemName.textContent = item.flavour;
            itemHeader.appendChild(itemName);

            const itemPrice = document.createElement("div");
            itemPrice.className = "item-price";
            itemPrice.textContent = item.price;
            itemHeader.appendChild(itemPrice);

            const itemIngredients = document.createElement("div");
            itemIngredients.className = "item-ingredients";
            itemIngredients.textContent = item.ingredients;
            itemDesc.appendChild(itemIngredients);

            const itemImage = document.createElement("img");
            itemImage.className = "item-image"
            itemImage.src = item.image;
            menuItem.appendChild(itemImage);

            menu.appendChild(menuItem);
        });
        return menu;
    }
    const getPage = () => {
        const page = document.createElement("div");
        page.id = "content";

        const headline = getHeadline();
        page.appendChild(headline);

        const menu = getMenu();
        page.appendChild(menu);

        return page;
    }

    return { getPage };
})();

export { menuPage };