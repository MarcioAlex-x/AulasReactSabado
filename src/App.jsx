
import Dados from './components/Dados'
import Principal from './pages/Principal'

const App = () =>{
    // javascript
    const nome = 'Alex'
    const profissao = 'Programador'
    const idade = 41
    return(
        <>
        <Principal nome={nome} sala="Sala-12" />
        <Dados x = {nome} y = {profissao} z={idade}/>
        </>
    )
}

export default App
