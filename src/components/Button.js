import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    static get defaultProps() {
        return {
            enabled: true,
            visible: true,
            label: '',
            icon: ''
        };
    }

    constructor(props) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    render() {
        const className = this._getClassName();

        return (
            <button className={ className } onClick={ this._onClick }>
                { this.props.label }
            </button>
        );
    }

    _onClick(e) {
        if (this.props.enabled) {
            this.props.onClick(e);
        }
    }

    _getClassName() {
        let className = this.props.className || 'button';

        if (!this.props.enabled) {
            className = `${className} disabled`;
        }

        if (!this.props.visible) {
            className = `${className} hidden`;
        }

        return className;
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    enabled: PropTypes.bool,
    visible: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.node
};

export default Button;
