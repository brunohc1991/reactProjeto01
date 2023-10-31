import './styles.css'

export const TextInput = (props) => {
  const { searchValue, handleChange } = props
  return (
    <input className='text-input'
    onChange={handleChange}
    value={searchValue}
    type='search' /> 
  )
}