const Village = function(name, pops){
    this.name = name;
    this.pops = pops;
}

Village.prototype.construction = function(){
    console.log(`${this.name} consturction is on way!`)
}


const vill1 = new Village('Dhanadihari', 3000);

console.log(vill1);
console.log(vill1.__proto__);
console.log(vill1.__proto__.__proto__);
console.log(vill1.__proto__.__proto__.__proto__);


const vill2 = new Village('Jamukh', 500);

console.log(vill2);



class Town {
    constructor(name, population){
        this.name = name;
        this.population = population;
    }

    construction(){
        console.log(`${this.name} has ${this.population} people`);
    }
}

const town1 = new Town('Daudnager', 6000);
console.log(town1);

town1.construction();


