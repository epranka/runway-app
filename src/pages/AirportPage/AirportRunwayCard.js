import clsx from "clsx";
import React from "react";
import { ucfirst } from "../../helpers";

const round = (value) => Math.round(value).toFixed(0);

const colorMap = {
  headwind: "#1fa71f",
  crosswind: "#dea109",
  tailwind: "black",
};

const backgroundMap = {
  headwind: "#74da74",
  crosswind: "#f5ca5f",
  tailwind: "transparent",
};

const AirportRunwayCard = (props) => {
  const { active } = props;
  return (
    <div className="p-8">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <div
            className="px-3 py-1 border border-gray-500 text-lg rounded-md font-bold"
            style={{ background: backgroundMap[active?.status] }}
          >
            {props.ident}
          </div>
          <div
            className={clsx("ml-5", {
              "font-bold": active?.status !== "tailwind",
            })}
            style={{
              color: colorMap[active?.status],
            }}
          >
            {ucfirst(active?.status ?? "Variable")}
          </div>
        </div>
        <div>
          {active?.headtailwindType ? (
            <div className="mb-2">
              <div className="flex justify-between">
                <span className="">{ucfirst(active.headtailwindType)}:</span>{" "}
                <span>
                  <span className="font-mono font-semibold">
                    {round(active.headtailwind)}
                  </span>{" "}
                  <span className="text-sm">kts</span>
                </span>
              </div>
              <div className="flex justify-between">
                <span className="">Crosswind:</span>{" "}
                <span>
                  <span className="font-mono font-semibold">
                    {round(active.crosswind)}
                  </span>{" "}
                  <span className="text-sm">kts</span>
                </span>
              </div>
              <div style={{ marginTop: -10 }}>
                <span className="text-xs font-bold">
                  Crosswind from {active.crosswindSide}
                </span>
              </div>
            </div>
          ) : null}
          <div className="flex justify-between">
            <span className="">Heading:</span>{" "}
            <span>
              <span className="font-mono font-semibold">
                {round(props.heading)}
              </span>{" "}
              <span className="text-sm">degT</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="">Length:</span>{" "}
            <span>
              <span className="font-mono font-semibold">
                {round(props.length)}
              </span>{" "}
              <span className="text-sm">ft</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="">Width:</span>{" "}
            <span>
              <span className="font-mono font-semibold">
                {round(props.width)}
              </span>{" "}
              <span className="text-sm">ft</span>
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="block">Inverted mark:</span>{" "}
            <span className="ml-5">
              <span className="block font-mono text-sm border border-gray-500 rounded-md px-2">
                {props.invertMark}
              </span>{" "}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="">ILS:</span>{" "}
            <span>
              <span className="font-mono font-semibold">
                {props.ils ? (
                  <span>{props.ils.freq + "/" + props.ils.course}&deg;</span>
                ) : (
                  "No"
                )}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportRunwayCard;
