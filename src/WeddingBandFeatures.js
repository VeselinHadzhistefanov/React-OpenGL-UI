function WeddingBandSettingStyle() {
  let values = ["Solitaire", "Pave", "Halo", "Three Stone", "Bezel", "Tension", "Cluster"]
  let description = "Choose your ring's diamond setting style:"

  let radioButtonOptions = values.map(value =>
    <label>
      <input type="radio" name="settingStyle" value={value} />
      {value}
      <br></br>
    </label>
  );

  return (
    <fieldset>
      <legend>{description}</legend>
      <p style={{textAlign: "start"}}>
        {radioButtonOptions}
      </p>
    </fieldset>
  );
}

function WeddingBandFeature2() {
  return (
    <fieldset>
      <legend>Choose your ring's diamond setting style:</legend>

      <div>
        <input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">Scales</label>
      </div>

      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
      </div>
    </fieldset>
  );
}

function WeddingBandFeature3() {
  return (
    <fieldset>
      <legend>Choose your ring's diamond setting style:</legend>

      <div>
        <input type="checkbox" id="scales" name="scales" checked onChange="" />
        <label for="scales">Scales</label>
      </div>

      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
      </div>
    </fieldset>
  );
}

export { WeddingBandSettingStyle, WeddingBandFeature2, WeddingBandFeature3 }