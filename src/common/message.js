import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

const wrapperStyle = {
    position: 'fixed',
    top: '30px',
    textAlign: 'center',
    height: 'auto',
    margin: '0 auto',
    width: '100%'
};

const contentStyle = {
    padding: '8px 12px',
    backgroundColor: '#FFF',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    borderRadius: '5px',
};

const iconStyle = {
    fontSize: '18px',
    marginRight: '8px'
}

const message = ['info', 'error'].reduce((previous, current) => {
    previous[current] = (content) => {
        let icon = { info: 'info', error: 'times', confirm: 'question' }[current];
        iconStyle.color = {info: '#1890ff', error: '#F44336'}[current];
        let res = <div style={wrapperStyle}>
            <span style={contentStyle}>
                <FontAwesome
                    name={`${icon}-circle`}
                    style={iconStyle} />
                <span>{content}</span>
            </span>
        </div>;

        ReactDOM.render(
            res,
            document.getElementById('_a_message_wrapper')
        );

        setTimeout(() => {
            ReactDOM.render(
                null,
                document.getElementById('_a_message_wrapper')
            );
        }, 5000)
    }

    return previous;
}, {})

export default message;