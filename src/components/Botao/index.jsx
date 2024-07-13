const Botao = (props) =>{
    const alerta = () =>{
        alert(props.mensagem)
    }
    return(
        <button onClick={alerta} >Botão</button>
    )
}

export default Botao
