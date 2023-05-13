import { RadioButtonGroup } from "../radio-button/index.jsx";

const TaskStrategicVotingFormP1 = ({ taskData, formRef }) => {
  const radioList = [
    { value: "strongly-agree", label: "Strongly Agree" },
    { value: "agree", label: "Agree" },
    { value: "neutral", label: "Neutral" },
    { value: "disagree", label: "Disagree" },
    { value: "strongly-disagree", label: "Strongly Disagree" },
  ];

  return (
    <div className="p-4">
      <form ref={formRef}>
        <h1>Task Strategic Voting (1)</h1>
        <p className="italic text-left">
          In this section of the survey, you are going to participate in a mock
          election featuring hypothetical candidates. Imagine for example that
          these candidates compete in the primaries. First, we will ask you to
          answer a few questions about your opinion on various political issues.
          Similar to the popular vote advice application Election Compass USA,
          we will compute how much your position on these issues overlaps with
          each of the candidates. After being able to view some pre-election
          poll results, we ask you to cast your vote for one of the candidates.
        </p>
        <div className="task-questions mt-4">
          <p className="italic text-left font-bold mb-4">
            In order to match you to the candidates running in the primaries,
            please state how much you agree or disagree with the following
            statements.
          </p>
          <div className="task-question" tabIndex={0}>
            {taskData.statements
              .sort(() => Math.random() - 0.5)
              .map(({ key, content }, index) => {
                const charIndex = String.fromCharCode(97 + index);
                return (
                  <div key={charIndex} className="form-control">
                    <p className="text-left">
                      {charIndex}. {content}
                    </p>
                    <div className="task-radio-list">
                      <RadioButtonGroup
                        required
                        autoFocus={index === 0}
                        options={radioList}
                        name={"statement-" + key}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskStrategicVotingFormP1;
