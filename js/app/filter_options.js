    var FilterOptions = React.createClass({
        getInitialState: function() {
        return {
            data: this.props.data
        };
        },
        handleChange: function(e) {
            var val = e.target.value;
            if (val != "") {
                var filteredData = this.props.data.filter(function (item) {
                    return item.sex === val;
                });
                this.setState({data: filteredData});
            }else {
                this.setState({data: this.props.data});
            }
          },
        render: function() {
            return (
                <div>
                    <select id="sex" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <Card data={this.props.data} />
                </div>
            );
        }
    });
