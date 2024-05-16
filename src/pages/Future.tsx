import React from 'react';
import cx from 'clsx';

const Future = () => {
  const [mouseEntered, setEntered] = React.useState(false);
  return (
    <div className="px-52 flex h-screen w-full bg-zinc-950 justify-center items-center">
      <h1
        onMouseEnter={() => setEntered(true)}
        onMouseLeave={() => setEntered(false)}
        className={cx('text-6xl bg-slate-600 bg-opacity-20 p-8 move-origin', {
          'rotating-door': mouseEntered,
        })}
      >
        A new future awaits you. Let's get started!
      </h1>
    </div>
  );
};

export default Future;
