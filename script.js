const jogo_da_velha = {
    board: ['','','','','','','','',''],  
    container_element: null,
    gameOver: false,
    vitorias:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ],

    simbolos: {
        opt: ['X','O'],
        jogador: 0,
        change: function(){
            this.jogador = this.jogador === 0 ? 1 : 0
        }
    },

    init: function(container){
        this.container_element = container
    },
    start: function(){
        this.board.fill('')
        this.gameOver = false 
        this.draw()
    },
    draw: function(){
        let content = '';

        for(i in this.board){
            content += `<div onclick = 'jogo_da_velha.make_play(${i})'>${this.board[i]}</div> `
        }
        this.container_element.innerHTML = content
    },

    make_play: function (pos) {
        
        if(this.gameOver) return false
        
        if (this.board[pos] === '') {
            this.board[pos] = this.simbolos.opt[this.simbolos.jogador]
            this.draw()
            let win = this.check_victory(this.simbolos.opt[this.simbolos.jogador])
            if(win >= 0){  
                this.game_over(this.simbolos.opt[this.simbolos.jogador])
            }else{
                this.simbolos.change()
            }
            return true
        }else{
            return false
        }
    },

    check_victory: function(symbol){
        for(i in this.vitorias){
            if(this.board[this.vitorias[i][0]] == symbol &&
                this.board[this.vitorias[i][1]] == symbol &&
                this.board[this.vitorias[i][2]] == symbol){
                console.log(`A sequencia vencedora: ${i}`)
                return i                
            }
        }
        return -1
    },

    game_over: function(jog){
        this.gameOver = true
        alert(`O jogador ${jog} venceu`)
        console.log(`GAME_OVER`)
    }
}