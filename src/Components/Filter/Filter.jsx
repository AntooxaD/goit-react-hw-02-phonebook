import PropTypes from 'prop-types';
// import { Component } from 'react';

const Filter = ({ value, onChange }) => (
    <label>
        <h3> Find contact by name</h3>
        <input type="name" value={value} onChange={onChange} />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;

// class Filter extends Component {
//     static propTypes = {
//         filter: PropTypes.string.isRequired,
//     };
//     changeFilter = e => {
//         this.setState({ filter: e.currentTarget.value });
//     };
//     render() {
//         const { filter, changeFilter } = this.props;
//         return (
//             <div>
//                 <h3>Find contact by name</h3>
//                 <input
//                     type="text"
//                     name="filter"
//                     required
//                     value={filter}
//                     onChange={changeFilter}
//                 />
//             </div>
//         );
//     }
// }
// export default Filter;
