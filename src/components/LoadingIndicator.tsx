"use client";
import { ProgressLoader } from "nextjs-progressloader";

const LoadingIndicator = () => {
  return <ProgressLoader color="#6C194F" showSpinner={false} height={4} />;
};

export default LoadingIndicator;
