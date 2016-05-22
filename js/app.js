/**
 * Created by netkacila on 16.05.16.
 */

var myNews = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Прохор Рашев',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

var Article = React.createClass({
    propTypes: {
        data:   React.PropTypes.shape({
         author:   React.PropTypes.string.isRequired,
         text:  React.PropTypes.string.isRequired,
         bigText:   React.PropTypes.string.isRequired
        })
    },
    getInitialState: function() {
    return {
        visible: false
        };
    },
    render: function() {
    var author = this.props.data.author,
    text = this.props.data.text,
    bigText = this.props.data.bigText,
    visible = this.state.visible;

    return (
        <div className="article">
            <p className="news__author">{author}:</p>
            <p className="news__text">{text}</p>
            <a href="#" className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
            <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
        </div>
    )
    }
});


var News = React.createClass({
    propTypes:  {
        data:   React.PropTypes.array.isRequired
    },
    getInitialState: function() {
        return {
            counter: 0
            }
    },

    render: function(){
        var data = this.props.data;
        var newsTemplate;
        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                        <div key={index}>
                            <Article data={item} />
                        </div>
                )
            });
        }else {
            newsTemplate = <p>К сожаению новостей нет</p>
        }
        return  (
          <div className="news">
              {newsTemplate}
            <strong
                  className={'news__count ' + (data.length > 0 ? '':'none') }
                  onClick={this.onTotalNewsClick}>
                  Всего новостей: {data.length}
            </strong>

          </div>
        );
    }
});

var Add = React.createClass({
    componentDidMount:  function(){
      ReactDOM.findDOMNode(this.refs.myTestInput).focus();
    },
    componentWillReciveProps: function(nextProps){
      this.setState({
          LikesIncreasing: nextProps.LikeCount > this.props.likeCount
      });
    },
    OnClickButton: function(e){
        console.log(this.refs);
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    },

    render: function() {
        return (
            <form className='add cf'>
                    <input
                      type='text'
                      className='add__author'
                      defaultValue=''
                      placeholder='Ваше имя'
                      ref='author'
                    />
                    <textarea
                      className='add__text'
                      defaultValue=''
                      placeholder='Текст новости'
                      ref='text'
                    ></textarea>
                    <label className='add__checkrule'>
                      <input type='checkbox' defaultChecked={false} ref='checkrule' />Я согласен с правилами
                    </label>
                    <button
                      className='add__btn'
                      onClick={this.onBtnClickHandler}
                      ref='alert_button'>
                      Показать alert
                    </button>
                  </form>
             );
    },

});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Add />
                <h3>Новости</h3>
                <News data={myNews} /> {/*WOW  странно пишутся коменты */}
            </div>
        );
    }
});



ReactDOM.render(
    <App />,
    document.getElementById('root')
);