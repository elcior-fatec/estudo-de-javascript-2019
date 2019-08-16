// Uma factory retorna uma nova instancia (objeto)
module.exports = () => {
	return {
		valor: 1,
		incValor() {
			this.valor++
		}
	}
}