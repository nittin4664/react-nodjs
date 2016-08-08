var Header = React.createClass({
    render: function () {
        return (
                <h1 className="title">{this.props.text}</h1>
        );
    }
});

var HoardingsList = React.createClass({
    render: function () {
        var items = this.props.hoardings.map(function (hoarding) {
            return (
                <li>
                  <span>{hoarding.name}</span>
                  <span>{hoarding.role}</span>
                </li>
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});

var HomePage = React.createClass({
    getInitialState: function() {
      return {hoardings: []};
    },
    componentDidMount: function() {
        this.props.service.getAllHoardings().then(function(data){
            this.setState({hoardings: data});
        }.bind(this));
    },
    render: function () {
        return (
                <div>
                <Header text="Helloooo World!!"/>
                <HoardingsList hoardings={this.state.hoardings}/>
                </div>
        );
    }
});

React.render(
        <HomePage service={hoardingService}/>,
    document.body
);
