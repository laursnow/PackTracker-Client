import React from 'react';
import {connect} from 'react-redux';
import '../App.css'
import AddForm from './add-form';
import {addCard} from '../../redux/actions';

export class ItemCard extends React.Component {
    addCard(text) {
        this.props.dispatch(addCard(text, this.props.index));
    }

    render() {
        const cards = this.props.cards.map((card, index) =>
            <li key={index}>
              {card}
            </li>
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {cards}
                    <li>
                        <AddForm
                            type="card"
                            onAdd={text => this.addCard(text)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}



export default connect()(ItemCard);