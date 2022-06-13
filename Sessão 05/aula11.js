// Tratamos erro com try/catch
try{
    console.log(nome)
}catch(e){
    console.log("não foi possivel imprimir nome. ")
    console.log(e.name)
    console.log(e.message)
}

console.log("oi...")

//lançando erros
function dividir(num1, num2){
    if(num1 === 0 || num2 === 0){
        throw("Os valores devem ser positivos. ") // lançando uma exeção (erro)
    }else{
        return num1 / num2
    }
}

try{
    let ret = dividir(8, 2);
    console.log(ret)
}catch(e){
    console.log("não foi possivel dividir. ");
}finally{
    console.log("vamos continuar");
}

