const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticles(title) {
    return title.replace(/^(a |an |the )/i, '');
}

bands.sort((a, b) => {
    const titleA = removeArticles(a);
    const titleB = removeArticles(b);
    return titleA.localeCompare(titleB);
});

const bandList = document.getElementById('band');
bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticles(title) {
    return title.replace(/^(a |an |the )/i, '');
}

bands.sort((a, b) => {
    const titleA = removeArticles(a);
    const titleB = removeArticles(b);
    return titleA.localeCompare(titleB);
});

const bandList = document.getElementById('band');
bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});