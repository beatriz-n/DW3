
const calculadora = (request, res) => (async () =>{
const { num1, num2, operacao } = request.body

if(operacao == '+'){
    result = num1 + num2;
}else if(operacao == '-'){
    result = num1 - num2;
}else if(operacao == '/'){
    result = num1 / num2;
}else if(operacao == '*'){
    result = num1 * num2;
}
res.json({ "status": "ok", "result": result});
} )();

module.exports = {
calculadora,
}