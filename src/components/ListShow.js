import React from "react";

class ListShow extends React.Component {
    render() {
        return (

            <li>
                <span className="expenses">{this.props.data.nowDate}</span>
                <span className="price">{this.props.data.price}</span>
                <span className="status" style={{color: this.props.data.delete === false ? "green" : "red",}}>{this.props.data.delete === false ? "Added" : "Removed"}</span>
                {/* <button className="delete" onClick={(e) => {
                    e.stopPropagation();
                    this.props.delete(this.props.index)
                }}>-</button> */}
                
            </li>

        )
    }
}
export default ListShow;