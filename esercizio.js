let figlet = require("figlet")

figlet(`Ciao Bernard !`,function(error, data){
    if(error){
        console.log(`qulacosa e andato storto`);
        console.dir(error);
        return ;
    }
    console.log(data)
})