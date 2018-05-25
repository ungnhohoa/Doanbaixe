export default class componentA extends React.Component {
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
        return ( 
            < div >
            <h1 > Hello, world!  </h1>
            <div>{this.state.click}</div>
             <button onClick = {this.changeState} > ahihi </button>
              </div>

        );
    };
}