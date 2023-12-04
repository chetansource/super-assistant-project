"use client";
import { useState } from "react";
// import CategorizeForm from "@/components/CategorizeForm";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SelectQuestionType from '@/components/SelectQuestionType'

export default function Home() {
  const [showCategorizeForm, setShowCategorizeForm] = useState(false);
  const [quizTitle, setQuizTitle] = useState("Untitled Quiz");

  const handleAddButtonClick = () => {
    setShowCategorizeForm(true);
  };

  const handleCloseButtonClick = () => {
    setShowCategorizeForm(false);
  };

  const handleTitleChange = (e) => {
    setQuizTitle(e.target.innerText);
  };

  return (
    <div className="bg-white">
      <div className="bg-gray-400 px-8 py-4 flex justify-between items-center rounded-lg m-4">
        <div
          contentEditable
          onBlur={handleTitleChange}
          suppressContentEditableWarning={true}
          className="font-bold cursor-text text-lg"
        >
          {quizTitle}
        </div>
        <div className="space-x-8 flex flex-row">
          <SelectQuestionType/>
          <button className="btn">
            <RemoveRedEyeIcon fontSize="large" />
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
