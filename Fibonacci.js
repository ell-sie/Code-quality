function Fibonacci(n){
    let n1 = 0, n2 =1;
    let result = [];

    for (let i = 0; i <= n ; i++){
        result.push(n1)
        let nextnum = n1 + n2
        n1 = n2
        n2 = nextnum
    }

    return result
}