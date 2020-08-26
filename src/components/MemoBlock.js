import React from 'react';

const MemoBlock = ({ name, val }) => {
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = val;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className="memo-block-item">
      <div className="memo-name" onClick={copyToClipboard}>
        {name}
      </div>
      <div className="btn-group">
        <button className="edit">&#9998;</button>
        <button className="remove">&#10006;</button>
      </div>
    </div>
  );
};

export default MemoBlock;
