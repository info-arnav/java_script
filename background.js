//fetch, then and setTimout like funtion only return output after the main execution context of global is over
//generator


var func = function *asyncFunction(){
    var data = yield fetch("https://twitter.com/NayakRagini/status/1252907224596279296")
    console.log(data)
}
var run = func()
var newData = run.next()
var display = function runner(value){
    run.next()
}
newData.then(display)



//async



var func =  async function generator(){
    var data = await fetch("https://twitter.com/NayakRagini/status/1252907224596279296")
    console.log(data)
}
func()



//this statemnt and __proto__


var obj = {
    displayed : function display(){
        console.log(this.name)
    }
}

var func = function create(person){
    var object = Object.create(obj)
    object.name = person
    return object
}

var objectDeclared = func("this is a random name")
objectDeclared.displayed()

//functon inside a function inside an object 


function create(Name){
    var object = Object.create(returner)
    object.name = Name
    return object
}

var returner = {
    print : function(){
        const that = this
        function add(){
            that.name = "name changed at last"
            console.log(that.name)
        }
        add()
    } 
}

newObject = create("arnav")

newObject.print()

//function orking as an object

function caller(name){
    this.name = name
}

caller.prototype.func = function(){this.name = "changed"}

var obj = new caller("names")

obj.func() //func is the prototype of caller created objects

//ne keord at last

function create(name){
    this.name = name
}

obj = new create("arnav")
console.log(obj.name)


 
//classes subs and inheritence ith extends

z
class main{
    constructor(name, last, age, number){
        this.name = name
        this.age = age
        this.last = last
        this.number = number
    }
    callable(){
        console.log(this.name, this.last + "  age : " + this.age + " number : " + this.number)
    }
}

var obj = new main("arnav", "gupta", 13, 8860804716)
obj.callable()

class sub extends main{
    constructor(nname, nlast, nage, nnumber, adjective, forThis){
        super (nname, nlast, nage, nnumber)
        this.forThis = forThis
    }
    runner(){
        console.log(forThis)
    }
}

var newObj = new sub("arnav", "Gupta", 13, 8860804716, 'good', 'random')
console.log(newObj.name)
obj.callable()
newObj.callable()


// 1


var array = [1,4,6,8,10]
function paired(array){
    var newArray = []
    for(i = 0; i < array.length; i++){
        newArray[i] = []
        for(j = i+1, x = 0; j < array.length; j++, x++){
            newArray[i][x] = []
            if(newArray[i] != newArray[j]){
                newArray[i][x].push(array[i], array[j])
            }
        }
    }
return newArray
this.array = newArray
}

var pairedObject = new paired(array)
console.log(pairedObject)

// 2

function classifier(start, end){
    start = start
    end = end 
    var copy
    var obj = {'prime' : [],'composite' : []}
    for(start ; start <= end; start++){
        var count = 0
        copy = start
        for(copy ; copy > 1; copy--){
            if(start % copy == 0){
                count++
            }
        }
        if(count == 1){
            obj.prime.push(start)
        }
        else{
            obj.composite.push(start)
        }
    }
    return obj
    this.classification = obj
}

var classifiedObject = new classifier(1,100)
console.log(classifiedObject)

// 3


array = [1,4,5,6,7,8,5,3,6,7,3]
function sorter(array){
    for(i = 0; i < array.length-1; i++){          //runs the programme to the auare of the lenght-1
        for(j = 0; j < array.length-1; j++){
            if(array[j] > array[j+1]){
                copy = array[j]
                array[j] = array[j+1]
                array[j+1] = copy
            }
        }
    }
    return array
    this.obj = array
}

var sorted = new sorter(array)
console.log(sorted)

// 4


setTimeout(function(){console.log('print me out second')},0) //runs after the gloabal prgrammes are over
setTimeout(fetch('some random eb url'),0) //runs in the micro processing ue
console.log('me First i reuest')