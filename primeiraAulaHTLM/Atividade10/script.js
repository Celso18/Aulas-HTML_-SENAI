function tratamentoDeErroEspecifico() {
    try {
        let idade = 10;
        if (idade < 0) {
            throw new Error("Idade inválida não pode ser negativa");
        } else {  
            throw new Error("Idade inválida não pode ser maior que 18"); 
        } 

        
         }catch (erro) {
            console.log("Erro ao cadastrar: " , erro.message);

        
         
      
    }