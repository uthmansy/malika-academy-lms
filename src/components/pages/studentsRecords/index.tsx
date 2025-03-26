import React, { useState } from "react";
import { Steps, List, Button, Typography, Spin } from "antd";
import { useStudentsRecords } from "../../../hooks/useStudentsRecords";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import AllStudentsRecords from "./AllStudentsRecords";

const { Step } = Steps;
const { Text } = Typography;

const StudentsRecords: React.FC = () => {
  // const { termFilter, termOptions, handleTermChange } = useFilters();

  const {
    state,
    classes,
    classrooms,
    loadingClasses,
    loadingClassrooms,
    setClass,
    setClassroom,
  } = useStudentsRecords();

  const [currentStep, setCurrentStep] = useState(0);

  // Step titles
  const steps = [{ title: "Select Class" }, { title: "Select Classroom" }];

  return (
    <>
      <div className="flex justify-between mt-8 px-4 mb-10">
        <Button
          icon={<LeftOutlined />}
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 0}
          className="flex items-center"
        >
          Previous
        </Button>

        {currentStep < 3 && (
          <Button
            type="primary"
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={
              currentStep === 0
                ? !state.term
                : currentStep === 1
                ? !state.class
                : !state.classroom
            }
          >
            Next
          </Button>
        )}
      </div>
      <Steps
        current={currentStep}
        className="mb-10 px-4 [&_.ant-steps-item-title]:!text-gray-600 max-w-md"
        responsive
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            className="[&>.ant-steps-item-container>.ant-steps-item-tail]:!top-8"
          />
        ))}
      </Steps>

      <div className="min-h-[300px] px-4">
        {currentStep === 0 && (
          <div>
            {loadingClasses ? (
              <div className="flex justify-center items-center h-48">
                <Spin size="large" />
              </div>
            ) : (
              <div className="grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {classes.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 py-16 flex items-center justify-center border bg-primary text-white font-bold uppercase cursor-pointer"
                    onClick={() => {
                      setClass(item);
                      setCurrentStep(1);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {currentStep === 1 && (
          <div>
            {loadingClassrooms || !state.class ? (
              <div className="flex justify-center items-center h-48">
                <Spin size="large" />
              </div>
            ) : (
              <List
                dataSource={classrooms}
                renderItem={(c) => (
                  <List.Item
                    className={`group p-3 px-10 rounded-lg transition-all cursor-pointer border hover:border-indigo-100 hover:bg-indigo-50 ${
                      state.classroom?.id === c.id
                        ? "!border-indigo-200 !bg-indigo-50"
                        : "border-gray-100"
                    }`}
                    onClick={() => {
                      setClassroom(c);
                      setCurrentStep(2);
                    }}
                  >
                    <Text className="!text-gray-700 group-hover:!text-indigo-600">
                      {c.name}
                    </Text>
                    <RightOutlined className="text-gray-400 group-hover:text-indigo-500" />
                  </List.Item>
                )}
              />
            )}
          </div>
        )}

        {currentStep === 2 && (
          <>
            <div className="w-96 mb-5 text-2xl">
              Veiwing {state.classroom?.name}
            </div>
            <AllStudentsRecords classroomId={state.classroom?.id} />
          </>
        )}
      </div>
    </>
  );
};

export default StudentsRecords;
