import React from 'react';

const Section = ({
  title,
  describeTitle,
  describeDescribe,
  button,
  buttonLink,
  buttonIcon,
  buttonText,
  buttonStyle,
  describeStyle,
}) => {
  return (
    <div>
      <div className='text'>
        <h2>{title}</h2>
        <h4>{describeTitle}</h4>
        <p style={describeStyle}>{describeDescribe}</p>

        <div>
          <a className='Btn' style={buttonStyle} href={buttonLink}>
            {button}
            {buttonText}
            {buttonIcon}
          </a>
        </div>
      </div>
      <div className='background'></div>
    </div>
  );
};
export default Section;
