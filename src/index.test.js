
import {getStatusCode, json as dataUserResponce} from './index.js';


describe('получение информации о пользователе с сервера', function(){

    
    const field = document.getElementsByClassName('userData');
    const dataField = field.value;

    it('когда возвращаем запрос, ожидается что он будет не пустой',function () {
        expect(dataField).that.is.not.empty;
    })

    it('когда возвращаем запрос, ожидается что он пройдет без ошибок со статус кодом 200', function () {
        expect(getStatusCode).to.equal(200);
    })

    it('когда возвращаем данные пользователя, ожидается что они будут идентичны записанным в проверочной базе', function (){
        let userDataBase = fs.readFileSync('user-data.json','utf-8');
        userDataBase = JSON.parse(userDataBase);
        expect(dataUserResponce).to.eql(userDataBase);
    })
    
})












