const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    render() {
        return (
            <div className="root-style">
                <h1 style={{marginLeft: '50%'}}>Hello!</h1>
                <p>This is a simple boiler-plate with:</p>
                <ul>
                    <li>Babel 7</li>
                    <li>Webpack 4</li>
                    <li>React 16</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))