// import { client } from "@gradio/client";


// async function run(link) {

// 	const response_0 = await fetch(link);
// 	const exampleFile = await response_0.blob();
						
// 	const app = await client("https://pszemraj-document-summarization.hf.space/");
// 	const result = await app.predict(1, [
// 				exampleFile, 	// blob in 'File Upload' File component
// 	]);

// 	console.log(result?.data);
//   return result?.data
// }

// run();
//api not working rn



window.onload = () => {
  console.log('hi')
  chrome.runtime.onMessage.addListener((request, sender, resp) => {
      
      console.log(request.message)

    console.log(sender)
      async function getAllDoc(extension){
        linkArray.push([])
        var links = document.querySelectorAll('a[href$="' + extension + '"]')
        console.log(`Extentions : ${extension}`)
        for( let i=0;i<links.length;i++){
          linkArray[count].push(links[i].href)
          console.log(links[i].href)
        }
        count++
      }
      
      let count=0
      let linkArray=[]
      
      
      const extensions = [".pdf", ".doc", ".xls"];

      const promises = extensions.map(async (extension) => {
          return await getAllDoc(extension);
      });

      Promise.all(promises)
          .then(result => {
              // Send the result back to the content script
              resp({ linkArray });
          })
          .catch(error => {
              console.error(error);
              resp({ error: "An error occurred" });
          });

     
  });
}







