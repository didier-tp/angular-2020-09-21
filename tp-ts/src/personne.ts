/* export */ function add(x:number,y:number):number{
   return x+y;
}

export class Personne {
        public taille : number =0;
        constructor(public nom:string="?" ,
                    public prenom:string="?",
                    public age:number=0){

        }
        
        public incrementerAge(){
            this.age = add(this.age, 1);
        }
}

