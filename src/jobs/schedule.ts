import * as cron from 'cron'
import CarrinhoService from '../api/services/carrinho.service'
class Agendamento {

    tarefas: any[] = []
    private CronJOB: any
    constructor(  ){
        this.CronJOB = cron.CronJob
    }

    configurarLimpeza( dados: any ){
        
        let data = new Date( Date.parse( dados.data ) ).toLocaleString('pt-BR', {
            timeZone: 'America/Manaus'
        })
        /*
        Preparar para zerar carrinho tempo expirado
        */
        let separarHora = data.split(' ')
        let horaFuturaParaZerar = this.addMinutes(separarHora[1], 10)
        let horaPararZerarcarinho = horaFuturaParaZerar.split(':')
        this.tarefas.push( {id: dados.id, hora: horaFuturaParaZerar} )
        
        
        let configurarTempo = `${horaPararZerarcarinho[2]} ${horaPararZerarcarinho[1]} ${horaPararZerarcarinho[0]} * * *`
        
        const agenda = new this.CronJOB( configurarTempo ,  () =>{
            let curDate = this.getCurDate().split(' ')
            console.log('**************************************************************')
            console.log('*                                                            *')
            console.log(`*   Zerando carrinho agora  ${this.getCurDate()}              *`)
            console.log('*                                                            *')
            console.log('**************************************************************')            
            
            let listaDeCarrinhosParaZerar = this.tarefas.filter( t => t.hora == curDate[1])
            
            this.zerarCarrinho( listaDeCarrinhosParaZerar )

            
        }, null, true, 'America/Manaus')
        
    }

    addMinutes(time: string, minsToAdd: number){
        var piece: any = time.split(':');
        

        var mins = piece[0]*60 + +piece[1] + +minsToAdd;
        
        const D = (J) => { return (J<10? '0':'') + J};
        //return D(mins%(24*60)/60 | 0) + ':' + D(mins%60) +":00"; 
        return D(mins%(24*60)/60 | 0) +':'+ D(mins%60) +':'+ piece[2] 
    }

    getCurDate() {
        let curDate = new Date()
        let montth  = curDate.getMonth() + 1 < 10 ? `0${curDate.getMonth() + 1}` : curDate.getMonth() + 1
        let day     = curDate.getDate() < 10 ? `0${curDate.getDate()}` :  curDate.getDate()
        let hour    = curDate.getHours() < 10 ? `0${curDate.getHours()}` : curDate.getHours()
        let minute  = curDate.getMinutes() < 10 ? `0${curDate.getMinutes()}` : curDate.getMinutes()
        let second  = curDate.getSeconds() < 10 ? `0${curDate.getSeconds()}` : curDate.getSeconds()
        let formatedDate = `${day}/${montth}/${curDate.getFullYear()} ${hour}:${minute}:${second}`
        return formatedDate
    }

    zerarCarrinho(carrinhos: any[]){
        carrinhos.forEach( async e => {
            let cartService = new CarrinhoService()
            await cartService.cleanCart( e.id )
        });
    }

}

export default new Agendamento