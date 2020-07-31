console.log('This is my project');

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

let checkVariable = 0;


let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

let paramsOption = document.getElementById('paramsContent');
paramsOption.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

let jsonOption = document.getElementById('jsonContent');
jsonOption.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
})


let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string =   `<div>
                    <label for="url">Parameter ${checkVariable + 2}</label>
                    <input type="text" id="parameterKey${checkVariable + 2}" placeholder="Parameter ${checkVariable + 2} Key">
                    <input type="text" id="parameterValue${checkVariable + 2}" placeholder="Parameter ${checkVariable + 2} Value">
                    <button class="btn btn-primary deleteParam"> - </button>
                    </div>`;
    
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
   
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            
            e.target.parentElement.remove();
        })
    }
    checkVariable++;
})

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {

    document.getElementById('responsePrism').innerHTML = "Fetching response...";

    let url = document.getElementById("url").value;
    let requestType = document.querySelector("#requestType").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
 
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < checkVariable + 1; i++) {
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

