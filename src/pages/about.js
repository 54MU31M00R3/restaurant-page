import gelatoBobaUrl from '../assets/images/gelato_and_tea.jpg';

const aboutPage = (function () {
    const getHeadline = () => {
        const headline = document.createElement("div");
        headline.id = "headline";
        headline.textContent = "Where did we go?";

        return headline;
    }

    const getAboutImage = () => {
        const aboutImage = document.createElement("img");
        aboutImage.id = "about-image";
        aboutImage.src = gelatoBobaUrl;

        return aboutImage
    }

    const getAboutDesc = () => {
        const aboutDesc = document.createElement("div");
        aboutDesc.id = "about-desc";
        aboutDesc.textContent = `After a cozy hiatus, our Asian infusion gelato and boba shop is
        back—just for the summer! Dive into handcrafted gelato with bold,
        nostalgic flavours like matcha, black sesame, and Thai tea, paired with
        refreshing boba drinks made fresh daily. A seasonal pop-up you won’t
        want to miss!`;

        return aboutDesc;
    }

    const getPage = () => {
        const page = document.createElement("div");
        page.id = "content" 

        const headline = getHeadline();
        page.appendChild(headline);

        const aboutImage = getAboutImage();
        page.appendChild(aboutImage);

        const aboutDesc = getAboutDesc();
        page.appendChild(aboutDesc);

        return page;
    }
    
    return { getPage };
})();

export { aboutPage };