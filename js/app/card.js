var Card = React.createClass({
    getInitialState: function() {
        return { showResults: -1 };
    },

    remove: function(index) {
      window.events.emit('Card.del', index);
    },

    edit: function(index) {
        this.setState({ showResults: index });
    },
        onBtnClickHandler: function(index,e) {
        e.preventDefault();
        var name = ReactDOM.findDOMNode(this.refs.nameCard);
        var surname = ReactDOM.findDOMNode(this.refs.surnameCard);
        var adress = ReactDOM.findDOMNode(this.refs.adressCard);
        var tel = ReactDOM.findDOMNode(this.refs.telCard);
        var email = ReactDOM.findDOMNode(this.refs.emailCard);
        var sex = ReactDOM.findDOMNode(this.refs.emailCard);

        var item = {
          name: name.value,
          surname: surname.value,
          adress: adress.value,
          tel: tel.value,
          email:email.value,
          sex:sex.value
        };

        window.events.emit('Card.edit', index,item);
            this.state.showResults = -1;
    },
    render: function() {
        var contactContainer;
        var conact_card = this.props.data.map( (item, index) => {

            if (this.state.showResults == index){
                contactContainer =

                <div className="cards" ref="card" key={index}>
                    <form className='cards'>
                        <input
                        type='text'
                        className='add__name'
                        defaultValue={item.name}
                        placeholder='Ваше имя'
                        ref='nameCard'
                        />
                        <input
                        className='add__surname'
                        defaultValue={item.surname}
                        placeholder='Ваша фамилия'
                        ref='surnameCard'
                        />
                        <input
                        className='add__adress'
                        defaultValue={item.adress}
                        placeholder='Ваш адрес'
                        ref='adressCard'
                        />
                        <input
                        className='add__tel'
                        defaultValue={item.tel}
                        placeholder='Ваш телефон'
                        ref='telCard'
                        />
                        <input
                        className='add__email'
                        defaultValue={item.email}
                        placeholder='Ваша фамилия'
                        ref='emailCard'
                        />
                        <select
                        className="add__sex"
                        placeholder='Ваша группа'
                        ref='sexCard'
                        >
                        <option value=""></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        </select>

                        <button
                        className='add__btn'
                        onClick={this.onBtnClickHandler.bind(this, index)}
                        ref='alert_button'
                        >
                        Изменить
                        </button>
                    </form>
                </div>;
            }
            else {
                 contactContainer =
                    <div className="cards" ref="carder" key={index}>
                        <p className="card__name">Имя: {item.name}</p>
                        <p className="card__surname">Фамилия: {item.surname}</p>
                        <p className="card__adress">Адрес: {item.adress}</p>
                        <p className="card__tel">Телефон: {item.tel}</p>
                        <p className="card__email">Email: {item.email}</p>
                        <button
                            onClick={this.edit.bind(this, index)}>
                          Edit
                        </button>
                        <button
                            onClick={this.remove.bind(this, index)}>
                          Удалить
                        </button>
                    </div>;
            }
          return (contactContainer)
        });
        return (
          <div className="card">
            {conact_card}
          </div>
        );

    }
});
