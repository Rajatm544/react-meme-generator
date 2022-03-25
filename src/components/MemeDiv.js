import React, { useState, useEffect } from 'react';
import '../stylesheets/memediv.css';
import axios from 'axios';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

const MemeDiv = () => {
	const [memes, setMemes] = useState([]);
	const [selectedMeme, setSelectedMeme] = useState({});
	const [changeMeme, setChangeMeme] = useState(true);
	const [topText, setTopText] = useState('');
	const [bottomText, setBottomText] = useState('');
	const [selectedColor, setSelectedColor] = useState('white');

	const getRandomInt = (max) => {
		const value = Math.floor(Math.random() * max);
		return value;
	};

	useEffect(() => {
		if (!memes.length) {
			axios.get('https://api.imgflip.com/get_memes').then((result) => {
				if (result.data.success) {
					setMemes(result.data.data.memes);
				}
			});
		}
	}, [memes]);

	useEffect(() => {
		if (memes.length) {
			const randomMeme = getRandomInt(memes.length);
			setSelectedMeme(memes[randomMeme]);
		}
	}, [memes, changeMeme]);

	const handleMemeChange = (e) => {
		setChangeMeme(!changeMeme);
	};

	const handleChange = (e) => {
		if (e.target.name === 'top_text') setTopText(e.target.value);
		else setBottomText(e.target.value);
	};

	const handleDownload = (e) => {
		htmlToImage
			.toPng(document.getElementById('meme-download'))
			.then(function (dataUrl) {
				download(dataUrl, `${selectedMeme.name}.png`);
			});
	};

	const handleColor = (e) => {
		const color = e.target.className.split(' ')[2];
		setSelectedColor(color);
	};

	return (
		<div className='container'>
			<div
				className='meme-container'
				id='meme-download'
				style={{
					backgroundImage: `url(${selectedMeme?.url})`,
					height: `${selectedMeme?.height}px`,
					width: `${selectedMeme?.width}px`,
				}}>
				<h4 style={{ color: selectedColor }} className='meme-top-text'>
					{topText}
				</h4>
				<h4
					style={{ color: selectedColor }}
					className='meme-bottom-text'>
					{bottomText}
				</h4>
			</div>
			<div className='color-picker'>
				<button
					onClick={handleColor}
					style={
						selectedColor === 'orange'
							? {
									height: '1.5em',
									width: '1.5em',
							  }
							: {}
					}
					className='color waves-effect orange'></button>
				<button
					onClick={handleColor}
					style={
						selectedColor === 'white'
							? {
									height: '1.5em',
									width: '1.5em',
							  }
							: {}
					}
					className='color waves-effect white'></button>
				<button
					onClick={handleColor}
					style={
						selectedColor === 'black'
							? {
									height: '1.5em',
									width: '1.5em',
							  }
							: {}
					}
					className='color waves-effect black'></button>
				<button
					onClick={handleColor}
					style={
						selectedColor === 'pink'
							? {
									height: '1.5em',
									width: '1.5em',
							  }
							: {}
					}
					className='color waves-effect pink'></button>
				<button
					onClick={handleColor}
					style={
						selectedColor === 'yellow'
							? {
									height: '1.5em',
									width: '1.5em',
							  }
							: {}
					}
					className='color waves-effect yellow'></button>
			</div>
			<form>
				<div className='row'>
					<div className='input-field'>
						<input
							className='validate'
							type='text'
							id='top_text'
							name='top_text'
							value={topText}
							onChange={handleChange}
						/>
						<label for='top_text'>Top Text</label>
					</div>
					<div className='input-field'>
						<input
							className='validate'
							type='text'
							name='bottom_text'
							id='bottom_text'
							value={bottomText}
							onChange={handleChange}
						/>
						<label for='bottom_text'>Bottom Text</label>
					</div>
				</div>
			</form>
			<div className='button-container'>
				<button
					onClick={handleMemeChange}
					className='waves-effect waves-light btn blue'>
					Change Meme
				</button>
				<button
					onClick={handleDownload}
					className='waves-effect waves-light btn'>
					Download Meme
				</button>
			</div>
		</div>
	);
};

export default MemeDiv;
