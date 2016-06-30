'use strict';

var Add = React.createClass({
    displayName: 'Add',

    componentDidMount: function componentDidMount() {
        ReactDOM.findDOMNode(this.refs.name).focus();
    },

    onBtnClickHandler: function onBtnClickHandler(e) {
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
            email: email.value,
            sex: sex.value
        }];
        window.events.emit('Card.add', item);
        name.value = '';
        surname.value = '';
        adress.value = '';
        tel.value = '';
        email.value = '';
        sex.value = '';
    },
    render: function render() {
        return React.createElement(
            'form',
            { className: 'add' },
            React.createElement('input', {
                type: 'text',
                className: 'add__name',
                defaultValue: '',
                placeholder: 'Ваше имя',
                ref: 'name'
            }),
            React.createElement('input', {
                className: 'add__surname',
                defaultValue: '',
                placeholder: 'Ваша фамилия',
                ref: 'surname'
            }),
            React.createElement('input', {
                className: 'add__adress',
                defaultValue: '',
                placeholder: 'Ваш адрес',
                ref: 'adress'
            }),
            React.createElement('input', {
                className: 'add__tel',
                defaultValue: '',
                placeholder: 'Ваш телефон',
                ref: 'tel'
            }),
            React.createElement('input', {
                className: 'add__email',
                defaultValue: '',
                placeholder: 'Ваша фамилия',
                ref: 'email'
            }),
            React.createElement(
                'select',
                {
                    className: 'add__sex',
                    placeholder: 'Ваша группа',
                    ref: 'sex'
                },
                React.createElement('option', { value: '' }),
                React.createElement(
                    'option',
                    { value: 'male' },
                    'male'
                ),
                React.createElement(
                    'option',
                    { value: 'female' },
                    'female'
                )
            ),
            React.createElement(
                'button',
                {
                    className: 'add__btn',
                    onClick: this.onBtnClickHandler,
                    ref: 'alert_button'
                },
                'Создать контакт'
            )
        );
    }
});

var App = React.createClass({
    displayName: 'App',

    getInitialState: function getInitialState() {
        return {
            card: contacs
        };
    },

    componentDidMount: function componentDidMount() {
        var self = this;
        window.events.addListener('Card.add', function (item) {
            var nextCard = item.concat(contacs);
            self.setState({ card: nextCard });
        });
        window.events.addListener('Card.del', function (index) {
            var stateSplice = contacs.splice(index, 1);
            self.setState(stateSplice);
        });
        window.events.addListener('Card.edit', function (index, item) {
            var StateEdit = contacs[index] = item;
            self.setState(StateEdit);
        });
    },

    componentWillUnmount: function componentWillUnmount() {
        window.events.removeListener('Card.add');
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'app' },
            React.createElement(Add, null),
            React.createElement(FilterOptions, { data: this.state.card })
        );
    }

});

var Card = React.createClass({
    displayName: 'Card',

    getInitialState: function getInitialState() {
        return { showResults: -1 };
    },

    remove: function remove(index) {
        window.events.emit('Card.del', index);
    },

    edit: function edit(index) {
        this.setState({ showResults: index });
    },
    onBtnClickHandler: function onBtnClickHandler(index, e) {
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
            email: email.value,
            sex: sex.value
        };

        window.events.emit('Card.edit', index, item);
        this.state.showResults = -1;
    },
    render: function render() {
        var _this = this;

        var contactContainer;
        var conact_card = this.props.data.map(function (item, index) {

            if (_this.state.showResults == index) {
                contactContainer = React.createElement(
                    'div',
                    { className: 'cards', ref: 'card', key: index },
                    React.createElement(
                        'form',
                        { className: 'cards' },
                        React.createElement('input', {
                            type: 'text',
                            className: 'add__name',
                            defaultValue: item.name,
                            placeholder: 'Ваше имя',
                            ref: 'nameCard'
                        }),
                        React.createElement('input', {
                            className: 'add__surname',
                            defaultValue: item.surname,
                            placeholder: 'Ваша фамилия',
                            ref: 'surnameCard'
                        }),
                        React.createElement('input', {
                            className: 'add__adress',
                            defaultValue: item.adress,
                            placeholder: 'Ваш адрес',
                            ref: 'adressCard'
                        }),
                        React.createElement('input', {
                            className: 'add__tel',
                            defaultValue: item.tel,
                            placeholder: 'Ваш телефон',
                            ref: 'telCard'
                        }),
                        React.createElement('input', {
                            className: 'add__email',
                            defaultValue: item.email,
                            placeholder: 'Ваша фамилия',
                            ref: 'emailCard'
                        }),
                        React.createElement(
                            'select',
                            {
                                className: 'add__sex',
                                placeholder: 'Ваша группа',
                                ref: 'sexCard'
                            },
                            React.createElement('option', { value: '' }),
                            React.createElement(
                                'option',
                                { value: 'male' },
                                'male'
                            ),
                            React.createElement(
                                'option',
                                { value: 'female' },
                                'female'
                            )
                        ),
                        React.createElement(
                            'button',
                            {
                                className: 'add__btn',
                                onClick: _this.onBtnClickHandler.bind(_this, index),
                                ref: 'alert_button'
                            },
                            'Изменить'
                        )
                    )
                );
            } else {
                contactContainer = React.createElement(
                    'div',
                    { className: 'cards', ref: 'carder', key: index },
                    React.createElement(
                        'p',
                        { className: 'card__name' },
                        'Имя: ',
                        item.name
                    ),
                    React.createElement(
                        'p',
                        { className: 'card__surname' },
                        'Фамилия: ',
                        item.surname
                    ),
                    React.createElement(
                        'p',
                        { className: 'card__adress' },
                        'Адрес: ',
                        item.adress
                    ),
                    React.createElement(
                        'p',
                        { className: 'card__tel' },
                        'Телефон: ',
                        item.tel
                    ),
                    React.createElement(
                        'p',
                        { className: 'card__email' },
                        'Email: ',
                        item.email
                    ),
                    React.createElement(
                        'button',
                        {
                            onClick: _this.edit.bind(_this, index) },
                        'Edit'
                    ),
                    React.createElement(
                        'button',
                        {
                            onClick: _this.remove.bind(_this, index) },
                        'Удалить'
                    )
                );
            }
            return contactContainer;
        });
        return React.createElement(
            'div',
            { className: 'card' },
            conact_card
        );
    }
});

var FilterOptions = React.createClass({
    displayName: 'FilterOptions',

    getInitialState: function getInitialState() {
        return {
            data: this.props.data
        };
    },
    handleChange: function handleChange(e) {
        var val = e.target.value;
        if (val != "") {
            var filteredData = this.props.data.filter(function (item) {
                return item.sex === val;
            });
            this.setState({ data: filteredData });
        } else {
            this.setState({ data: this.props.data });
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'select',
                { id: 'sex', onChange: this.handleChange },
                React.createElement('option', { value: '' }),
                React.createElement(
                    'option',
                    { value: 'male' },
                    'male'
                ),
                React.createElement(
                    'option',
                    { value: 'female' },
                    'female'
                )
            ),
            React.createElement(Card, { data: this.state.data })
        );
    }
});

var contacs = [{
    name: 'Ian',
    surname: 'Gallagher',
    adress: 'abc sjda',
    tel: '+134554334',
    email: 'goog@gmail.com',
    sex: 'male'
}, {
    name: 'Fiona',
    surname: 'Gallagher',
    adress: 'abc sjda',
    tel: '+134554334',
    email: 'trolo@gmail.com',
    sex: 'female'
}];
window.events = new EventEmitter();

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
