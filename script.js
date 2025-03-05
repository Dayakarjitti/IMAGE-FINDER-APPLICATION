let api_key="m2cQ2Bnqzw9fmKz_F1uc2kJKH_xcNnHGi1_I4L8s6iQ"
let search_icon=document.getElementById('search-icon');

search_icon.addEventListener('click',()=>{
    let search = document.getElementById('search').value
    let fetchData=async()=>{
    let info =await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${api_key}`)
    let res= await info.json()
    let img_container=document.getElementById("img_container")
    img_container.innerHTML=""
    for(let i=0;i<res.results.length;i++){
        img_container.innerHTML+=`
        <img src=${res.results[i].urls.regular} class='images'>
        `
    }


    }
    fetchData();
})