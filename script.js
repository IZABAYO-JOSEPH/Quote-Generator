// get quotes API
//  async function can run at anytime independently and it wont' stop the browser from loading the page
async function getQuotes(){

    const apiUrl='https://type.fit/api/quotes';
}
try{
    // this means the response constant willl not be populated until it has fetched the data
const response =  await fetch(apiUrl)

}catch(error){

    // catch error here 
}