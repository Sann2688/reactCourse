import './Filter.css';

function Filter (props) {
    const selectYear = (event) => {
        props.onFilterApply(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter</label>
                <select value={props.selectedYear} onChange={selectYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;