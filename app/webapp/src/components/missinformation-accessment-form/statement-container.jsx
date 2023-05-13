const StatementContainer = ({
  statement,
  statementId,
  speaker,
  year,
  index,
}) => {
  return (
    <div className="container mx-auto w-full mt-12">
      <div className="w-full rounded border border-black-500 p-4">
        <h2 className="text-left">Statement: </h2>
        <p className="text-left">{statement}</p>
        <p className="text-right text-sm italic">
          By {speaker} in {year}
        </p>
      </div>
      <div className="flex justify-between">
        {[
          {
            value: "false",
            label: "False",
          },
          {
            value: "in-between",
            label: "In between",
          },
          {
            value: "true",
            label: "True",
          },
        ].map(({ value, label }, radioIndex) => (
          <div
            key={value}
            className="container w-1/3 py-10 flex flex-col content-center"
          >
            <input
              autoFocus={index === 0 && radioIndex === 0}
              type="radio"
              className="radio mx-auto checked:bg-red-500"
              id={`${statementId}-false`}
              name={statementId}
              value={value}
              required
            />
            <label htmlFor={`${statementId}-false`}>{label}</label>
          </div>
        ))}
      </div>
      <div className="container mx-auto w-full">
        <h2 className="text-left"> Judgement justification:</h2>
        <textarea
          required
          className="resize-none input h-20 input-bordered w-full"
          name={`${statementId}-judgement-justification`}
          rows="5"
          placeholder="Please provide a justification for your judgement"
        ></textarea>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default StatementContainer;
