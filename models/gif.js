const gif=
{
    gifdb : [],
    initdb(){
        this.gifdb.push({
           title:"Order",
            description: "50+ menu of all-natural dishes.",
            imgSrc:"order.gif"
        })

        this.gifdb.push({
            title:"Wait",
             description: "50+ menu of all-natural dishes.",
             imgSrc:"wait.gif"
         })

         this.gifdb.push({
            title:"Enjoy",
             description: "Delicious & nutritious.",
             imgSrc:"enjoy.gif"
         })
    },

    getGif(){
      return this.gifdb;  
    }
    
}

gif.initdb();
module.exports=gif;