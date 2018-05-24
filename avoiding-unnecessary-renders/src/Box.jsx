import React from 'react'

// class Box extends React.Component {
class Box extends React.PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   const labelChanged = nextProps.label !== this.props.label;
  //   const colorChanged = nextProps.color !== this.props.color;
  //   const valueChanged = nextProps.value !== this.props.value;
  //   return labelChanged || colorChanged || valueChanged;
  // }

  render() {
    const {label, color, value} = this.props;

    console.log(`[Box.render] rendering box ${color}`);

    const style = {
      color,
      border: `1px solid ${color}`,
      padding: '15px',
      margin: '15px',
      display: 'inline-block'
    };

    return (
      <div className="Box" style={style}>
        <p>{label}</p>
        <span className="BoxValue">{value}</span>
      </div>
    );
  }
}

export default Box;