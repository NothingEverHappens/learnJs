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
        <div key={index}>
          <p className="card__name">{item.name}:</p>
          <p className="card__surname">{item.surname}</p>
        </div>
      )
    });

       return (
      <div className="news">
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