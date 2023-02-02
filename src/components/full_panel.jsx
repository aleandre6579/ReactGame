import React, { Component } from 'react';
import styles from '../css_scripts/full_panel.css'

class Full_Panel extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <img class="bg" alt="Me on the computer" src="https://s2.research.com/wp-content/uploads/2021/05/30065549/ranking-1-1014x600.png"></img>
                <div class="container">
                    <h1 class="centered-hor u-text u-text-default u-text-1"> Sports and wellness the way you want it - in one membership</h1>
                    <p class="centered-hor u-large-text u-text u-text-variant u-text-2"> Workout whenever, wherever and however you like – indoors, outdoors and online. Enjoy the most flexible sports and wellness offer in Europe!</p>
                </div>
            </div>
        );
    }
}
 
export default Full_Panel;