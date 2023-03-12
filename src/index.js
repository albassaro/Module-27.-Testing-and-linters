const userInfo = document.querySelector('.userData');

function getStatusCode(statusCode){
    if(statusCode === 200){
        return statusCode;
    }
    else{
        Promise.reject(new Error("Ошибка! Статус запроса: " + statusCode));
    }
}

function statusCode(response){
    if(getStatusCode(response.status)){
        return Promise.resolve(response);
    }else {
       return userInfo.innerHTML = `<h2>Произошла ошибка! Статус запроса: ${response.status} </h2>`
    }
}

function json(response){
    return response.json();    
}
console.log("complete 3")
fetch('https://api.github.com/users/skillfactory')
    
    .then(statusCode)

    .then(json)
    
    .then((result)=>{
        let user = '';
        for (let key in result) {
            if (result.hasOwnProperty(key)) {
                const arr = `
                    <p>${key}: ${result[key]}</p>`;

                user = user + arr;
            }
        }
        userInfo.innerHTML = `<h2>Данные пользователя "${result.login}":</h2>`+ user;
    });

export {getStatusCode, json};

