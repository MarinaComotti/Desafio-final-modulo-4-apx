// Presentation Contentful

function addPresentationCard(info){
    
    const templatePresentationCard = document.querySelector("#presentation__card__template");
    const presentationContainerCards = document.querySelector(".presentation");

    templatePresentationCard.content.querySelector(".presentation__container__title").textContent = info.title;
    templatePresentationCard.content.querySelector(".presentation__container__text").textContent = info.description;
    templatePresentationCard.content.querySelector(".presentation__img").src = info.image;
    const clone = document.importNode(templatePresentationCard.content, true);
    presentationContainerCards.appendChild(clone);
}



function getContentfulPresentation(){
    return fetch("https://cdn.contentful.com/spaces/pr3s1ye3hcsz/environments/master/entries?access_token=oNT7aGiq0Yqd_Omd5GSZPmtIPpUNsU-fif8K9pHgfFA&content_type=presentation")
    .then((info)=>{return info.json()})
    .then((info)=>{
        
        const fieldsCollectionPresentation = {
            title: info.items[0].fields.title,
            description: info.items[0].fields.description,
            imageID: info.items[0].fields.image.sys.id,
            includes: info.includes.Asset
        }
        
        const id = searchAsset(fieldsCollectionPresentation.imageID, fieldsCollectionPresentation.includes);
        fieldsCollectionPresentation.image = "https:" + id.fields.file.url;
        return fieldsCollectionPresentation
    })
}

function searchAsset(imageID, includes) {
	const located = includes.find((x) => {
		return x.sys.id == imageID;
	});
	return located;
}


// Services Contentful
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



function main(){
    // HEADER - FORM - FOOTER  COMPONENTS
    const headerEl = document.querySelector(".header");
    headerComponent(headerEl);
    const formEl = document.querySelector(".form");
    formComponent(formEl);
     const footerEl = document.querySelector(".footer");
    footerComponent(footerEl);

    //PRESENTATION: CAPTURA INFO DEL CONTENTFUL
    getContentfulPresentation().then((present)=>{
        addPresentationCard(present);
    })

    // SERVICES: CAPTURA INFO DEL CONTENTFUL
    getContentfulServices().then((services)=>{
        for (const s of services){
            addServicesCard(s);
        }
    })

}

main();