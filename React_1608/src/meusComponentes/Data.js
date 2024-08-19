import { Component } from "react";

export default class Data extends Component
{
    constructor(props)
    {
        super();//executa construtor do pai
        this.props=props;
        this.dataAtual= new Date().toLocaleString();
    }

    //fase montagem
    componentDidMount()
    {
        console.log("O componente foi montado!");
        this.props.texto="O componente foi montado!";
        this.dataAtual= new Date().toLocaleString();
    }

    componentDidUpdate()
    {
        console.log("O componente foi atualizado!");
    }
    //sobrescrita de metodo
    render()
    {
        return(
            <h1>{this.props.texto || ""}{this.dataAtual}</h1>
        )
    }
}