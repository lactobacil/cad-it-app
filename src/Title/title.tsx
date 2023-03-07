import React, { Children } from 'react';
import './title.css';
import Parser from 'html-react-parser';

interface Props {
    title: string
}

const Title: React.FC<Props> = ({
  title
}) => {

  return (
    <>
      <div className="Title">
        {title}
      </div>
    </>
  )
}

export default Title;