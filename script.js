let register = []
let option = ''

do {
    option = prompt(`
        cadastro de imoveis: ${register.length}
        1 - adicionar o nome
        2 - adicionar quantidade de quartos
        4 - adicionar quantidade de banheiros
        5 - adicionar garagem 
        6 - sair
        `)

        switch (option) {
            case '1':
                const register = {
                    nome: prompt('digite seu nome?'),
                    quartos: prompt('quantos quartos você deseja?'),
                    banheiros: prompt('quantos banheiros você deseja?'),
                    garagem: prompt('deseja com garagem?'),
                }
                
        }
} while (option !== '3')
