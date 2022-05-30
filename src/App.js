import { useState } from 'react';
import styled from 'styled-components';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './App.css';

function App() {
  marked.setOptions({
		breaks: true,
	});
  
	const example = `# This is a h1 header

## This is a h2 header
  
This is [a link](http://url.com/)

\`<p>This is inline code</p>\`

\`\`\`
<p>This is a code block</p>
\`\`\`

* this is a list item
* and another one

> This is a blockquote

This is an image
![cute-animal](https://media.wired.com/photos/593261cab8eb31692072f129/master/w_320,c_limit/85120553.jpg)

**This is bolded text**`;

	const exampleHTML = DOMPurify.sanitize(marked.parse(example));

	const [markdown, setMarkdown] = useState(exampleHTML);

	const handleChange = e => {
		setMarkdown(DOMPurify.sanitize(marked.parse(e.target.value)));
	};
	return (
		<MainWrapper className='App'>
			<EditorWrapper>
				<EditorTitle>Type your Markdown here</EditorTitle>
				<TextArea
					spellCheck='false'
					name='editor'
					id='editor'
					onChange={handleChange}
					defaultValue={example}
				/>
			</EditorWrapper>
			<PreviewWrapper>
				<div id='preview' dangerouslySetInnerHTML={{ __html: markdown }} />
			</PreviewWrapper>
		</MainWrapper>
	);
}

export default App;

const EditorWrapper = styled.div`
	background-color: gray;
	width: 60vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const EditorTitle = styled.h2`
	color: darkgray;
`;

const TextArea = styled.textarea`
	border: none;
	width: 85%;
	height: 86vh;
	resize: none;
	background: none;
	color: whitesmoke;
	:focus {
		outline: 0;
	}
`;

const PreviewWrapper = styled.div`
	background-color: white;
	width: 50vw;
	padding: 75px;
	text-align: left;
`;

const MainWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
