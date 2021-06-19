const withClass = (Component, className) => {
  return (props) => {
    return (
      <div className={className.join(' ')}>
        <Component {...props} />
      </div>
    );
  };
};

export default withClass;
