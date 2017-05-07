import React, { Component } from 'react';
import {
	Intro,
	IntroCopy,
    Marquee,
    TriangleGrid,
    Overlap,
} from 'components';
import style from './ParallaExample.scss';

export default class ParallaxExample extends Component {

    render() {
        return (
            <div className={style.root}>
                <Intro />
                <IntroCopy />
                <Marquee />
                <Overlap />
                <TriangleGrid />
            </div>
        );
    }

}
