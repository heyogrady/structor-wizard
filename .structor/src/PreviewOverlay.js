var React = require('react');
var ReactDOM = require('react-dom');

var PageForDesk = React.createClass({

    componentDidMount: function() {
        this._mountNode = document.createElement('div');
        this._mountNode.style['z-index'] = '9999';
        document.body.appendChild(this._mountNode);
        ReactDOM.render(this._overlay, this._mountNode);
    },

    componentWillUnmount: function() {
        ReactDOM.unmountComponentAtNode(this._mountNode);
        this._mountNode = null;
    },

    componentDidUpdate: function() {
        if (this._mountNode) {
            ReactDOM.render(this._overlay, this._mountNode);
        }
    },

    handleClose: function(){
        if(this.props.onClose){
            this.props.onClose();
        }
    },

    handleDelete: function(){
        if(this.props.onDelete){
            this.props.onDelete();
        }
    },

    render: function() {
        if (this.props.show) {
            var style = {
                position: 'relative',
                padding: '2em',
                height: '100%'
            };
            var overlayStyle = {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '2em',
                'zIndex': 9999
            };
            const closeButtonStyle = {
                position: 'absolute',
                top: '1em',
                right: '1em',
                height: '1em',
                color: '#224466',
                verticalAlign: 'middle',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: '16px'
            };
            const deleteButtonStyle = {
                position: 'absolute',
                bottom: '1em',
                right: '1em',
                height: '1em',
                color: '#770A0B',
                verticalAlign: 'middle',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: '16px'
            };

            this._overlay = (
                <div style={overlayStyle}>
                    <div style={{position: 'relative', width: '100%', height: '100%', backgroundColor: '#fff', borderRadius: '5px'}}>
                        <div style={style}>
                            {this.props.children}
                            <span
                                style={deleteButtonStyle}
                                onClick={this.handleDelete}>[Delete]</span>
                            <span
                                style={closeButtonStyle}
                                onClick={this.handleClose}>[Close]</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            this._overlay = (
                <span></span>
            );
        }
        return (
            <span></span>
        );
    }

});

module.exports = PageForDesk;
