import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { PaginableContext } from "./paginable/paginable-context.jsx";
import DemographicsForm from "./demographics-form.jsx";
import TaskStrategicVotingFormP1 from "./task-strategic-voting-form/task-strategic-voting-form-p1.jsx";
import TaskStrategicVotingFormP2 from "./task-strategic-voting-form/task-strategic-voting-form-p2.jsx";
import MissinformationAccessmentForm from "./missinformation-accessment-form/index.jsx";

const PaginatedContent = ({ taskData, submit }) => {
  const { currentPage, setCurrentPage, isActionsHidden } =
    useContext(PaginableContext);
  const [order] = Object.entries(taskData)
    .filter(([key]) => key === "order")
    .map(([_, value]) => JSON.parse(value));

  const [submitData, setSubmitData] = useState({});
  const demographicsRef = useRef(null);
  const voting1Ref = useRef(null);
  const voting2Ref = useRef(null);
  const missinformationRef = useRef(null);

  const nextButtonCommonHandler = (ref) => () => {
    const formInstance = ref.current;

    if (!formInstance.reportValidity()) return false;

    const formData = new FormData(formInstance);

    const data = Object.fromEntries(formData.entries());

    setSubmitData((prev) => ({ ...prev, ...data }));

    return true;
  };

  const submitButtonCommonHandler = (ref) => () => {
    const formInstance = ref.current;

    if (!formInstance.reportValidity()) return false;

    const formData = new FormData(formInstance);

    const data = Object.fromEntries(formData.entries());

    const finalData = {
      ...submitData,
      ...data,
    };

    submit(finalData);
    return true;
  };

  const pageOrder = [];
  for (let i = 0; i < order.length; i++) {
    if (order[i] === "voting") {
      pageOrder.push(order[i] + "-1");
      pageOrder.push(order[i] + "-2");
    } else {
      pageOrder.push(order[i]);
    }
  }

  const pageContentList = pageOrder.map((page, index) => {
    const mapping = {
      demographics: {
        content: <DemographicsForm formRef={demographicsRef} />,
        ref: demographicsRef,
      },
      "voting-1": {
        content: (
          <TaskStrategicVotingFormP1
            formRef={voting1Ref}
            taskData={{
              statements: [
                {
                  key: "a",
                  content: "The death penalty should not be used",
                },
                {
                  key: "b",
                  content: "The USA should remain a member of the NATO.",
                },
                {
                  key: "c",
                  content:
                    "The USA should unilaterally decommission all nuclear weapons, and no longer maintain a nuclear deterrent.",
                },
                {
                  key: "d",
                  content: "There should be no net migration to the USA.",
                },
                {
                  key: "e",
                  content: "The USA should give less foreign aid.",
                },
                {
                  key: "f",
                  content:
                    "Cannabis should be legal. Anyone should be free to possess or sell cannabis.",
                },
                { key: "g", content: "Strikes should generally be banned" },
                {
                  key: "h",
                  content: "All women should have the right for an abortion",
                },
                {
                  key: "i",
                  content:
                    "The should be a stronger regulation of weapons in the USA.",
                },
              ],
            }}
          />
        ),
        ref: voting1Ref,
      },
      "voting-2": {
        content: (
          <TaskStrategicVotingFormP2 formRef={voting2Ref} loadingTime={4000} />
        ),
        ref: voting2Ref,
      },
      misinformation: {
        content: (
          <MissinformationAccessmentForm
            taskData={taskData}
            formRef={missinformationRef}
          />
        ),
        ref: missinformationRef,
      },
    };

    const ref = mapping[page].ref;

    return {
      content: mapping[page].content,
      onSubmit:
        index < pageOrder.length - 1
          ? nextButtonCommonHandler(ref)
          : submitButtonCommonHandler(ref),
    };
  });

  const onSubmit = useCallback(() => {
    return pageContentList?.[currentPage]?.onSubmit?.();
  }, [currentPage, pageContentList]);

  const onNext = useCallback(() => {
    const isValidated = onSubmit();

    if (!isValidated) return;

    setCurrentPage((prev) => prev + 1);
  }, [onSubmit, setCurrentPage]);

  const pageContent = useMemo(
    () => pageContentList[currentPage].content ?? <></>,
    [currentPage, pageContentList]
  );

  return (
    <div className="container px-4 py-2">
      {pageContent}
      <div className={`flex justify-end ${isActionsHidden ? "hidden" : ""}`}>
        {currentPage === pageContentList.length - 1 ? (
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={onSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={onNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginatedContent;
