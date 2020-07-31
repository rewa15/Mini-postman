console.log('This is my project');

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

let addedParamCount = 0;


let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
})


let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string =   `<div>
                    <label for="url">Parameter ${addedParamCount + 2}</label>
                    <input type="text" id="parameterKey${addedParamCount + 2}" placeholder="Parameter ${addedParamCount + 2} Key">
                    <input type="text" id="parameterValue${addedParamCount + 2}" placeholder="Parameter ${addedParamCount + 2} Value">
                    <button class="btn btn-primary deleteParam"> - </button>
                    </div>`;
    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    // Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            // TODO: add a confirmation box to confirm parameter deletion
            e.target.parentElement.remove();
        })
    }
    addedParamCount++;
})

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {

    document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";

    let url = document.getElementById("url").value;
    let requestType = document.querySelector("#requestType").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
 
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value; 
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }


    
    if (requestType=='GET'){
        fetch(url, {
            method: 'GET',   
        })
        .then(response=> response.text())
        .then((text) =>{
            
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }

    else{
        fetch(url, {
            method: 'POST', 
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
             
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });

    }

});

