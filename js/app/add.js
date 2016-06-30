var Add = React.createClass({
    componentDidMount:  function(){
      ReactDOM.findDOMNode(this.refs.name).focus();
    },

    onBtnClickHandler: function(e) {
        e.preventDefault();
        var name = ReactDOM.findDOMNode(this.refs.name);
        var surname = ReactDOM.findDOMNode(this.refs.surname);
        var adress = ReactDOM.findDOMNode(this.refs.adress);
        var tel = ReactDOM.findDOMNode(this.refs.tel);
        var email = ReactDOM.findDOMNode(this.refs.email);
        var sex = ReactDOM.findDOMNode(this.refs.sex);

        var item = [{
          name: name.value,
          surname: surname.value,
          adress: adress.value,
          tel: tel.value,
          email:email.value,
          sex:sex.value
        }];
        window.events.emit('Card.add', item);
        name.value = '';
        surname.value = '';
        adress.value = '';
        tel.value = '';
        email.value = '';
        sex.value = '';
    },
    render: function() {
        return (
            <form className='add'>
                    <input
                      type='text'
                      className='add__name'
                      defaultValue=''
                      placeholder='Ваше имя'
                      ref='name'
                    />
                    <input
                      className='add__surname'
                      defaultValue=''
                      placeholder='Ваша фамилия'
                      ref='surname'
                    />
                     <input
                      className='add__adress'
                      defaultValue=''
                      placeholder='Ваш адрес'
                      ref='adress'
                    />
                    <input
                      className='add__tel'
                      defaultValue=''
                      placeholder='Ваш телефон'
                      ref='tel'
                    />
                    <input
                      className='add__email'
                      defaultValue=''
                      placeholder='Ваша фамилия'
                      ref='email'
                    />
                    <select
                        className="add__sex"
                        placeholder='Ваша группа'
                        ref='sex'
                        >
                        <option value=""></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <button
                      className='add__btn'
                      onClick={this.onBtnClickHandler}
                      ref='alert_button'
                      >
                      Создать контакт
                    </button>
            </form>
             );
    }
});
