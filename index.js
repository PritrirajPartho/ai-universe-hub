const dataLoad = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayDetails(data.data.tools));
}
dataLoad();

const displayDetails = openapis =>{
//    console.log(openapis);
   const apisContiner = document.getElementById('apis-container');
   openapis.forEach(openapi => {
         console.log(openapi);
        const apiDiv = document.createElement('div');
        apiDiv.classList.add('api-div');
        apiDiv.innerHTML = `
                <img src="${openapi.image}" class="card-img-top" alt="...">
                <div class="card-body mt-3 mb-2">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">
                        1.${openapi.features[0]} <br>
                        2.${openapi.features[1]} <br>
                        3.${openapi.features[2]} <br>
                    </p>
                </div>
                <div class="card-footer">
                     <div> 
                         <h5 class="card-title">${openapi.name}</h5>
                         <p class="card-text">
                          Release:- 
                              ${openapi.published_in}
                         </p>                     
                     </div>
                     <div>
                         <button type="button" class="btn btn-arrow mt-3" data-bs-toggle="modal" data-bs-target="#api-modal">
                              ➜
                         </button>
                    </div>
                </div>
        `
        apisContiner.appendChild(apiDiv);
   })
}