const asCvOptionalSection = (WrappedComponent) => {
  const show = false;
  const ComponentWithExtraInfo = (props) => {
    return show ? <WrappedComponent {...props} /> : <></>;
  };
  return ComponentWithExtraInfo;
};

export default asCvOptionalSection;
