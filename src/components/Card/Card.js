import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <img src={this.props.poster} alt="poster" style={{ height: 300, width: 200 }} />
                <div className="datos">
                    <p>{this.props.name}</p>
                    <p>{this.props.estreno}</p>
                </div>
            </div>
        )
    }
}

export default Card;