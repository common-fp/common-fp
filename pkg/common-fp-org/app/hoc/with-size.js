const withSize = Cmpt => {
  const CmptWithSize = ({ size, ...restProps }) => {
    if (size) {
      if (restProps.height !== undefined || restProps.size !== undefined) {
        throw new Error(
          "Invalid props - you cannot pass both a 'size' and ('height' or 'width')"
        )
      }
      restProps.height = size
      restProps.width = size
    }

    return <Cmpt {...restProps} />
  }

  return CmptWithSize
}

export default withSize
