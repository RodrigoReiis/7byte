export class ProductList {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public weight: number,
        public amount: number,
        public imageUrl: string,
    ) {}
}