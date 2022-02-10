// INFO CAPTURADA DESDE EL CONTENTFUL 
function addServicesCard(info){
    
   
    const templateServicesCard = document.querySelector("#services__card__template");
    const servicesContainerCards = document.querySelector(".services__container");

    templateServicesCard.content.querySelector(".services-container__card__title").textContent = info.title;
    templateServicesCard.content.querySelector(".services-container__card__description").textContent = info.description;
    templateServicesCard.content.querySelector(".services-container__card__img").src = info.image;
    
    
 

    const clone = document.importNode(templateServicesCard.content, true);
    servicesContainerCards.appendChild(clone);

}

function getContentfulServices(){
    return  fetch("https://cdn.contentful.com/spaces/pr3s1ye3hcsz/environments/master/entries?access_token=oNT7aGiq0Yqd_Omd5GSZPmtIPpUNsU-fif8K9pHgfFA&content_type=servicios")
    .then((info)=>{return info.json()})
    .then((info)=>{
        
        
        const fieldsCollectionServices = info.items.map((item)=>{
         
        return {
            title: item.fields.title,
            description: item.fields.description,
            imageID: item.fields.image.sys.id,
            includes: info.includes.Asset
        }
    })

    fieldsCollectionServices.forEach((item)=>{
       
        const id = searchAsset(item.imageID, item.includes);
        item.image = "https:" + id.fields.file.url;
        
    })
   return fieldsCollectionServices;
   
    })
}

function searchAsset(imageID, includes) {
	const located = includes.find((x) => {
		return x.sys.id == imageID;
	});

	return located;
}



function main (){
    // Header - Footer Components

    const headerElServices = document.querySelector(".header");
    headerComponent(headerElServices);

    const footerElServices = document.querySelector(".footer");
    footerComponent(footerElServices);

// Services Contentful
    getContentfulServices().then((services)=>{
       for (const s of services){
            addServicesCard(s);
        }
    })

}
 main();





