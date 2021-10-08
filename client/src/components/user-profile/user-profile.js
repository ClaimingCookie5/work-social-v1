export default class UserProfile extends Component {
  constructor(props) {
      super(props);
      this.addActiveClass= this.addActiveClass.bind(this);
      this.state = {
          active: false,
      };
  this.state = {
    textarea: ''
  };
  }


  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  onTextarea(e) {
    this.setState({
      textarea: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      textarea: this.state.textarea
    };

    console.log(user);

    axios
      .post('http://localhost:5000/users/add', user)
      .then((res) => console.log(res.data));
    // window.location = '/';
    this.setState({
      textarea: ''
    });
  }

  render() {
      return (
          <div 
              className={this.state.active ? 'send_gift_form': null} 
              onClick={this.toggleClass} 
          >
              <p>{this.props.text}</p>
          </div>
      )
}
}

class Test extends Component {
  render() {
      return (
        <div>  
          <button onClick={clickMe}>
              Buy me beer
          </button>
            <form onSubmit={this.submit()}>
              <input />
            </form>
          </div>
      );
  }
}