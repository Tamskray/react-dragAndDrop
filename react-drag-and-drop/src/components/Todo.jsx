import { React, useState } from "react";

const boardsList = [
  {
    id: 1,
    title: "Todo",
    items: [
      { id: 1, title: "Go to shop" },
      { id: 2, title: "Throw trash" },
      { id: 3, title: "Check smth" },
    ],
  },
  {
    id: 2,
    title: "Check",
    items: [
      { id: 4, title: "Code review" },
      { id: 5, title: "Todo task" },
      { id: 6, title: "List items" },
    ],
  },
  {
    id: 3,
    title: "Done",
    items: [
      { id: 7, title: "Sleep" },
      { id: 8, title: "Eat" },
      { id: 9, title: "Do code" },
    ],
  },
];

function Todo() {
  const [boards, setBoards] = useState(boardsList);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className == "item-board") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  };

  //   const dropHandler = (e, board, item) => {
  //     e.preventDefault();
  //     const currentIndex = currentBoard.items.indexOf(currentItem);
  //     currentBoard.items.splice(currentIndex, 1);
  //     const dropIndex = board.items.indexOf(item);
  //     board.items.splice(dropIndex + 1, 0, currentItem);
  //     setBoards(
  //       boards.map((b) => {
  //         if (b.id === board.id) {
  //           return board;
  //         }
  //         if (b.id === currentBoard.id) {
  //           return currentBoard;
  //         }
  //         return b;
  //       })
  //     );
  //     e.target.style.boxShadow = "none";
  //   };

  const dropCardHandler = (e, board) => {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  };

  return (
    <>
      <div className="flex-content">
        {boards.map((board) => (
          <div
            className="board"
            key={board.id}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
          >
            <div className="board-title">{board.title}</div>
            {board.items.map((item) => (
              <div
                className="item-board"
                key={item.id}
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                //   onDrop={(e) => dropHandler(e, board, item)}
              >
                {item.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo;
