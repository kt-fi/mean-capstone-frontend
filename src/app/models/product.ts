export class Product {
    constructor(
        public pid:string,
        public pname:string,
        public description:string,
        public price:number,
        public stock:number,
        public pimage:string,
        public offer:boolean
    ){}
}
