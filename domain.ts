export class Client{
    constructor(private _uuid:string, private _nom:string, private _prenoms:string){

    }
    get uuid(){
        return this._uuid;
    }
    get nom(){
        return this._nom;
    }
    get prenoms(){
        return this._prenoms;
    }
}