/*
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BaseFrontend,
  OnboardingComponent,
  LoadingScreen,
} from "./components/core_components.jsx";
import { useMephistoTask, ErrorBoundary } from "mephisto-task";
import {
  useAnnotatorTracker,
  ActivityTrackerDisclosure,
} from "@annotated/annotator-tracker";

/* ================= Application Components ================= */

function MainApp() {
  const {
    blockedReason,
    blockedExplanation,
    isPreview,
    isLoading,
    initialTaskData,
    handleSubmit,
    handleMetadataSubmit,
    handleFatalError,
    isOnboarding,
  } = useMephistoTask();

  if (!isPreview) {
    useAnnotatorTracker(handleMetadataSubmit, isLoading, 5000);
  }

  if (blockedReason !== null) {
    return (
      <section className="hero is-medium is-danger">
        <div className="hero-body">
          <h2 className="title is-3">{blockedExplanation}</h2>{" "}
        </div>
      </section>
    );
  }
  if (isPreview) {
    return (
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <div className="title is-3">Target Clicking Task</div>
          <div className="subtitle is-4">
            <p>
              You will be asked to click on as many <b>red targets</b> as you can in 90 seconds. 
              Please first fill the small information form about your 
              background in video games by selecting the appropriate check-box. 
              After you do that, the clicking task will start.
            </p>
            <p>
              We are conducting an academic study about mouse control and video game background. 
              We need to understand if there is a difference in performance on the clicking task
              based on background knowledge of video games. We will also record your mouse clicks
              to try and assess your performance. You will receive the credit for
              performing our task. Information sheet:{" "}
              <a
                href={"http://143.244.201.53:9000/infoSheet/"}
                target={"_blank"}
              >
                http://143.244.201.53:9000/infoSheet/
              </a>
              .
            </p>
          </div>
          <ActivityTrackerDisclosure title={"Data we will collect"}>
            <dl>
              <dd>
                - We will record the answers you provide to the questions after
                providing each answer.
              </dd>
              <dd>
                - We will track various online behaviours related to your
                activity on our study’s web page, including how long you spend
                on each task, the mouse clicks you make and the quantity of
                scrolling you do on each page, and so forth.
              </dd>
              <dd>
                - We will collect some demographic information about you to
                enable a picture of our participant group as a whole. When you
                are completing your tasks, for example, we may collect your
                location data, age group, etc.
              </dd>
              <dd>
                - We will also collect information about your digital
                environment like your device version, operating system, browser
                version, IP addresses and cookie data, etc.
              </dd>
            </dl>
          </ActivityTrackerDisclosure>
        </div>
      </section>
    );
  }
  if (isLoading || !initialTaskData) {
    return <LoadingScreen />;
  }
  if (isOnboarding) {
    return <OnboardingComponent onSubmit={handleSubmit} />;
  }

  return (
    <div>
      <ErrorBoundary handleError={handleFatalError}>
        <BaseFrontend
          taskData={initialTaskData}
          onSubmit={handleSubmit}
          isOnboarding={isOnboarding}
          onError={handleFatalError}
        />
      </ErrorBoundary>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
