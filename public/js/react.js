
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: 'true'
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        if (this.state.click == 'false') {
            this.setState({
                click: 'true'
            })
        } else {
            this.setState({
                click: 'false'
            })
        }

    }

    render() {
        if(this.props.color == "red"){
            return ( 
                <div>
                <h1 style={{color : "red"}}> Hello, world!  </h1>
                <div>{this.state.click}</div>
                 <button onClick = {this.changeState} > Button </button>
                 
                  </div>
            );
        }
        else{
            return ( 
                <div>
                <h1> Hello, world!  </h1>
                <div>{this.state.click}</div>
                 <button onClick = {this.changeState} > Button </button>
                 
                  </div>
            );
        }
        
    };
}

ReactDOM.render( 
<Demo color="red"/> ,
    document.getElementById('root')
);