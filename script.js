let array=[]
const container=document.getElementsByClassName('showStuff')[0]

var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function(e) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            message:'hi'
        },function(response){
          container.innerHTML=''
            console.log(response.linkArray)
            for(let i=0;i<3;i++){
              const nameElement=document.createElement('div')
                if(i==0){
                  nameElement.innerText='PDF files'
                }else if(i==1){
                  nameElement.innerText='DOC files'
                }else{
                  nameElement.innerText='XLS files'
                }
                // nameElement.classList.add('name')
                container.appendChild(nameElement)
                for(let j=0;j<response.linkArray[i].length;j++){
                  const listElement=document.createElement('li')
                  const valueElement=document.createElement('a')
                  valueElement.href=response.linkArray[i][j]
                  valueElement.innerText=response.linkArray[i][j]
                  // valueElement.classList.add('value')
                  listElement.appendChild(valueElement)
                  const breakElement=document .createElement('br')
                  listElement.appendChild(breakElement)
                  container.appendChild(listElement)
                }
            }

        });
    });
});


