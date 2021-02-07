const writeFileSync = require("fs").writeFileSync;

const scraper  = async (browser, page) => {
    const url =  "https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020";

    await page.goto(url,{ waitUnit: "domcontentloaded"});
    
    const standing = await page.evaluate(()=>
    publicationdate.querySelector("span:nth-child(1)").getAttribute("data-value"),
     biddingdata.querySelector("span:nth-child(19)").getAttribute(data-value),
    object.querySelector("span:nth-child(4)").getAttribute(data-value)

    );
writeToJson(Standings);
};
const writeToJson = standing =>{
    writeFileSync("./data/standings.json",JSON.stringify(standing));
};
module.exports = scraper;