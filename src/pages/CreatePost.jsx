import React from "react";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/redux/UseTitle";
import CardCreatePost from "components/CardCreatePost";

function CreatePosting() {
  useTitle("Create Post | Altagram");
  return (
    <div>
      <CardCreatePost />
    </div>
  );
}

export default WithRouter(CreatePosting);
