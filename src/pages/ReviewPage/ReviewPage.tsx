import { ReactElement } from "react";
import ProgressComponent from "../../components/ProgressComponent";
import ReviewComponent from "../../components/ReviewComponent";

type ReviewPageProps = {
  setPageType: Function;
};

export const ReviewPage = ({ setPageType }: ReviewPageProps): ReactElement => {
  return (
    <>
      <ProgressComponent progressType="review" />
      <ReviewComponent setPageType={setPageType} />
    </>
  );
};
