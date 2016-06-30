var App = React.createClass({
    getInitialState: function() {
        return {
            card: contacs
            };
    },

    componentDidMount: function() {
        var self = this;
        window.events.addListener('Card.add', function(item) {
            var nextCard = item.concat(contacs);
            self.setState({card: nextCard});
            });
        window.events.addListener('Card.del', function(index) {
            var stateSplice = contacs.splice(index,1);
            self.setState(stateSplice);
            });
        window.events.addListener('Card.edit', function(index,item) {
            var StateEdit = contacs[index]=item;
            self.setState(StateEdit);
            });
    },

    componentWillUnmount: function() {
        window.events.removeListener('Card.add');
    },

    render: function() {
        return (
          <div className="app">
            <Add/>
            <FilterOptions data={this.state.card}/>
          </div>
            );
    }

});
