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

var Card = React.createClass({
   render: function() {
   var data = this.props.data;

    var conact_card = data.map(function(item, index) {
      return (
        <div className="cards" key={index}>
          <p className="card__name">{item.name}</p>
          <p className="card__surname">{item.surname}</p>
          <p>{item.adress}</p>
          <p>{item.tel}</p>
          <p>{item.email}</p>
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








var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Card data={contacs} />
      </div>
    );
  }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);