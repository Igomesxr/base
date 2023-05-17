// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto{
    constructor(nome, dCadastro, descricao, preco, qtd){
        this.nome = nome
        this.dCadastro = dCadastro
        this.descricao = descricao
        this.preco = preco
        this.qtd = qtd
    }

    mostrarP(){
        return this.nome + " " + this.dCadastro + " " + this.descricao + " " + this.preco + " " + this.qtd
    }
}
class ProdutoDestaque extends Produto{
        constructor(nome, dCadastro, descricao, preco, qtd, produtoDestaque){
            super(nome, dCadastro, descricao, preco, qtd)
        }
}

const produto = new Produto("Tênis NIKE" , "10/03/2023" , "Tênis NIKE perfeito para esportes.", 349.99, 20)
const produtoDestaque = new ProdutoDestaque("Camisa Polo don Brasil Branca", "18/04/2023", "Camisa ultra sedosa, perfeita pra ver a gata.", 199.99, 15)
console.log(produto.mostrarP()) 
console.log(produtoDestaque.mostrarProdutoDestaque())

const div = document.getElementById('produtoDestaque')
div.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque())