import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

import AddFab from "./AddStyles";

export interface Props {
  click: () => void;
}

const Add = ({ click }: Props) => (
  <div className="fixed-action-btn">
    <div
      onClick={click}
      onKeyDown={click}
      role="button"
      tabIndex={0}
      className="btn-floating btn-large waves-effect waves-light red"
    >
      <AddFab>
        <FontAwesomeIcon size="lg" icon={faPlus} />
      </AddFab>
    </div>
  </div>
);

export default Add;
