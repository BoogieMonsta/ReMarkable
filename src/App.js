import styled from 'styled-components';
import './App.css';

function App() {
	return (
		<MainWrapper className='App'>
			<EditorWrapper>
				<EditorTitle>Type your Markdown here</EditorTitle>
				<TextArea name='editor' id='editor' cols='30' rows='10' />
			</EditorWrapper>
			<PreviewWrapper>
				<PreviewTitle>Preview</PreviewTitle>
				<div id='preview'></div>
			</PreviewWrapper>
		</MainWrapper>
	);
}

export default App;

const EditorWrapper = styled.div`
	background-color: black;
	width: 50vw;
`;

const EditorTitle = styled.h2`
	color: white;
`;

const TextArea = styled.textarea`
	border: none;
`;

const PreviewWrapper = styled.div`
	background-color: white;
  width: 50vw;
`;

const PreviewTitle = styled.h2`
	color: black;
`;

const MainWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
