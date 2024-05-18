function myDebounce(val, wait) {
  const [value, setValue] = useState(val)

  useEffect(() => {
    let handle = setTimeout(() => {
      setValue(val)
    }, wait)
    return () => clearTimeout(handle)
  }, [val, wait])

  return value
}
