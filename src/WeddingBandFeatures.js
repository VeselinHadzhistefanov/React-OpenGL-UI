function WeddingBandFeatureSelector(props) {
  let { name, description, options } = props

  let radioButtons = options.map(option => {
    option = option.capitalizeFirstSymbol()
    return (
      <div key={option}>
        <input type="radio" id={option} form={name} name={name} value={option}/>
        <label htmlFor={option}>{option}</label>
      </div>
    );
  });

  return (
    <form id={name} onClick={onEvent}>
      <fieldset form={name}>
        <legend>{description}</legend>
        <div style={{ textAlign: "start" }}>
          {radioButtons}
        </div>
      </fieldset>
    </form>
  );
}

function onEvent(event) {
  console.log(event.target)
  const data = new FormData(event.target.form)
  console.log(event)
}

String.prototype.capitalizeFirstSymbol = function () {
  return this[0].toUpperCase() + this.substring(1)
}

export { WeddingBandFeatureSelector }