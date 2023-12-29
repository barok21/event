import React from 'react';
import { PuffLoader, ScaleLoader } from 'react-spinners';

const Loading = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        {/* <PropagateLoader color="#36d7b7" /> */}
        <PuffLoader color="#705CF7" />
        {/* <ScaleLoader color="#705CF7" /> */}
      </div>
    </section>
  );
};

export default Loading;
