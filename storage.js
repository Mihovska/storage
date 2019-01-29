const fs = require('fs');

let storage = {};

function put(key, value){
    if (typeof key === 'string'){
        if(!storage.hasOwnProperty(key)){
            storage[key] = value;
        } else {
            throw new Error('The key already exists!');
        }
    } else {
        throw new Error('The value must be a string!');
    }
}

function get(key){
    if (typeof key === 'string'){
        if (storage.hasOwnProperty(key)){
            return storage[key];
        } else {
            throw new Error('The key does not exist!');
        }
    } else {
        throw new Error('The key must be a string!');
    }
}

function getAll(){
    const storageLen = Object.keys(storage).length;
    if (storageLen === 0){
        throw new Error('The storage is empty!');
    }
    return JSON.stringify(storage);
}

function update(key, newValue){
    if (typeof key === 'string'){
        if(storage.hasOwnProperty(key)){
            storage[key] = newValue;
        } else {
            throw new Error('The key does not exists!');
        }
    } else {
        throw new Error('The value must be a string!');
    }
}

function deleteKey(key){
    if (typeof key === 'string'){
        if(storage.hasOwnProperty(key)){
            delete storage[key];
        } else {
            throw new Error('The key does not exists!');
        }
    } else {
        throw new Error('The value must be a string!');
    }
}

function clear(){
    if (Object.keys(storage).length !== 0){
        storage = {};
    }
}

function save(){
    fs.writeFileSync('storage.json', JSON.stringify(storage, null, 2), 'utf8');
}

function load(){
    if (fs.existsSync('storage.json')){
        const rawFile = fs.readFileSync('storage.json');
        const loadFile = JSON.parse(rawFile);
        return loadFile;
    }
}

module.exports = {
    put: put,
    get: get,
    getAll: getAll,
    update: update,
    deleteKey: deleteKey,
    clear: clear,
    save: save,
    load: load
}