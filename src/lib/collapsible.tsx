import React from 'react';

const data = {
  data: 'level 0',
  props: {
    data: 'level 1',
    props: {
      data: 'level 2',
      props: {
        data: 'level 3',
      },
    },
  },
};

export const CollapsibleWrapper = () => {
  return <Collapsible nestedData={data} />;
};
export const Collapsible = ({ nestedData }: { nestedData: any }) => {
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <h1>{nestedData.data}</h1>
      {nestedData.props && (
        <>
          <button onClick={() => setShown(!shown)}>
            {shown ? 'collapse' : 'expand'}
          </button>
          {shown && <Collapsible nestedData={nestedData.props} />}
        </>
      )}
    </div>
  );
};
