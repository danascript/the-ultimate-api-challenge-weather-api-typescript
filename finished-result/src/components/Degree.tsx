const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <>
    <span>
      {temp}
      <sup>o</sup>
    </span>
  </>
)

export default Degree
