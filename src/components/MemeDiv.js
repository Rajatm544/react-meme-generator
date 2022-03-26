import React, { useState, useEffect } from 'react';
import '../stylesheets/memediv.css';
import axios from 'axios';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

const MemeDiv = () => {
	const [memes, setMemes] = useState([]); // for storing API response
	const [selectedMeme, setSelectedMeme] = useState({}); // for storing the randomly selected meme
	const [changeMeme, setChangeMeme] = useState(true); // To pick another meme
	const [topText, setTopText] = useState('');
	const [bottomText, setBottomText] = useState('');
	const [selectedColor, setSelectedColor] = useState('white');

	// fetch meme images on page load and until memes state array is filled
	useEffect(() => {
		if (!memes.length) {
			axios.get('https://api.imgflip.com/get_memes').then((result) => {
				if (result.data.success) {
					setMemes(result.data.data.memes);
				}
			});
		}
	}, [memes]);

	// randomly select one of the memes from state array
	useEffect(() => {
		if (memes.length) {
			const randomMeme = getRandomInt(memes.length);
			setSelectedMeme(memes[randomMeme]);
		}
	}, [memes, changeMeme]);

	// function to get random interger between 0 to max
	const getRandomInt = (max) => {
		const value = Math.floor(Math.random() * max);
		return value;
	};

	// update state to trigger re-render with new meme image
	const handleMemeChange = (e) => {
		setChangeMeme(!changeMeme);
	};

	// handle form inputs
	const handleChange = (e) => {
		if (e.target.name === 'top_text') setTopText(e.target.value);
		else setBottomText(e.target.value);
	};

	// use html-to-image to donwload the meme div as png
	const handleDownload = (e) => {
		htmlToImage
			.toPng(document.getElementById('meme-download'))
			.then((dataUrl) => {
				download(dataUrl, `${selectedMeme.name}.png`);
			});
	};

	// change text color based on color picker
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

			{/* display a color picker with 5 color options */}
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

			{/* show 2 input fields */}
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

			{/* buttons for changing meme and downloading the file */}
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
