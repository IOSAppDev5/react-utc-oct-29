var obj = {
    id: 10,
    print: function(x){
        console.log("Id: " + this.id);
    }
}

obj.id = 20;
obj["id"] = 30;

obj.print(10);

var emp = {
    id: 50
}

var fn = obj.print.bind(emp);
fn(20);

var fn1 = obj.print.bind(emp, 40);
fn1();