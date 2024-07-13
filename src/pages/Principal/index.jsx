import Botao from "../../components/Botao"

const Principal = (props) =>{
    const mensagem = 'Olá devs!!!'
    const outraMensagem = 'Até logo devs!!!'
    return(
    <>
        <h1>Página principal de {props.nome} na {props.sala}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis rem officiis nostrum hic harum quae sunt odit, ratione aliquam iure laborum vitae deleniti impedit adipisci ducimus fuga! Numquam, totam.</p>

        <Botao mensagem={mensagem} />
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed modi hic, totam distinctio placeat a ipsam minus voluptas aut at omnis, molestiae consectetur, quo repudiandae alias! Voluptate eligendi minus iure!</p>
        <Botao mensagem={outraMensagem}/>
    </>
    )
}

export default Principal
