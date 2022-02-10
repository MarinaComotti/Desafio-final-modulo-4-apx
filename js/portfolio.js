// INFO CAPTURADA DESDE EL CONTENTFUL 
function addPortfolioCard(info){
    
   
    const templatePortfolioCard = document.querySelector("#portfolio__card__template");
    const portfolioContainerCards = document.querySelector(".portfolio__container");

    templatePortfolioCard.content.querySelector(".portfolio-container__card__title").textContent = info.title;
    templatePortfolioCard.content.querySelector(".portfolio-container__card__description").textContent = info.description;
    templatePortfolioCard.content.querySelector(".portfolio-container__card__img").src = info.image;
    
    
 

    const clone = document.importNode(templatePortfolioCard.content, true);
    portfolioContainerCards.appendChild(clone);

}

function getContentfulPortfolio(){
    return  fetch("https://cdn.contentful.com/spaces/pr3s1ye3hcsz/environments/master/entries?access_token=oNT7aGiq0Yqd_Omd5GSZPmtIPpUNsU-fif8K9pHgfFA&content_type=portfolio")
    .then((info)=>{return info.json()})
    .then((info)=>{
        
        
        const fieldsCollectionPortfolio = info.items.map((item)=>{
         
        return {
            title: item.fields.title,
            description: item.fields.description,
            imageID: item.fields.image.sys.id,
            includes: info.includes.Asset
        }
    })

    fieldsCollectionPortfolio.forEach((item)=>{
       
        const id = searchAsset(item.imageID, item.includes);
        item.image = "https:" + id.fields.file.url;
        
    })
   return fieldsCollectionPortfolio;
   
    })
}

function searchAsset(imageID, includes) {
	const located = includes.find((x) => {
		return x.sys.id == imageID;
	});

	return located;
}

function main(){
    // Header - footer components
    const headerElServices = document.querySelector(".header");
    headerComponent(headerElServices);
    const footerElServices = document.querySelector(".footer");
    footerComponent(footerElServices);
    // Services Contentful
    getContentfulPortfolio().then((portfolio)=>{
       for (const p of portfolio){
            addPortfolioCard(p);
        }
    })

}
main();
