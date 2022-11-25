import { ChangeEvent } from 'react'

import Header from './Header'
import Suggestions from './Suggestions'

import { optionType } from './../types/index'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => (
  <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
    <Header />

    <div className="relative flex mt-10 md:mt-4">
      <input
        type="text"
        value={term}
        className="px-2 py-1 rounded-l-md border-2 border-white"
        onChange={onInputChange}
      />

      <Suggestions options={options} onSelect={onOptionSelect} />

      <button
        className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        search
      </button>
    </div>
  </section>
)

export default Search
