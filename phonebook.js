const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const fs = require("fs");
const { filename } = argv;
const fileNameArray = "./fileNameArray.json";

console.log(`File Name is ${filename}`);


  fs.readFile(fileNameArray, "utf-8", (err, data) => {
    if (err) {
      throw "File read error occured";
    }
    if(!JSON.stringify(data).includes(filename)){
      const fileNameData = JSON.parse(data);
      fileNameData.push({filename});
      fs.writeFile(fileNameArray, JSON.stringify(fileNameData), () => {
        console.log("File Name List Updated");
      });
      const content = "You are Awesome!!";
      fs.writeFile(`${filename}.json`, content, () => {
        console.log("Data inserted!!");
      });
    }
    else{
      console.log("File name already exists, Enter new File Name")
    }
    });
  
  

