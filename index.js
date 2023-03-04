const dataLoading = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayDetails(data.data.tools));
}
dataLoading();

/*step----2*/
const displayDetails = openapis =>{
    //console.log(openapis);
    const apisContainer = document.getElementById('apis-container');
    openapis.forEach(openapi => {
        //  console.log(openapi);
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
                         <button onclick="loadApiDetail('${openapi.id}')"  type="button" class="btn btn-arrow mt-3" data-bs-toggle="modal" data-bs-target="#api-modal">
                              ➜
                         </button>
                    </div>
                </div>
        `
        apisContainer.appendChild(apiDiv);
   })
}

/* id onujaye details dekanu */
const loadApiDetail = apiId =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${apiId}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => OpenApiDetails(data.data))
}

/* display single api details....*/
const OpenApiDetails = api =>{
    console.log(api);
    document.getElementById('api-description').innerText = api.description;
    // pricing
    document.getElementById('price-1').innerText = api.pricing[0].plan + api.pricing[0].price;
    document.getElementById('price-2').innerText = api.pricing[1].plan + api.pricing[1].price;
    document.getElementById('price-3').innerText = api.pricing[2].plan + api.pricing[2].price;
    // features
    console.log(api.features)
    document.getElementById('features-1').innerText = api.features["1"].feature_name;
    document.getElementById('features-2').innerText = api.features["2"].feature_name;
    document.getElementById('features-3').innerText = api.features["3"].feature_name;
}
