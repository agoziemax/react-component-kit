import React from 'react';
import className from 'classnames';

const finalClassName = className({
  'bg-blue-500': true,
});
function Button({ children, className, primary, secondary, success, warning, outline, rounded }) {

  //this children props is an inbuilt feature of React that allows you to put any value when rendering the component
  return <button className={`bg-blue-500 text-white m-2 w-auto flex p-3  ${className}`}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning or danger is allowed');
    }
  },
};
export default Button;
