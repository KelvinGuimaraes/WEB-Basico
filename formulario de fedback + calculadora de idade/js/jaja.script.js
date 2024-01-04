function calcularIdade() {
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdate = new Date(birthdateInput);
    const currentDate = new Date();

    if (isNaN(birthdate.getTime())) { // Verificar se a data de nascimento é válida
        document.getElementById("resultado")
            .textContent = "Por favor, insira uma data de nascimento válida.";
    } else {
        const diffInMilliseconds = currentDate - birthdate;
        const ageDate = new Date(diffInMilliseconds);
        const idade = Math.abs(ageDate.getUTCFullYear() - 1970);

        document.getElementById("resultado")
            .textContent = `Sua idade é ${idade} anos.`;
    }
}