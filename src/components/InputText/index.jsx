import './styles.css'
export const TextInput=({search, handleChange}) => {
    return(
            <input
            className="text-input"
            onChange={handleChange} 
            value={search}
            type='search'/>           
    );
}