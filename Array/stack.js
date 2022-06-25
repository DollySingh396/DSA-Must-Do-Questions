class MyStack{

    constructor(){
        this.arr = Array(1000);
        this.top = -1;

    }

    push(x){

    }
    pop(){

    }
}
MyStack.prototype.push = function(x) 
{
    // code here
    
        this.arr[++(this.top)] = x;
     console.log(this.arr)
    
    

}


/**
 * @returns {number} 
*/
//Function to remove an item from top of the stack.
MyStack.prototype.pop = function()
{
    // code here
    console.log("inside pop")
    //if( this.top >= 0){
    return this.arr[this.top--];
        
    //}
    //
    
}

const obj = new MyStack();
obj.push(12);
obj.push(1);
console.log(obj.pop())