import React from "react";
const Form = props => {
  return (
    <div>
      <form onSubmit={props.getWheather}>
        <input type="text" name="city" placeholder="city..." />{" "}
        <input type="text" name="country" placeholder="country..." />
        <button>Get Wheather</button>
      </form>
    </div>
  );
};

export default Form;
// class Form extends Component {
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.props.getWheather}>
//           <input type="text" name="city" placeholder="city..." />
//           <input type="text" name="country" placeholder="country..." />
//           <button>Get Wheather</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
