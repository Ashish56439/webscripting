const writeFileSync = require("fs").writeFileSync;

module.exports= class scraper{
    constructor(browser, page){
        this.browser = browser;
        this.page = page;

        this.standing = [];
        this.url = "https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020";

    }
    async main() {
     await this.page.goto(this.url,{waitUnit: "domcontentloaded"});

     this.standing = await this.page.evaluate(() =>

     publicationdate.querySelector("span:nth-child(1)").getAttribute("data-value"),
     biddingdata.querySelector("span:nth-child(19)").getAttribute(data-value),
    object.querySelector("span:nth-child(4)").getAttribute(data-value)

     )
     this.writeToJson();
    } 
   

writerToJson(){
    writerFileSync("./data/standing.json",JSON.stringify(this.standing));

};
}