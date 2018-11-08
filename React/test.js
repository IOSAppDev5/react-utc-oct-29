class Product{

    //id =10
    constructor(){
        this.id = 10;
        this.name ="Iphone";
    }

    print(){
        console.log(this.id, this.name);
    }
}

var prd = new Product();
prd.print();