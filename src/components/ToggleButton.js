import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleButton } from "../redux/slices/toogleSlice";

const ToggleButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();

  const toggleSelected = () => {
    setIsSelected(!isSelected);
    dispatch(toggleButton(setIsSelected(!isSelected)));
  };

  return (
    <div
      className={classNames(
        "flex h-10 w-20 bg-gray-600 rounded-full transition-all duration-200",
        {
          "bg-green-500": isSelected,
        }
      )}
      onClick={toggleSelected}
    >
      <span
        className={classNames(
          "h-10 w-10 bg-white rounded-full transition-all duration-200",
          {
            "ml-10": isSelected,
          }
        )}
      />
    </div>
  );
};

export default ToggleButton;
