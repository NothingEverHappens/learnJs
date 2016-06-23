var contacs = [
    {
        name:'Ian',
        surname:'Gallagher',
        adress:'abc sjda',
        tel:'+134554334',
        email:'goog@gmail.com'
    },
        {
        name:'Fiona',
        surname:'Gallagher',
        adress:'abc sjda',
        tel:'+134554334',
        email:'trolo@gmail.com'
    }
];

window.events = new EventEmitter();
var Card = React.createClass({

    remove: function(index) {
      console.log(index);
      window.events.emit('Card.del', index);
    },

    render: function() {
        var conact_card = this.props.data.map( (item, index) => {
          return (
            <div className="cards" ref="carder" key={index}>
                <p className="card__name">Имя: {item.name}</p>
                <p className="card__surname">Фамилия: {item.surname}</p>
                <p className="card__adress">Адрес: {item.adress}</p>
                <p className="card__tel">Телефон: {item.tel}</p>
                <p className="card__email">Email: {item.email}</p>
                <button
                      onClick={this.remove.bind(this, index)}>
                  Удалить
                </button>
            </div>
          )
        });

        return (
          <div className="card">
            {conact_card}
          </div>
        );

    }
});

var Add = React.createClass({
    getInitialState: function() {
      return{
          agreventsNotChecked: true,
          authorIsEmpty: true,
          textIsEmpty: true
      }
    },
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
        var item = [{
          name: name.value,
          surname: surname.value,
          adress: adress.value,
          tel: tel.value,
          email:email.value
        }];

        window.events.emit('Card.add', item);
        name.value = '';
        surname.value = '';
        adress.value = '';
        tel.value = '';
        email.value = '';
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
                    <button
                      className='add__btn'
                      onClick={this.onBtnClickHandler}
                      ref='alert_button'
                      >
                      Создать контакт
                    </button>
                  </form>
             );
    },

});

var App = React.createClass({
    getInitialState: function() {
        return {
            card: contacs
            };
    },

    componentDidMount: function() {
        var self = this;
        window.events.addListener('Card.add', function(item) {
          var nextCard = item.concat(self.state.card);
          self.setState({card: nextCard});
            });
        window.events.addListener('Card.del', function(index) {
          self.setState(self.state.card.splice(index,1));
            });

    },

    componentWillUnmount: function() {
        window.events.removeListener('Card.add');
    },

    render: function() {
        return (
          <div className="app">
            <Add/>
            <Card data={this.state.card} />
          </div>
            );
    }

});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);