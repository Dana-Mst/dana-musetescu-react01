class NewsletterFrom extends React.Component {
  state = {
    email: '',
    inputMessage: '',
    busy: false,
    submitted: false,
    submitedValue: '',
  };

  validateEmail(email) {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  }

  // handleSubmit
  onSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;

    if (!this.validateEmail(email)) {
      this.setState({
        inputMessage: 'Please use a valid email',
      });

      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        email: '',
        submitedValue: this.state.email,
        submitted: true,
      });
    }, 3000);
  };

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.submitted === true ? (
          <div className='container'>
            Hello {this.state.submitedValue}, thank you for submiting.
          </div>
        ) : (
          <form onSubmit={this.onSubmit} className='form-newsletter container'>
            <label htmlFor='field-newsletter'>
              Subscribe to our <span>newsletter</span>
            </label>
            <div>
              <input
                type='text'
                name='field-newsletter'
                id='field-newsletter'
                value={this.state.email}
                onChange={this.onInputChange}
                placeholder='enter your emailaddress to receive the latest news!'
              ></input>

              {this.state.inputMessage.length > 0 ? (
                <div className='message'>{this.state.inputMessage}</div>
              ) : null}
            </div>

            <button
              type='submit'
              title='Subscribe'
              disabled={this.state.busy}
              className={`${this.state.busy === true ? 'busy' : ''}`}
            >
              {this.state.busy ? (
                <i className='fas fa-spinner icon'></i>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        )}
      </div>
    );
  }
}

const newsletterContainer = document.querySelector('.home-newsletter');
ReactDOM.render(<NewsletterFrom></NewsletterFrom>, newsletterContainer);
