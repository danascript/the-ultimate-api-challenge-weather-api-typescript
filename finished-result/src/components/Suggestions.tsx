import { optionType } from './../types/index'

type componentProps = {
  options: []
  onSelect: (option: optionType) => void
}

const Suggestions = ({ options, onSelect }: componentProps): JSX.Element => (
  <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
    {options.map((option: optionType, index: number) => (
      <li key={option.name + '-' + index}>
        <button
          className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
)

export default Suggestions
