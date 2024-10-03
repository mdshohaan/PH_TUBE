//* 1. fetch,load and show category
// create loadCategory
const loadCategory = () => {
    console.log('loadcategory');
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}
// display categories
const displayCategories = (categories) => {
const categoryContainer = document.getElementById('categories')

categories.forEach(item => {
    console.log(item);
    // create btn
    const button = document.createElement('button')
    button.classList = 'btn'
    button.innerText = item.category;

    // add btn to category container
    categoryContainer.append(button)
});

}
loadCategory()
