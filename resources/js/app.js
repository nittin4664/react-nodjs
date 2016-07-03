var Header = React.createClass({
    render: function () {
        return (
                <h1 className="title">{this.props.text}</h1>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
                <div>
                <Header text="Helloooo World!!"/>
                </div>
        );
    }
});

React.render(
        <HomePage />,
    document.body
);
