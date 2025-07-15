import { useState, useRef, MouseEvent, RefObject, useEffect } from "react";
import { motion } from "framer-motion";

const ScratchCard = () => {
  const [clipPaths, setClipPaths] = useState<string[]>([]); // 存儲每次刮開的區域
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const scratchCardRef: RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null); // 用來取得遮罩區域的位置信息

  useEffect(() => {
    scratchCardRef.current?.focus();
  }, []);

  const handleMouseDown = (event: MouseEvent) => {
    setIsDragging(true);
    updateClipPath(event);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      updateClipPath(event);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateClipPath = (event: MouseEvent) => {
    if (scratchCardRef.current) {
      const boundingRect = scratchCardRef.current.getBoundingClientRect();
      const offsetX = event.clientX - boundingRect.left; // 計算滑鼠在區域內的 X 座標
      const offsetY = event.clientY - boundingRect.top; // 計算滑鼠在區域內的 Y 座標

      console.log(offsetX, offsetY);

      // 每次滑鼠移動都更新一個小的圓形區域來刮開
      setClipPaths((prevPaths) => [
        ...prevPaths,
        `circle(30px at ${offsetX}px ${offsetY}px)`, // 調整刮開區域大小，30px 為每次刮開的圓形大小
      ]);
    }
  };

  return (
    <div
      ref={scratchCardRef} // 參考用於計算滑鼠相對位置
      style={{ position: "relative", width: "300px", height: "300px" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // 當滑鼠移出區域時停止拖動
    >
      {/* 底層內容 */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundColor: "#FFEB3B", // 底層資訊的背景
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          zIndex: 1,
        }}
      >
        🎉 恭喜，你中獎了！🎉
      </motion.div>

      {/* 上方遮罩 */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ccc", // 類似刮刮樂的灰色遮罩
          borderRadius: "10px",
          zIndex: 2,
          clipPath: clipPaths.join(", "), // 將所有刮開的圓形區域連接起來
        }}
      >
        {!isDragging && (
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "18px",
              color: "#000",
            }}
          >
            點擊並拖動來刮開！
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ScratchCard;
