import Profiledata from './profile.json';

document.title = "Profile Page" + Profiledata.firstName + " " + Profiledata.lastName;

window.onload = function renderLinks() {
    const avatarImage = document.getElementById("avatar_image");
    const firstName = document.querySelector(".first_name");
    const lastName = document.querySelector(".last_name");
    const description = document.querySelector(".card_description");

    avatarImage.src = Profiledata.avatar;
    firstName.innerText = `${Profiledata.firstName} ${Profiledata.lastName}`;
    description.innerText = Profiledata.description;

    const link01 = document.querySelector(".link01");
    const link02 = document.querySelector(".link02");
    const link03 = document.querySelector(".link03");
    const link04 = document.querySelector(".link04");

    link01.innerText = Profiledata.Links[0].text
    link02.innerText = Profiledata.Links[1].text
    link03.innerText = Profiledata.Links[2].text
    link04.innerText = Profiledata.Links[3].text
    link01.href = Profiledata.Links[0].href;
    link02.href = Profiledata.Links[1].href;
    link03.href = Profiledata.Links[2].href;
    link04.href = Profiledata.Links[3].href;

    const social01 = document.querySelector(".social01");
    const social02 = document.querySelector(".social02");
    const social03 = document.querySelector(".social03");

    social01.href = Profiledata.socialLinks[0].href
    social02.href = Profiledata.socialLinks[1].href
    social03.href = Profiledata.socialLinks[2].href

    const socialIcon01 = document.querySelector(".socialIcon01");
    const socialIcon02 = document.querySelector(".socialIcon02");
    const socialIcon03 = document.querySelector(".socialIcon03");
    socialIcon01.src = Profiledata.socialLinks[0].icon
    socialIcon02.src = Profiledata.socialLinks[1].icon
    socialIcon03.src = Profiledata.socialLinks[2].icon

    socialIcon01.alt = Profiledata.socialLinks[0].text
    socialIcon02.alt = Profiledata.socialLinks[1].text
    socialIcon03.alt = Profiledata.socialLinks[2].text
}   