import { useContext, useEffect, useState } from "react";
import BarChart from "../bar/bar-chart.jsx";
import { RadioButtonGroup } from "../radio-button/index.jsx";
import { PaginableContext } from "../paginable/paginable-context.jsx";
const TaskStrategicVotingFormP2 = ({ formRef, loadingTime }) => {
  const [loading, setLoading] = useState(true);
  const { setIsActionsHidden } = useContext(PaginableContext);
  // set loading to false after {loadingTime} seconds
  useEffect(() => {
    setIsActionsHidden(true);
    setTimeout(() => {
      setLoading(false);
      setIsActionsHidden(false);
    }, loadingTime);
  }, []);

  const candidates = [
    {
      value: "a",
      label: "Candidate A",
    },
    {
      value: "b",
      label: "Candidate B",
    },
    {
      value: "c",
      label: "Candidate C",
    },
  ];
  return (
    <div className="p-4">
      <form ref={formRef}>
        <h1>Task Strategic Voting (2)</h1>
        <p className="task-description"></p>
        <div className="form-control">
          <div className="mb-4">
            <p className="text-left italic">
              Based on your previous responses, we will now compute the issue
              overlap with three candidates running in the primaries. 0% means
              that the candidate’s position is on the extreme opposite compared
              to your own opinion and 100% means that the candidate’s positions
              perfectly match your own responses.
            </p>
          </div>
          {loading ? (
            <div className="p-6">
              <progress className="progress w-56 mx-auto"></progress>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <p className="text-left italic">
                  We calculated the issue overlap with the candidates for you.
                  Here is your personal result:
                </p>
                <div className="min-w-sm max-w-2xl w-full h-96 mx-auto">
                  <BarChart
                    layout={"horizontal"}
                    keys={["value"]}
                    data={[
                      {
                        candidate: "A",
                        value: 10,
                      },
                      {
                        candidate: "B",
                        value: 70,
                      },
                      {
                        candidate: "C",
                        value: 20,
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="mb-4">
                <p className="text-left italic">
                  Next, we are going to present recent polling information on
                  all three candidates and ask you to cast your vote for one of
                  them
                </p>

                <div className="min-w-sm max-w-2xl w-full h-96 mx-auto">
                  <BarChart
                    layout={"vertical"}
                    keys={["value"]}
                    data={[
                      {
                        candidate: "A",
                        value: 96,
                      },
                      {
                        candidate: "B",
                        value: 72,
                      },
                      {
                        candidate: "C",
                        value: 48,
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="mb-4">
                <p className="text-left italic">
                  A polling firm conducted a representative survey to predict
                  support for each candidate. The results are presented in the
                  diagram below
                </p>

                <div className="min-w-sm max-w-2xl w-full h-96 mx-auto">
                  <BarChart
                    layout={"vertical"}
                    keys={["value"]}
                    data={[
                      {
                        candidate: "A",
                        value: 27,
                      },
                      {
                        candidate: "B",
                        value: 38,
                      },
                      {
                        candidate: "C",
                        value: 33,
                      },
                    ]}
                  />
                </div>
                <p className="text-left italic">
                  You have as much time as you need to make up your mind about
                  this election. Click next once you decided which candidate you
                  want to vote for.
                </p>
              </div>

              <div className="form-control">
                <p className="text-left">
                  Please choose which candidate you want to vote for in the
                  election
                </p>
                <RadioButtonGroup
                  required
                  options={candidates}
                  name="candidate"
                />
              </div>
              <div className="form-control">
                <p className="text-left">
                  How certain are you about this decision?
                </p>
                <RadioButtonGroup
                  required
                  options={[
                    {
                      value: "completely-certain",
                      label: "Completely certain",
                    },
                    { value: "very-certain", label: "Very certain" },
                    { value: "somewhat-certain", label: "Somewhat certain" },
                    { value: "not-certain", label: "Not certain at all" },
                  ]}
                  name="certainty"
                />
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskStrategicVotingFormP2;
