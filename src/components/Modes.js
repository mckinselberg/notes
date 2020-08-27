import React, { Component } from "react";
import modes from './data.js';
//import SelectBox from './SelectBox.js';

const title = "Exploring Modes"

class Modes extends Component {
    constructor() {
        super();
        this.state = {
            //notes: ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'],
            sharps: ['C','C#','D','D#','E','F/E#','F#','G','G#','A','A#','B'],
            flats: ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'],
            //notes: [],
            accidentals: '#', // or b
            modes: modes,
            title: title,
            submitValue: 'C' //default
        };
        this.handleChange = this.handleChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            submitValue:e.target.value
        });
        //console.log(e.target.value);
    }
    selectBox() {
        const notes = this.state.accidentals === '#' ? this.state.sharps : this.state.flats; //this.state.notes;
        return(
            <select name="notes" onChange={this.handleChange}>
                {notes.map((note)=>{
                    return <option key={note} value={note}>{note}</option>
                })}
            </select>
        );    
    }
    onRadioChange(e) {
        console.log(e.target.value)
        this.setState({
            accidentals:e.target.value
        });
        this.forceUpdate();
    }
    radioButton() {
        return(
            <div>
                # <input type="radio" name="accidental" value="#" onChange={this.onRadioChange} /> ||
                b <input type="radio" name="accidental" value="b" onChange={this.onRadioChange} checked />
            </div>
        )
    }
    buildScale(steps) {
        const startingNote = this.state.submitValue;
        const notes = this.state.accidentals === '#' ? this.state.sharps : this.state.flats; //this.state.notes;
        const notesLength = notes.length;
        const startingIndex = notes.indexOf(startingNote);
        //console.log(startingIndex);
        
        //console.log(notes[startingIndex]);
        //console.log(notes[startingIndex]);
        let counter = startingIndex;
        let scale = [notes[startingIndex]];
        for (let i=0;i<steps.length;i++) {
            counter += steps[i]
            if (counter < notesLength) {
                //console.log(notes[counter]);
                scale.push(notes[counter])
                //console.log(counter);           
            } else {
                //console.log(counter-notesLength);
                scale.push(notes[counter-notesLength]);
            }
        }
        //console.log(scale);
        //return scale;

        /*
        for (let i = 0; i < scale.length; i++) {
            return (<span>{scale[i]}</span>);
        }

        scale.map((noteName)=>{
            //return noteName;       
        })
        */
       //scale.forEach((element)=>{ return (element); })
       return scale;
    }
    render() {
        return (
            <>
                <div>{this.state.title}</div>
                <br/>
                {this.selectBox()}
                <br/>
                {this.radioButton()}
                <br/>
                {this.state.modes.map((item)=>{
                    return (
                        <div key={item.steps}>
                            <div>{item.mode}</div>
                            <div>{item.name}</div>
                            <div>
                                {this.buildScale(item.steps).map((note,i)=>{
                                    //Alternate colors and add dashes. Note: this.buildScale(item.steps) returns an array
                                    return (
                                        <span key={i} style={{color:i % 2 === 0 ? 'blue' : 'blue'}}>
                                            {note + (i === this.buildScale(item.steps).length - 1 ? '' : '--')}
                                        </span>
                                    );
                                })}
                            </div>
                            <br/>
                        </div>
                    );
                })}
            </>
        )
    }
}

export default Modes;