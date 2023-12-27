import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loading = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        {/* <PropagateLoader color="#36d7b7" /> */}
        <PuffLoader color="#36d7b7" />
      </div>
    </section>
  );
};

export default Loading;
