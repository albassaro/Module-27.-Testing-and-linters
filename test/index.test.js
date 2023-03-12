import * as fs from "node:fs";
import {expect} from 'chai';
import {response, data as dataUserResponce} from './index.js';


describe('получение информации о пользователе с сервера', function(){

    it('когда возвращаем запрос, ожидается что он пройдет без ошибок со статус кодом 200', function () {
        expect(response.status).to.equal(200);
    })

    it('когда возвращаем запрос, ожидается что он будет не пустой', function () {
        expect(dataUserResponce).that.is.not.empty;
    })

    it('когда возвращаем данные пользователя, ожидается что они будут идентичны записанным в проверочной базе', function(){
        let userDataContent = fs.readFileSync('user-data.json','utf-8');
        userDataContent = JSON.parse(userDataContent);
        expect(dataUserResponce).to.eql(userDataContent);
    })
    
})