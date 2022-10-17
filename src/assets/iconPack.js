import React, {Component} from 'react';

class IconPack extends Component {
    static defaultProps = {
        btn: "",
        pos: "left"
      }
    constructor(props) {
        super(props);
        this.state = {
            IconPicker: '',
            pos: 'left'
        }; 
    }

    componentDidMount(){
        this.setState({pos: this.props.pos});
        this.selectIconPicker();
    }
    
    selectIconPicker = () => {
        switch (this.props.icon) {
            case 'back': 
                this.setState({IconPicker: <Back/>}); 
                break;
            case 'close': 
                this.setState({IconPicker: <Close/>}); 
                break;
            default:
                this.setState({IconPicker: ''});
                break;
        }
    }
    

    render() {
        console.log();
        return ( <div className={ this.props.btn === '0' ? 'icon ' + this.props.icon + ' ' + this.state.pos : 'icon ' + this.props.icon + ' btn' + ' ' + this.state.pos  }>{this.state.IconPicker}</div> )
    }
}

class Back extends Component {
    render() {
        return <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.3011 16.7368L19.566 25.9986C19.6188 26.0512 21.0877 24.5777 21.0388 24.5289L12.5088 16.002L21.0378 7.47504C21.1474 7.36569 19.6589 5.91064 19.565 6.00433L10.3001 15.2661C9.8998 15.6674 9.8998 16.3364 10.3011 16.7368Z"
                fill="#9B9B9B"/>
        </svg>
    }
}


class Close extends Component {
  render() {
      return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3334 8.55335L23.4467 6.66669L16 14.1134L8.55335 6.66669L6.66669 8.55335L14.1134 16L6.66669 23.4467L8.55335 25.3334L16 17.8867L23.4467 25.3334L25.3334 23.4467L17.8867 16L25.3334 8.55335Z" fill="#9B9B9B"/>
      </svg>
      
  }
}

export default IconPack;