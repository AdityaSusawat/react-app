function Message() {
	const name = 'REX'
	if (name)
        return <h1>Hello {name}</h1>; //We can write any javaScript expression (a piece of code that produces a value) in the braces { }
	else
		return <h1>hello World</h1>; //JSX: JavaScript XML ; Under the hood, this strange HTML gets converted to proper javaScript
}
export default Message;