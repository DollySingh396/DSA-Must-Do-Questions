class TwoStacks
{
    
    constructor(){
        this.arr = new Array(6);
        this.size = 6;
        this.top1 = -1;
        this.top2 = 6;
    }
    
    /**
     * @param {number} x
    */
    //Function to push an integer into the stack1.
    push1(x){
        // code here
        if( this.top1 < this.top2 - 1){
            this.arr[++(this.top1)] = x;
            console.log(this.arr);
        }
        else 
            console.log("Stack1 is Overflowed")
         
    }
    
    /**
     * @param {number} x
    */
    //Function to push an integer into the stack2.
    push2(x){
        // code here
        if( this.top1 < this.top2 - 1){
         this.arr[--(this.top2)] = x;
         console.log(this.arr);
        }
        else 
            console.log("Stack2 is Overflowed")
    }
    
    /**
     * @returns {number}
    */
    //Function to remove an element from top of the stack1.
    pop1(){
        // code here
        if( this.top1 >= 0 ){
            return this.arr[this.top1--];
        }
        else {
            console.log("Stack1 is underflowed");
            return -1;
        }
        
    }
    
    /**
     * @returns {number}
    */
    //Function to remove an element from top of the stack2.
    pop2(){
        // code here
        if(this.top2 < this.size) {
            return this.arr[this.top2++];
        }
        else {
            console.log("Stack1 is underflowed");
            return -1
        }
       
        

    }
}
// creating a class object
// class constructor is called and all values are initialised in the constructor function
const obj = new TwoStacks();
// using object obj we are performing some actions on the array
// push and pop all are performed in O(1);
// space is used extra - O(N) for array
// the array will behave as 2 stacks
obj.push1(2);
obj.push2(4);
obj.push1(3);
obj.push1(5);
obj.push1(51);
obj.push2(15);
obj.push1(15);
console.log(obj.pop1());
console.log(obj.pop2());
console.log(obj.pop2());
console.log(obj.pop2());
