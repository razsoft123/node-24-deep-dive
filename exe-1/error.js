// Test the error of stack trace

function fun1() {
    throw new Error("This is error");
}

function fun2() {
    console.log("inside function two");
    fun1();
}

function fun3() {
    fun2()
    console.log("Inside function three")
}

fun3();