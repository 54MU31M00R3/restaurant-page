import kekouIcePops from "../assets/images/kekou_ice_pops.jpeg";
import redGreenGelato from "../assets/images/red_and_green_ice_cream.webp";
import kekouStorefront from "../assets/images/kekou_storefront.webp";

const homePage = (function () {
    const page = document.createElement("div");
    page.id = "content";

    const getHeadline = () => {
        const headline = document.createElement("div");
        headline.id = "headline";
        headline.textContent = "Coming back better than ever!";
        return headline;
    }
    const getHomeImages = () => {
        const imageContainer = document.createElement("div");
        imageContainer.id = "image-container";

        const image1 = document.createElement("img");
        image1.src = kekouIcePops;
        image1.className = "cover-images";
        image1.alt="image of kekou_ice_pops";
        imageContainer.appendChild(image1);

        const image2 = document.createElement("img");
        image2.src = redGreenGelato;
        image2.className = "cover-images";
        image2.alt="image of red_and_green_ice_cream";
        imageContainer.appendChild(image2);

        const image3 = document.createElement("img");
        image3.src = kekouStorefront;
        image3.className = "cover-images";
        image3.alt="image of kekou_storefront";
        imageContainer.appendChild(image3);
        
        return imageContainer;
    }
    const getHomeDesc = () => {
        const homeDescription = document.createElement("div");
        homeDescription.id="desc";
        homeDescription.textContent="After a long hiatus we will be returning this Summer with some your old time favourites!!!";
    
        return homeDescription;
    }
    const getPage = () => {
        const headline = getHeadline();
        page.appendChild(headline);

        const images = getHomeImages();
        page.appendChild(images);

        const description = getHomeDesc();
        page.appendChild(description)

        return page;
    }
    return { getPage };
})();

export { homePage };