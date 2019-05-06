import React,{Component} from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (name=="id"){
            this.setState({
                id: value
            });
        } else {
            this.setState({
                password: value
            });
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.id);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    学号:&nbsp;&nbsp;
                    <input name="id" type="text" value={this.state.id} onChange={this.handleChange} />
                    密码:&nbsp;&nbsp;
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <textarea value={`id is ${this.state.id},and password is ${this.state.password}`}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Welcome;
