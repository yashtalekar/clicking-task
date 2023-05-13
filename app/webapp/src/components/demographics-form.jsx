import { shuffle } from "../utils/array-utils";
import { shuffleComponents } from "../utils/component-utils";
import states from "../utils/states";
import { RadioButtonGroup } from "./radio-button/index.jsx";

const DemographicsForm = ({ formRef }) => {
  const onSliderChange = (event) => {
    const label = document.getElementById("label-political-knowledge-5");
    label.innerHTML = event.target.value + "%";
  };

  const stateOptions = states.map(({ abbreviation, name }) => ({
    value: abbreviation,
    label: name,
  }));

  const demrepOptions = [
    {
      value: "republicans",
      label: "Republicans",
    },
    { value: "democrats", label: "Democrats" },
  ];

  return (
    <div className="p-4">
      <form
        id="demographic-form"
        className="flex flex-col w-full"
        ref={formRef}
      >
        <h1 className="text-bold mb-6">Demographics</h1>

        <div className="demographic-questions mb-5">
          <div className="flex flex-wrap mb-12">
            <div className="form-control w-1/2">
              <label className="input-group">
                <span className="label-text">Age</span>
                <input
                  autoFocus 
                  required
                  type="number"
                  placeholder="Your age"
                  name="age"
                  min="18"
                  max="130"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="input-group">
                <span className="label-text">Gender</span>
                <select required className="select w-full max-w-xs">
                  <option value="">Pick one</option>
                  <option value="female">F</option>
                  <option value="male">M</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
          </div>
          <h3 className=" text-left">
            Regardless of where you currently live, do you usually think of
            yourself as a city person, a suburb person, a small-town person, a
            country or rural persom, or something else?
          </h3>
          <div className="form-control w-1/2 mb-6">
            <RadioButtonGroup
              required
              options={[
                {
                  value: "city",
                  label: "City person",
                },
                { value: "suburb", label: "Suburb person" },
                { value: "small-town", label: "Small town person" },
                { value: "country", label: "Country (or rural) person" },
                {
                  value: "other",
                  label: "Other",
                  textBoxOnSelected: "Specify one",
                },
              ]}
              name="location"
            />
          </div>
          <div className="form-control w-1/2 mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <select required name="state" className="select select-bordered">
                <option value="">Pick one</option>
                {stateOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <h1> Political Interest </h1>
        <div className="political-interest-questions  my-4">
          <h3 className=" text-left">
            How interested would you say you are in politics?
          </h3>
          <div className="form-control w-1/2 mb-6">
            <RadioButtonGroup
              required
              options={[
                {
                  value: "very",
                  label: "Very interested",
                },
                { value: "somewhat", label: "Somewhat interested" },
                { value: "not-very", label: "Not very interested" },
                { value: "not-at-all", label: "Not at all interested" },
              ]}
              name="interest"
            />
          </div>
        </div>

        <div className="divider"></div>
        <h1> Political Knowledge </h1>
        <div className="political-knowledge-questions my-4">
          <h3 className=" text-left">
            Now we have a set of questions concerning about politics. We are
            interested in the guesses people make when they do not know the
            answer to a question. We will ask you serval questions. Some may be
            easy, but others are meant to be so difficult that you will have to
            guess. In fact, for some of these questions, if you answer
            correctly, we will know that you probably looked up the answer.
            Please do not look up the answers you do not know. Instead, please
            just make your best guess. Will you please promise to try your best
            without looking up any answers? Or do you not want to make that
            promise?
          </h3>
          <div className="form-control  mb-6">
            <RadioButtonGroup
              required
              options={[
                {
                  value: "yes",
                  label:
                    "I promise to try my best without looking up any answers",
                },
                { value: "no", label: "I do not want to make that promise" },
              ]}
              name="political-knowledge-1"
            />
          </div>
          {shuffleComponents([
            <div className="form-control mb-6 w-full">
              <p className="text-left">
                Do you happen to know what job or political office is now held
                by Lemanu Peleti Mauga?
              </p>
              <input
                required
                type="text"
                name="political-knowledge-2"
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
            </div>,
            <div className="form-control mb-6 w-full">
              <p className="text-left">
                Do you happen to know what job or political office is now held
                by Kamala D. Harris?
              </p>
              <input
                required
                type="text"
                placeholder="Type here"
                name="political-knowledge-3"
                className="input input-bordered w-full max-w-lg"
              />
            </div>,
          ])}

          <div className="form-control  mb-6">
            <h3 className=" text-left">
              Whose responsibility is it to determine if a law is constitutional
              or not?
            </h3>
            <RadioButtonGroup
              required
              options={shuffle([
                {
                  value: "president",
                  label: "The President",
                },
                { value: "congress", label: "The Congress" },
                { value: "supreme-court", label: "The Supreme Court" },
              ])}
              name="political-knowledge-4"
            />
          </div>

          <div className="form-control mb-6">
            <p className="text-left">
              How much of a majority is required for the U.S. Senate and House
              to override a presidential veto?
            </p>
            <div className="max-w-sm flex flex-row">
              <input
                required
                type="range"
                min={0}
                max={100}
                defaultValue={0}
                className="range"
                onChange={onSliderChange}
                onInput={onSliderChange}
                name="political-knowledge-5"
              />
              <span className="ml-1" id="label-political-knowledge-5">
                0%
              </span>
            </div>
          </div>

          <div className="form-control  mb-6">
            <h3 className=" text-left">
              Do you happen to know which party had the most members in the
              House of Representatives in Washington before the midterm election
              last November?
            </h3>
            <RadioButtonGroup
              required
              options={shuffle(demrepOptions)}
              name="political-knowledge-6"
            />
          </div>
          <div className="form-control  mb-6">
            <h3 className=" text-left">Which party is more conservative?</h3>
            <RadioButtonGroup
              required
              options={shuffle(demrepOptions)}
              name="political-knowledge-7"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DemographicsForm;
