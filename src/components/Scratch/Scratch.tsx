import dayjs from "dayjs";
import ScratchArea from "./ScratchArea";

const Scratch = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col px-6 py-8 border rounded-xl space-y-4 items-center">
      <div className="flex flex-col items-center">
        <h2 className="px-6 py-1 w-fit font-bold text-3xl text-center border rounded-md bg-gray-400 bg-opacity-30">
          測試刮刮樂
        </h2>
        <p className="text-sm mt-1">相信你的運氣，提早退休不是夢！</p>
      </div>
      <div>
        ↓↓↓↓↓↓↓↓↓↓{" "}
        <span className="text-lg font-bold border p-1 rounded-md">刮</span>{" "}
        ↓↓↓↓↓↓↓↓↓↓
      </div>
      {children}
      <div>
        ↑↑↑↑↑↑↑↑↑↑{" "}
        <span className="text-lg font-bold border p-1 rounded-md">刮</span>{" "}
        ↑↑↑↑↑↑↑↑↑↑
      </div>
      <p className="w-full mt-6 text-right text-xs">
        未來期限: {dayjs().format("YYYY-MM-DD")}
      </p>
    </div>
  );
};

Scratch.Area = ScratchArea;

export default Scratch;
