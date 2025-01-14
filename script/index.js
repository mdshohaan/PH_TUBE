
function getTime(time){
    // get hour rest second
    const hour = parseInt(time/3600)
    let remainingSecond = time % 3600
    const minute = parseInt(remainingSecond / 60)
    remainingSecond = remainingSecond % 60
    return `${hour} hour ${minute} minute  ${remainingSecond} second ago`
}
//* 1. fetch,load and show category
// create loadCategory
const loadCategory = () => {
  console.log("loadcategory");
  // fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
const loadVideos = () => {
  // fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayvideos(data.videos))
    .catch((error) => console.log(error));
};
const loadCategoryVideos =(id) =>{
    // alert(id)
     // fetch data
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then((res) => res.json())
  .then((data) => displayvideos(data.category))
  .catch((error) => console.log(error));

}
// const cardDemo = {
//   category_id: "1001",
//   video_id: "aaad",
//   thumbnail: "https://i.ibb.co/f9FBQwz/smells.jpg",
//   title: "Smells Like Teen Spirit",
//   authors: [
//     {
//       profile_picture: "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//       profile_name: "Oliver Harris",
//       verified: true,
//     },
//   ],
//   others: {
//     views: "5.4K",
//     posted_date: "1672656000",
//   },
//   description:
//     "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances.",
// };

const displayvideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML =""

if(videos.length == 0){
    videoContainer.classList.remove('grid')
     videoContainer.innerHTML =`
     <div class = "min-h-[300px] w-full flex flex-col gap-5 justify-centern items-center">
     <img src = "assets/Icon.png"/>
     <h2 class = "text-center text-xl font-bold">
     No Content Here in this Category
     </h2>
     </div>
     `
     return
} else{
    videoContainer.classList.add('grid')
}

  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = `card card-compact `;
    card.innerHTML = `
 <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class ="h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class="absolute right-2 text-xs bottom-2 bg-black rounded p-1 text-white">${getTime(video.others.posted_date)}</span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
   <div>
   <img class="w-10 h-10 rounded-full object-cover" src =${
     video.authors[0].profile_picture
   }  />
   </div>
   <div>
   <h2 class = "font-bold">${video.title} </h2>
     <div class ="flex gap-2 items-center">  
        <p class="text-gray-400">${video.authors[0].profile_name}</p>

        ${
          video.authors[0].verified === true
            ? ` <img class="w-5" src = "https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>`
            : ""
        }
       
     </div>
   <p></p>
   <p></p>
   </div>
    </div>
  </div>
`;
    videoContainer.append(card);
  });
};
// display categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    console.log(item);
    // create btn
    const buttonContainer = document.createElement("div");
   buttonContainer.innerHTML = `
   <button onclick ="loadCategoryVideos(${item.category_id})" class="btn">
   ${item.category}
   </button
   `

    // add btn to category container
    categoryContainer.append(buttonContainer);
  });
};
loadCategory();
loadVideos();
